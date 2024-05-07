"use client";
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
  const navValues = [
    { name: "Switches", href: "/switches" },
    { name: "Routers", href: "/routers" },
    { name: "Rackmounts", href: "/rackmounts" },
    { name: "Fans", href: "/fans" },
    { name: "Powers", href: "/powers" },
  ];

  return (
    <div className="flex  justify-start items-center bg-primary  h-12 overflow-visible p-6">
      <NavigationMenu>
        <NavigationMenuList className="text-white space-x-8 pl-4">
          {navValues.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink href={item.href} className="font-mono">
                {item.name}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}


