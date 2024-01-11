import React from 'react';
import { NavigationMenuLink } from '@fss-fmi-site/components/ui/navigation-menu';
import { cn } from '@fss-fmi-site/lib/utils';

type NavbarDropdownItemProps = React.ComponentPropsWithoutRef<'a'> & {
  className?: string;
  title: string;
};

export const NavbarDropdownItem = React.forwardRef<
  React.ElementRef<'a'>,
  NavbarDropdownItemProps
>(({ className, title, children, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
          className,
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-3 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  </li>
));
NavbarDropdownItem.displayName = 'NavbarDropdownItem';
NavbarDropdownItem.defaultProps = {
  className: '',
};
