import { auth } from "@/auth";
import Container from "../container";
import NavIcon from "./nav-icon";
import NavItemsMiddle from "./nav-items-middle";
import NavItemsRight from "./nav-items-right";
import UserButtonMobile from "./user-button-mobile";

export default async function NavBar() {
  const session = await auth();
  return (
    <nav className="sticky top-0 z-50 flex border-b border-b-foreground/10 text-foreground">
      <Container className="flex h-14 items-center justify-between bg-background">
        <NavIcon />
        <NavItemsMiddle className="flex w-full justify-end gap-6 pr-6" />
        <NavItemsRight session={session} />
        <UserButtonMobile session={session} className="flex h-full sm:hidden" />
      </Container>
    </nav>
  );
}
