import DarkMode from "./DarkMode";

type NavItemProps = {
  children: React.ReactNode;
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
        <NavItem>
          <DarkMode />
        </NavItem>
      </ul>
    </nav>
  );
}

export default Navigation;
