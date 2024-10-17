import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn(className, "mx-auto size-full max-w-screen-2xl")}>
      {children}
    </div>
  );
};
export default Container;
