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
import { ListItem } from "./list-item";
import NavAboutMe from "./nav-about-me";

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
          <NavAboutMe />
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
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                target="_blank"
              >
                Github
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
