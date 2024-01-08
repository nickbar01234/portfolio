import Portfolio from "@/components/programs";
import { RootNavigation } from "@/context";
import App from "@/components/programs/portfolio";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Portfolio>
      <RootNavigation>
        <App file={children} />
      </RootNavigation>
    </Portfolio>
  );
};

export default Layout;
