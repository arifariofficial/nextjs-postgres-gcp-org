import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavIconProps {
  className?: string;
}

function NavIcon({ className }: NavIconProps) {
  return (
    <div className={cn(className)}>
      <Link href="/">Ariful</Link>
    </div>
  );
}
export default NavIcon;
