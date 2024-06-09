import { cn } from "@/lib/utils";

interface NavItemsMiddleProps {
  className?: string;
}

function NavItemsMiddle({ className }: NavItemsMiddleProps) {
  return (
    <div className={cn(className)}>
      <div>Middle</div>
      <div>Middle</div>
      <div>Middle</div>
    </div>
  );
}
export default NavItemsMiddle;
