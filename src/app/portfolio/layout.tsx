import { Portfolio, RootNavigation } from "@/context";
import App from "@/components/programs/portfolio";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Portfolio>
      <RootNavigation>
        <App>{children}</App>
      </RootNavigation>
    </Portfolio>
  );
};

export default Layout;
