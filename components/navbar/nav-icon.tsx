import { cn } from "@/lib/utils";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Pic2 from "@/public/images/pic2.jpg";

interface NavIconProps {
  className?: string;
}

function NavIcon({ className }: NavIconProps) {
  return (
    <div className={cn(className)}>
      <Link
        href="/"
        className="flex items-center gap-2 p-3 font-serif text-xl font-semibold"
      >
        <Avatar>
          <AvatarImage
            src={Pic2.src}
            alt="Ari's pic"
            className="transfrom 0 translate-x-1 translate-y-3 scale-[300%] border shadow-md"
          />
          <AvatarFallback>Ari</AvatarFallback>
        </Avatar>
        <div className="text-foreground">ARIFUL</div>
      </Link>
    </div>
  );
}
export default NavIcon;
