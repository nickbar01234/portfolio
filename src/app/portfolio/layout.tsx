import Portfolio from "@/components/programs";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <Portfolio>{children}</Portfolio>;
};

export default Layout;
