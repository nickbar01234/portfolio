import { Portfolio, RootNavigation } from "@/context";
import App from "@/components/programs/portfolio";
import {
  FILE_DIR,
  REPO,
  USERNAME,
} from "@/components/programs/portfolio/constants";
import { getGithubFileMetadata } from "@/server/github";
import { Suspense } from "react";
import { NavigationEvent } from "@/components/layout";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = async ({ children }: LayoutProps) => {
  const githubFileMetadata = await getGithubFileMetadata({
    username: USERNAME,
    repo: REPO,
    base: process.cwd(),
    path: FILE_DIR,
  });

  return (
    <Portfolio fileMetadata={githubFileMetadata}>
      <RootNavigation>
        <App>{children}</App>
        <Suspense fallback={null}>
          <NavigationEvent />
        </Suspense>
      </RootNavigation>
    </Portfolio>
  );
};

export default Layout;
