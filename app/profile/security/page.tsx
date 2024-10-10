import Security from "@/components/profile/security";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ariful | Security",
  description: "Security Settings",
  icons: "/favicon.ico",
};

export default function SecurityPage() {
  return <Security />;
}
