import AboutMe from "@/components/about-me/about-me";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ariful | About Me",
  description: "Legal AI assistant",
  icons: "/favicon.ico",
};
const AboutMeHome = () => {
  return <AboutMe />;
};
export default AboutMeHome;
