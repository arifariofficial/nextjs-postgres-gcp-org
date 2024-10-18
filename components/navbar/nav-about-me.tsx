import Image from "next/image";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import Pic1 from "@/public/images/pic1.jpg";
import React from "react";
import { ListItem } from "./list-item";

const NavAboutMe = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>About Ariful</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[300px] sm:gap-3 sm:p-4 md:w-[400px] md:grid-cols-[.75fr_1fr]">
          <li className="row-span-3">
            <NavigationMenuLink
              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
              href="/aboutme"
            >
              <>
                <div className="relative mb-3 h-[90px] w-[100px] overflow-hidden rounded-s-full border border-foreground pl-2 shadow-sm">
                  <Image
                    src={Pic1}
                    alt="Profile Pic"
                    fill
                    sizes={"max-w-[1200px]"}
                    style={{
                      objectFit: "cover",
                      transform: "translateY(-0.5rem) scale(2.2)",
                    }}
                    className="transform"
                    priority
                  />
                </div>
                <div className="z-10 mb-1 text-lg font-medium">
                  Ariful Islam
                </div>
                <p className="text-sm leading-tight text-muted-foreground">
                  Let’s turn ideas into clean code and creative solutions!
                </p>
              </>
            </NavigationMenuLink>
          </li>
          <li>
            <ListItem href="/aboutme/skills" title="Skills">
              FullStack, Mobile development, DevOps, and AI for innovative
              solutions!
            </ListItem>
          </li>
          <li>
            <ListItem href="/aboutme/education" title="Education">
              Final-year IT student specializing in IoT....
            </ListItem>
          </li>
          <li>
            <ListItem
              href="/aboutme/certifications"
              title="Courses and Certification"
            >
              Certifications in full-stack, Cloud, and Networking.
            </ListItem>
          </li>
          <li>
            <ListItem href="/aboutme/hobbies" title="Hobbies">
              Now we are talking about fun stuff...
            </ListItem>
          </li>
          <li>
            <ListItem href="/aboutme/experiences" title="Experience">
              Proven expertise through hands-on experience in full-stack
              development, cloud solutions, and DevOps.
            </ListItem>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
export default NavAboutMe;
