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
        <Avatar className="relative overflow-hidden rounded-full border border-transparent shadow-lg before:absolute before:inset-0 before:animate-pulse before:rounded-full before:ring-2 before:ring-blue-500 before:ring-offset-4 before:ring-offset-transparent before:content-['']">
          <AvatarImage
            src={Pic2.src}
            alt="Ari's pic"
            className="translate-x-1 translate-y-3 scale-[300%] transform shadow-md"
          />
          <AvatarFallback>Ari</AvatarFallback>
        </Avatar>

        <div className="hidden text-foreground sm:flex">ARIFUL</div>
      </Link>
    </div>
  );
}
export default NavIcon;
