import { RegisterForm } from "@/components/auth/register-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ariful | Create an account",
  description: "Please create an account to continue",
  icons: "/favicon.ico",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
