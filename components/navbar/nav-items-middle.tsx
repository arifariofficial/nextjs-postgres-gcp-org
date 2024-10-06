import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavItemsMiddleProps {
  className?: string;
}

function NavItemsMiddle({ className }: NavItemsMiddleProps) {
  return (
    <div className={cn(className)}>
      <Link href="/aboutme">About me</Link>
      <Link href="/projects">Projects</Link>
    </div>
  );
}
export default NavItemsMiddle;
