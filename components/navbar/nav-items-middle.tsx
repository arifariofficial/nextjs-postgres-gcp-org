"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Pic1 from "@/public/images/pic1.jpg";
import Image from "next/image";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "RAG Application",
    href: "/chat",
    description:
      "If you want to learn about your rights and the benefits you can receive from an insurance company or from Kela when you have an accident, use this application.",
  },
  {
    title: "Phonebook",
    href: "/phonebook",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Bloglist",
    href: "/bloglist",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Patientor",
    href: "/patientor",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Booking",
    href: "/booking",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Weather Application",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

interface NavItemsMiddleProps {
  className?: string;
}

export function NavItemsMiddle({ className }: NavItemsMiddleProps) {
  return (
    <div className={cn(className, "relative")}>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About Me</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/aboutme"
                    >
                      <div className="mb-3 h-[90px] w-[100px] overflow-hidden rounded-s-full border border-foreground pl-2 shadow-sm">
                        <Image
                          src={Pic1}
                          alt="Profile Pic"
                          layout="intrinsic"
                          objectFit="cover"
                          className="-translate-y-2 scale-[220%] transform"
                        />
                      </div>
                      <div className="z-10 mb-1 text-lg font-medium">
                        Ariful Islam
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Let’s turn ideas into clean code and creative solutions!
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <ListItem href="/docs" title="Skills">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                </li>
                <li>
                  <ListItem href="/docs" title="Education">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                </li>
                <li>
                  <ListItem
                    href="/docs/installation"
                    title="Courses and Certification"
                  >
                    How to install dependencies and structure your app.
                  </ListItem>
                </li>
                <li>
                  <ListItem href="/docs/primitives/typography" title="Hobby">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </li>
                <li>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Experience"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[350px] gap-3 p-4 md:w-[450px] md:grid-cols-2">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:flex">
            <Link
              href="https://github.com/arifariofficial"
              legacyBehavior
              passHref
            >
              <a target="_blank" rel="noopener noreferrer">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Github
                </NavigationMenuLink>
              </a>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
