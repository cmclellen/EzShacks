"use client";

import clsx from "clsx";
import dynamic from "next/dynamic";

const DarkMode = dynamic(() => import("./DarkMode"), {
  ssr: false,
});

export const revalidate = 0;

type NavItemProps = {
  readonly children: React.ReactNode;
  readonly isPadded?: boolean;
};

function NavItem({ children, isPadded = true }: NavItemProps) {
  return (
    <li
      className={clsx("rounded-md cursor-pointer z-10", {
        "hover:bg-primary hover:text-on-primary px-3 py-1": isPadded,
      })}
    >
      {children}
    </li>
  );
}

function Navigation() {
  return (
    <nav>
      <ul className="flex items-center gap-4 text-sm font-semibold">
        <NavItem>Shacks</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Sign in</NavItem>
        <NavItem isPadded={false}>
          <DarkMode />
        </NavItem>
      </ul>
    </nav>
  );
}

export default Navigation;
