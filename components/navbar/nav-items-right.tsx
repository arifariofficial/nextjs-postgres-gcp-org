import { cn } from "@/lib/utils";
import { ModeToggle } from "../mode-toggle";
import UserButtonDesktop from "./user-button-desktop";
import { auth } from "@/auth";
import { Session } from "next-auth";

interface NavItemsMRightrops {
  session: Session | null;
  className?: string;
}

async function NavItemsRight({ className, session }: NavItemsMRightrops) {
  return (
    <div className={cn(className, "flex")}>
      <ModeToggle />
      <UserButtonDesktop session={session} className="hidden sm:flex" />
    </div>
  );
}
export default NavItemsRight;
