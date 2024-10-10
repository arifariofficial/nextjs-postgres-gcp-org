import BackgroundImage from "@/components/background-image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full items-center justify-center">
      <BackgroundImage className="hidden sm:flex" />
      {children}
    </div>
  );
}
