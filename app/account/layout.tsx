import SideNavigation from "../_components/SideNavigation";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex gap-5">
      <SideNavigation />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
