import { auth } from "@/auth";
import Container from "../container";
import NavIcon from "./nav-icon";
import NavItemsRight from "./nav-items-right";
import UserButtonMobile from "./user-button-mobile";
import { NavItemsMiddle } from "./nav-items-middle";

export default async function NavBar() {
  const session = await auth();
  return (
    <nav className="sticky top-0 z-50 flex border-b border-b-foreground/10 bg-background text-foreground">
      <Container className="flex h-14 items-center justify-between">
        <NavIcon />
        <NavItemsMiddle className="hidden h-full items-center sm:flex" />
        <NavItemsRight session={session} />
        <UserButtonMobile session={session} className="flex h-full sm:hidden" />
      </Container>
    </nav>
  );
}
