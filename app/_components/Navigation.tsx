"use client";

import clsx from "clsx";
import dynamic from "next/dynamic";
import { useState } from "react";
import useClickAnywhere from "../_hooks/useClickAnywhere";
import { signOutAction } from "../_lib/actions";
import NavItem from "./NavItem";

const DarkMode = dynamic(() => import("./DarkMode"), {
  ssr: false,
});

export const revalidate = 0;

type NavigationProps = {
  readonly children?: React.ReactNode;
  readonly account: React.ReactNode;
};

function Navigation({ children, account }: NavigationProps) {
  const [open, setOpen] = useState(false);
  useClickAnywhere(() => {
    setOpen(false);
  });

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
          "flex p-0 rounded-md md:flex-row items-center text-sm font-semibold bg-surface absolute left-0 right-0 top-16 shadow-2xl transition-all duration-200 md:static md:top-0 md:shadow-none md:flex md:gap-4 md:bg-transparent",
          {
            "flex-col": open,
            hidden: !open,
          }
        )}
      >
        <NavItem href="/shacks">Shacks</NavItem>
        <NavItem href="/about">About</NavItem>
        {account}
        {/* {session?.user?.image ? ( */}

        {/* ) : (
          <NavItem href="/account">Sign in</NavItem>
        )} */}

        <button onClick={() => signOutAction()}>Sign out</button>
        <NavItem className="hidden md:flex">
          <DarkMode />
        </NavItem>
      </ul>
    </nav>
  );
}

export default Navigation;
