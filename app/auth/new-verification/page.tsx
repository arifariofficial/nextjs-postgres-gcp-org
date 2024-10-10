import VerificationForm from "@/components/auth/verification-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ariful | Email Verification",
  description: "Please create an account to continue",
  icons: "/favicon.ico",
};

export default function NewVerificationPage() {
  return <VerificationForm />;
}
