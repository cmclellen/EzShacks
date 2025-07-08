import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaCalendarDays, FaUser } from "react-icons/fa6";
import SignOutButton from "./SignOutButton";

type SideNavLinkItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

type SideNavigationItemProps = {
  item: SideNavLinkItem;
};

function SideNavigationItem({ item }: SideNavigationItemProps) {
  const { name, href, icon } = item;
  return (
    <li>
      <Link
        href={href}
        className="flex items-center gap-1 text-lg hover:text-accent font-semibold transition-colors"
      >
        {icon}
        <span className="">{name}</span>
      </Link>
    </li>
  );
}

const navLinks: SideNavLinkItem[] = [
  {
    name: "Home",
    href: "/account",
    icon: <FaHome />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <FaCalendarDays />,
  },
  {
    name: "Profile",
    href: "/account/profile",
    icon: <FaUser />,
  },
];

type SideNavigationProps = {
  //children: React.ReactNode;
};

function SideNavigation(_props: SideNavigationProps) {
  return (
    <aside>
      <nav>
        <ul className="space-y-5">
          {navLinks.map((nl) => (
            <SideNavigationItem key={nl.name} item={nl} />
          ))}
          <li>
            <SignOutButton />
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default SideNavigation;
