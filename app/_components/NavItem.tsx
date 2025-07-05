"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly href?: string;
};

function NavItem({ children, className, href }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li
      className={clsx(
        className,
        "cursor-pointer z-10 w-full md:w-auto text-center grid"
      )}
    >
      {href ? (
        <Link
          className={clsx(
            "py-3 md:py-1 md:px-3 hover:bg-primary hover:text-on-primary md:rounded-sm",
            {
              "underline decoration-2 underline-offset-4": isActive,
            }
          )}
          href={href}
        >
          {children}
        </Link>
      ) : (
        children
      )}
    </li>
  );
}

export default NavItem;
