import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Check if environment variables are set
if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error("Missing Supabase environment variables.");
}

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

// Optionally log Supabase URL (not the sensitive key)
console.log("Supabase URL: ", supabaseUrl);

// Avoid logging the service role key for security reasons in production
if (process.env.NODE_ENV !== "production") {
  console.log("Supabase Service Role Key: ", supabaseServiceRoleKey);  // Only log in non-production
}
