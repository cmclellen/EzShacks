import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="border-b border-primary">
      <div className="max-w-7xl mx-auto flex">
        <Navigation>
          <Logo />
        </Navigation>
      </div>
    </header>
  );
}

export default Header;
