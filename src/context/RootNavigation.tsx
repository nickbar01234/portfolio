"use client";
import { PortfolioContext } from "@/components/programs";
import { useRouter } from "next/navigation";
import React from "react";

interface RootNavigationContext {
  onFileClick: (displayName: string) => void;
  onFileClose: (displayName: string, event?: React.MouseEvent) => void;
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
  const router = useRouter();

  const onFileClick = React.useCallback(
    (displayName: string) => {
      const fileMetadata = files.find(
        (file) => file.displayName === displayName
      );
      if (fileMetadata == undefined) {
        return;
      }

      setActiveTabId(fileMetadata.displayName);
      if (!tabs.includes(displayName)) {
        setTabs((prev) => [...prev, displayName]);
      }
      router.push(`/portfolio/${displayName.toLowerCase()}`);
    },
    [tabs, setTabs, setActiveTabId, files, router]
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
      value={{ onFileClick: onFileClick, onFileClose: onFileClose }}
    >
      {children}
    </RootNavigationContext.Provider>
  );
};

export { RootNavigationContext };
export default RootNavigation;
