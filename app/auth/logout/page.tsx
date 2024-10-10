import { LoginForm } from "@/components/auth/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ariful | Logged out",
  description: "Please log in again to continue",
  icons: "/favicon.ico",
};

export default function LogoutPage() {
  return <LoginForm headerLabel="Logged Out Successfully" />;
}
