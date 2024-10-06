import { cn } from "@/lib/utils";
import { ModeToggle } from "../mode-toggle";
import UserButtonDesktop from "./user-button-desktop";
import { Session } from "next-auth";

interface NavItemsMRightrops {
  session: Session | null;
  className?: string;
}

async function NavItemsRight({ className, session }: NavItemsMRightrops) {
  return (
    <div className={cn(className, "mr-1 flex h-full items-center")}>
      <ModeToggle />
      <UserButtonDesktop session={session} className="hidden h-full sm:flex" />
    </div>
  );
}
export default NavItemsRight;
