import { cn } from "@/lib/utils";

interface BackgroundImageProps {
  className?: string;
}

const BackgroundImage = ({ className }: BackgroundImageProps) => {
  return (
    <div
      className={cn(
        className,
        "fixed left-0 top-0 -z-10 h-full w-full bg-cover bg-center",
      )}
      style={{ backgroundImage: `url('/images/sky.jpg')` }}
    />
  );
};
export default BackgroundImage;
