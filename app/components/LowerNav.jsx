"use client";
import Link from "next/link";
// shadow components
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function LowerNav() {
  return (
    <div className="flex  justify-start items-center bg-primary  h-12 overflow-visible p-6">
      <NavigationMenu>
        <NavigationMenuList className="text-white space-x-8 pl-4">
          <NavigationMenuItem>
            <NavigationMenuLink href="/switches">Switches</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/routers">Routers</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/rackmounts">
              Rackmounts
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/fans">
              Fans
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/powers">
              Powers
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

// for the div component.
// className="flex justify-start items-center w-full bg-primary h-12"
