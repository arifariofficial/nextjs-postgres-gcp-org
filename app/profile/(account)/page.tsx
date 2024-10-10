import Account from "@/components/profile/account";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ariful | Account",
  description: "Profile Settings",
  icons: "/favicon.ico",
};

export default function ProfilePage() {
  return <Account />;
}
