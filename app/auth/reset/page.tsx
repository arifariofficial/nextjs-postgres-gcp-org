import { ResetForm } from "@/components/auth/reset-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ariful | Reset your password",
  description: "Please enter your email address to reset your password",
  icons: "/favicon.ico",
};

export default function ResetPage() {
  return <ResetForm />;
}
