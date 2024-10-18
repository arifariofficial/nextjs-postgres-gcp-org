import { supabaseAdmin } from "@/lib/supabase";

export const runtime = "edge";

export const POST = async (req: Request): Promise<Response> => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

  if (!supabaseUrl) {
    throw new Error("supabaseUrl is required.");
  }

  try {
    // Parse and validate request body
    let body;
    try {
      body = await req.json();
    } catch (jsonError) {
      console.error("Invalid JSON payload:", jsonError);
      return new Response(
        JSON.stringify({ error: "Invalid JSON in request body" }),
        { status: 400 },
      );
    }

    const { query, apiKey, matches } = body || {};
    if (!query || !apiKey || typeof matches !== "number" || matches <= 0) {
      return new Response(
        JSON.stringify({ error: "Missing or invalid request parameters" }),
        { status: 400 },
      );
    }

    if (!/^sk-[A-Za-z0-9]{32,}$/.test(apiKey)) {
      return new Response(
        JSON.stringify({ error: "Invalid OpenAI API key format" }),
        { status: 400 },
      );
    }

    const input = query.replace(/\n/g, " "); // Ensure query is valid before proceeding

    // Make request to OpenAI API
    const res = await fetch("https://api.openai.com/v1/embeddings", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      method: "POST",
      body: JSON.stringify({
        model: "text-embedding-ada-002",
        input,
      }),
    });

    if (!res.ok) {
      const errorDetails = await res.json();
      console.error(`OpenAI API Error (${res.status}):`, errorDetails);
      return new Response(
        JSON.stringify({ error: "OpenAI API request failed" }),
        { status: 500 },
      );
    }

    const json = await res.json();
    const embedding = json.data[0].embedding;

    // Make Supabase RPC call
    const { data: chunks, error } = await supabaseAdmin.rpc("sipe_ai_search", {
      match_count: matches,
      query_embedding: embedding,
      similarity_threshold: 0.8,
    });

    if (error) {
      console.error("Supabase RPC Error:", error);
      return new Response(JSON.stringify({ error: "Supabase RPC failed" }), {
        status: 500,
      });
    }

    // Successful response
    return new Response(JSON.stringify(chunks), { status: 200 });
  } catch (error) {
    console.error("General error:", error);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred" }),
      { status: 500 },
    );
  }
};
