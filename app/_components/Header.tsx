import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
