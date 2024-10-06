import { auth } from "@/auth";
import Container from "../container";
import NavIcon from "./nav-icon";
import NavItemsMiddle from "./nav-items-middle";
import NavItemsRight from "./nav-items-right";
import UserButtonMobile from "./user-button-mobile";

export default async function NavBar() {
  const session = await auth();
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-900/10 bg-white/80 drop-shadow-sm backdrop-blur-sm">
      <Container className="flex items-center justify-between bg-background">
        <NavIcon />
        <NavItemsMiddle className="flex gap-2" />
        <NavItemsRight session={session} />
        <UserButtonMobile
          session={session}
          className="flex size-full sm:hidden"
        />
      </Container>
    </nav>
  );
}
