import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavIconProps {
  className?: string;
}

function NavIcon({ className }: NavIconProps) {
  return (
    <div className={cn(className)}>
      <Link href="/" className="p-3 font-serif text-xl font-semibold italic">
        ARIFUL
      </Link>
    </div>
  );
}
export default NavIcon;
