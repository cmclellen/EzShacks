"use client";

import dynamic from "next/dynamic";

const DarkMode = dynamic(() => import("./DarkMode"), {
  ssr: false,
});

export const revalidate = 0;

type NavItemProps = {
  readonly children: React.ReactNode;
};

function NavItem({ children }: NavItemProps) {
  return (
    <li className="hover:bg-primary hover:text-on-primary px-3 py-1 rounded-md cursor-pointer">
      {children}
    </li>
  );
}

function Navigation() {
  return (
    <nav>
      <ul className="flex items-center gap-4 text-sm font-semibold">
        <NavItem>Stays</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Sign in</NavItem>
        <li>
          <DarkMode />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
