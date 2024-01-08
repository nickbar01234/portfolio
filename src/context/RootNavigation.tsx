import { PortfolioContext } from "@/context/";
import { useRouter } from "next/navigation";
import React from "react";

interface RootNavigationContext {
  onFileClick: (displayName: string) => void;
  onFileClose: (displayName: string, event?: React.MouseEvent) => void;
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
  const { files, tabs, setTabs, activeTabId, setActiveTabId } =
    React.useContext(PortfolioContext);
  const [navigating, setNavigating] = React.useState(false);

  const router = useRouter();
  const onFileClick = React.useCallback(
    (displayName: string) => {
      const fileMetadata = files.find(
        (file) => file.displayName === displayName
      );
      if (fileMetadata == undefined || displayName === activeTabId) {
        return;
      }

      setActiveTabId(fileMetadata.displayName);
      if (!tabs.includes(displayName)) {
        setTabs((prev) => [...prev, displayName]);
      }
      setNavigating(true);
      router.push(`/portfolio/${displayName.toLowerCase()}`);
    },
    [activeTabId, tabs, setTabs, setActiveTabId, files, router]
  );

  const onFileClose = React.useCallback(
    (displayName: string, event?: React.MouseEvent) => {
      event?.stopPropagation();

      setTabs((tabs) => tabs.filter((tab) => tab !== displayName));
      if (displayName === activeTabId) {
        const newActiveTab = tabs.find((tab) => tab !== displayName) ?? "";
        setActiveTabId(newActiveTab);
        router.push(`/portfolio/${newActiveTab.toLowerCase()}`);
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
