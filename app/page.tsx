import Image from "next/image";
import Sky from "@/public/images/sky.jpg";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-foreground transition-colors duration-300">
      <Image
        src={Sky}
        alt="background-image"
        fill={true}
        objectFit="cover"
        className="dark:hidden"
      />
      <div className="animate-fade-in max-w-3xl rounded-lg bg-card p-8 text-card-foreground shadow-lg">
        <h1 className="animate-fade-in mb-6 text-center text-5xl font-bold">
          Welcome to <span className="text-foreground/70">ariful.org</span>
        </h1>
        <p className="text-center text-lg">
          ariful.org is a full-stack web application built with{" "}
          <strong>Next.js</strong> and <strong>TypeScript</strong>, providing a
          robust and scalable front-end architecture. The design is powered by{" "}
          <strong>Tailwind CSS</strong>, delivering a clean and responsive user
          interface.
        </p>
        <p className="mt-4 text-center text-lg">
          The project is hosted on <strong>Google Cloud Platform (GCP)</strong>{" "}
          and uses a <strong>Dockerized environment</strong> with containers for{" "}
          <strong>PostgreSQL</strong> and <strong>NGINX</strong> for reverse
          proxy and load balancing.
        </p>
        <p className="mt-4 text-center text-lg">
          For authorization, <strong>NextAuth</strong> is used, and{" "}
          <strong>Stripe</strong> handles payment processing. The CI/CD process
          is automated using <strong>Jenkins</strong>.
        </p>
        <div className="animate-fade-in mt-6 flex justify-center delay-150">
          <a
            href="https://github.com/arifariofficial/ariful-org-nextjs-prisma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg font-bold text-foreground/70 transition-colors duration-300 hover:text-primary-hover"
          >
            <FaGithub className="mr-2" /> View Source on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
