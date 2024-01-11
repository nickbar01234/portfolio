import { PortfolioContext } from "@/context/";
import { useRouter } from "next/navigation";
import React from "react";
import { FullFile } from "./Portfolio";

interface RootNavigationContext {
  onFileClick: (file: FullFile) => void;
  onFileClose: (file: FullFile, event?: React.MouseEvent) => void;
  navigating: boolean;
  setNavigating: React.Dispatch<React.SetStateAction<boolean>>;
}

interface RootNavigationProps {
  children?: React.ReactNode;
}

const RootNavigationContext = React.createContext<RootNavigationContext>(
  {} as RootNavigationContext
);

const RootNavigation = ({ children }: RootNavigationProps) => {
  const { tabs, setTabs, activeTabId, setActiveTabId } =
    React.useContext(PortfolioContext);
  const [navigating, setNavigating] = React.useState(true);

  const router = useRouter();
  const onFileClick = React.useCallback(
    (file: FullFile) => {
      setActiveTabId(file);
      if (!tabs.find((tab) => tab.relativePath === file.relativePath)) {
        setTabs((prev) => [...prev, file]);
      }

      if (file.relativePath != activeTabId.relativePath) {
        setNavigating(true);
        router.push(`/portfolio${file.relativePath}`);
      }
    },
    [tabs, setTabs, activeTabId, setActiveTabId, router]
  );

  const onFileClose = React.useCallback(
    (file: FullFile, event?: React.MouseEvent) => {
      event?.stopPropagation();

      setTabs((tabs) =>
        tabs.filter((tab) => tab.relativePath !== file.relativePath)
      );
      if (activeTabId.relativePath === file.relativePath) {
        const newActiveTab = tabs.find(
          (tab) => tab.relativePath !== file.relativePath
        );
        if (newActiveTab != undefined) {
          setNavigating(true);
          setActiveTabId(newActiveTab);
          router.push(`/portfolio${newActiveTab.relativePath}`);
        }
      }
    },
    [activeTabId, setActiveTabId, tabs, setTabs, router]
  );

  return (
    <RootNavigationContext.Provider
      value={{
        onFileClick: onFileClick,
        onFileClose: onFileClose,
        navigating: navigating,
        setNavigating: setNavigating,
      }}
    >
      {children}
    </RootNavigationContext.Provider>
  );
};

export { RootNavigationContext };
export default RootNavigation;
