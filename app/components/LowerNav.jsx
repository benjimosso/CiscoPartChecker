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
    <div className="flex justify-start items-center bg-primary  h-12">
      {/* <ul className="text-white flex justify-start gap-6 pl-4">
        <li>switches</li>
        <li className="hover:border-b hover:border-white hover:translate-x-4 transition-all duration-400 ease-in  ">
          routers
        </li>
        <li className="hover:border-b hover:border-white hover:translate-x-4 transition-all duration-400 ease-in  ">
          <Link href="/rackmounts">rackmounts</Link>
        </li>
      </ul> */}
      <NavigationMenu>
       
          <NavigationMenuList className="text-white space-x-8 pl-4">
            <NavigationMenuItem >
              <NavigationMenuLink href="/switches">Switches</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/routers">Routers</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/rackmounts">Rackmounts</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-slate-500"> More </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuList className="grid col-span-1 gap-4">
                  <NavigationMenuItem >
                    <NavigationMenuLink href="/switches">Switches</NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/routers">Routers</NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/rackmounts">Rackmounts</NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenuContent>
              </NavigationMenuItem>
          </NavigationMenuList>
        
      </NavigationMenu>
    </div>
  );
}

// for the div component.
// className="flex justify-start items-center w-full bg-primary h-12"
