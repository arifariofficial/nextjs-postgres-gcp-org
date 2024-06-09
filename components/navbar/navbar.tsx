import { auth } from "@/auth";
import Container from "../container";
import NavIcon from "./nav-icon";
import NavItemsMiddle from "./nav-items-middle";
import UserButtonDesktop from "./user-button-desktop";

export default async function NavBar() {
  const session = await auth();

  return (
    <nav className="w-full border-b">
      <Container className="flex justify-between bg-background">
        <NavIcon />
        <NavItemsMiddle className="flex gap-2" />
        <UserButtonDesktop session={session} className="hidden sm:flex" />
      </Container>
    </nav>
  );
}
