import React from 'react';
import {
  NavigationMenuContent,
  NavigationMenuLink,
} from '@fss-fmi-site/components/ui/navigation-menu';
import { NavbarDropdownItem } from '@fss-fmi-site/components/navbar-links/components/navbar-dropdown-item';

interface NavbarDropdownProps {
  link: {
    title: string;
    href: string;
    links?: {
      isFeatured: boolean;
      title: string;
      description: string;
      href: string;
    }[];
  };
}

export function NavbarDropdown({ link }: NavbarDropdownProps) {
  return (
    <NavigationMenuContent>
      <ul className="grid gap-3 p-4 grid-rows-4 grid-flow-col auto-cols-max">
        {link.links &&
          link.links.map((component) =>
            component.isFeatured ? (
              <NavigationMenuLink
                asChild
                key={component.title}
                className="w-52 h-full row-span-4"
              >
                <a
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href={component.href}
                >
                  <div className="mb-2 mt-4 text-lg font-medium">
                    {component.title}
                  </div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    {component.description}
                  </p>
                </a>
              </NavigationMenuLink>
            ) : (
              <NavbarDropdownItem
                key={component.title}
                title={component.title}
                href={component.href}
                className="w-52 h-full"
              >
                {component.description}
              </NavbarDropdownItem>
            ),
          )}
      </ul>
    </NavigationMenuContent>
  );
}

export default NavbarDropdown;
