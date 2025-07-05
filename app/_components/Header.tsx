import Link from "next/link";
import { auth } from "../_lib/auth";
import Logo from "./Logo";
import Navigation from "./Navigation";
import NavItem from "./NavItem";
import Image from "next/image";

async function Header() {
  const session = await auth();
  return (
    <header className="border-b border-primary">
      <div className="max-w-7xl mx-auto flex">
        <Navigation
          account={
            session?.user?.image ? (
              <Link
                href="/account"
                className="hover:text-accent-400 transition-colors flex items-center gap-4"
              >
                <div className="h-8 relative aspect-square">
                  <Image
                    className="object-cover rounded-full"
                    src={session.user.image}
                    alt={session.user.name!}
                    referrerPolicy="no-referrer"
                    fill
                  />
                </div>
                <span>Account</span>
              </Link>
            ) : (
              <NavItem href="/account">Sign in</NavItem>
            )
          }
        >
          <Logo />
        </Navigation>
      </div>
    </header>
  );
}

export default Header;
