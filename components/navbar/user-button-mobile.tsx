import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconAboutUs, UserIcon } from "@/components/ui/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Session } from "next-auth";
import { ThemeToggle } from "@/components/theme-toggle-mobile";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import SignOutButtonMobile from "@/components/auth/signout-client-mobile";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import SignInButtonMobile from "../auth/signin-client-mobile";
import { FaProjectDiagram } from "react-icons/fa";

interface UserButtonMobileProps {
  session: Session | null;
  className?: string;
}

export default function UserButtonMobile({
  session,
  className,
}: UserButtonMobileProps) {
  return (
    <div className={cn(className)}>
      <Sheet>
        <SheetTrigger
          asChild
          className="flex min-w-0 items-center justify-center px-2"
        >
          <Button variant="nav" className={cn(className, "mr-1 h-full")}>
            <HamburgerMenuIcon className="size-7" />
          </Button>
        </SheetTrigger>
        <SheetContent className="inset-y-0 flex w-full flex-col justify-start sm:hidden">
          {session && (
            <SheetHeader className="flex w-full items-center justify-center">
              <Avatar className="size-28 border shadow-md">
                {session.user.image && (
                  <AvatarImage
                    src={session.user.image}
                    alt={session.user.name || "Name not available"}
                  />
                )}
                <AvatarFallback className="size-28 rounded-none">
                  No Image
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-xl">{session.user.name || "No Name"}</p>
                <p>{session.user.email}</p>
              </div>
            </SheetHeader>
          )}
          {session && <Separator />}
          <SheetClose asChild>
            <Button
              variant="ghost"
              asChild
              className="flex justify-between px-8"
            >
              <Link className="" href="/aboutme">
                <p className="text-2xl font-bold">About Me</p>
                <IconAboutUs />
              </Link>
            </Button>
          </SheetClose>
          <Separator />
          <SheetClose asChild>
            <Button
              variant="ghost"
              asChild
              className="flex justify-between px-8"
            >
              <Link className="" href="/about">
                <p className="text-2xl font-bold">Projects</p>
                <FaProjectDiagram
                  className="size-5"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth={40}
                />
              </Link>
            </Button>
          </SheetClose>
          {session && (
            <>
              <Separator />
              <SheetClose asChild>
                <Button
                  variant="ghost"
                  asChild
                  className="flex justify-between px-8"
                >
                  <Link className="" href="/profile">
                    <p className="text-2xl font-bold">Account</p>
                    <UserIcon />
                  </Link>
                </Button>
              </SheetClose>
            </>
          )}
          <Separator />
          <SheetClose className="outline-none focus:outline-none focus-visible:outline-none">
            <ThemeToggle className="ml-3 flex w-full justify-between outline-none focus:outline-none focus-visible:outline-none" />
          </SheetClose>
          <Separator />
          {session ? (
            <SheetClose>
              <SignOutButtonMobile
                className="flex size-full justify-between px-7"
                variant="ghost"
              />
            </SheetClose>
          ) : (
            <SheetClose>
              <SignInButtonMobile
                className="flex size-full justify-between px-7"
                variant="ghost"
              />
            </SheetClose>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
