"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { IconMoon, IconSun } from "./ui/icons";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  variant?:
  | "nav"
  | "outline"
  | "default"
  | "destructive"
  | "secondary"
  | "ghost"
  | "link"
  | null
  | undefined;
}


export function ThemeToggle({ className, variant }: ThemeToggleProps) {
  const { setTheme, theme } = useTheme();
  const [, startTransition] = React.useTransition();

  return (
    <Button
    asChild
      className={cn(className)}
      variant={variant}
      onClick={() => {
        startTransition(() => {
          setTheme(theme === "light" ? "dark" : "light");
        });
      }}
    >
    <div>
      <p className="text-2xl font-bold h-full">Switch Theme</p>
      <div>
        {!theme ? null : theme === "dark" ? (
          <IconMoon className="size-6 transition-all" />
        ) : (
          <IconSun className="size-6 transition-all" />
        )}
        <span className="sr-only">Toggle theme</span>
      </div>
    </div>
    </Button>
  );
}
