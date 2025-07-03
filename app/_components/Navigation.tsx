"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import clsx from "clsx";
import dynamic from "next/dynamic";
import { useState } from "react";
import { HiBars3, HiBell, HiXMark } from "react-icons/hi2";

const DarkMode = dynamic(() => import("./DarkMode"), {
  ssr: false,
});

export const revalidate = 0;

type NavItemProps = {
  readonly children: React.ReactNode;
  readonly isPadded?: boolean;
  readonly className?: string;
};

function NavItem({ children, className, isPadded = true }: NavItemProps) {
  return (
    <li
      className={clsx(
        className,
        "rounded-md cursor-pointer z-10 w-full md:w-auto text-center",
        {
          "hover:bg-primary hover:text-on-primary py-3 md:px-3 md:py-1":
            isPadded,
        }
      )}
    >
      {children}
    </li>
  );
}

type NavigationProps = {
  readonly children?: React.ReactNode;
};

function Navigation({ children }: NavigationProps) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="relative z-20 w-screen flex items-center justify-between">
      <div>{children}</div>
      <button
        className="md:hidden flex flex-col gap-1 items-center px-2 py-1 rounded focus:outline-none"
        aria-label="Toggle navigation"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="block w-6 h-0.5 bg-current"></span>
        <span className="block w-6 h-0.5 bg-current"></span>
        <span className="block w-6 h-0.5 bg-current"></span>
      </button>

      <ul
        className={clsx(
          "flex p-0 rounded-md md:flex-row items-center text-sm font-semibold bg-surface absolute left-0 right-0 top-16 shadow transition-all duration-200 md:static md:top-0 md:shadow-none md:flex md:gap-4 md:bg-transparent",
          {
            "flex-col": open,
            hidden: !open,
          }
        )}
      >
        <NavItem>Shacks</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Sign in</NavItem>
        <NavItem isPadded={false} className="hidden md:flex">
          <DarkMode />
        </NavItem>
      </ul>
    </nav>
  );
}

export default Navigation;
