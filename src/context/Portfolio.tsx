import { Component } from "@/type";
import React, { ContextType } from "react";
import {
  About,
  Skills,
  Experience,
  Activity,
} from "@/components/programs/portfolio/files";
import { getGithubFileMetadata } from "@/server/github";
import { usePathname } from "next/navigation";

interface File {
  displayName: string;
  id: string;
  Icon: Component["Icon"];
  author: string;
  modified: Date;
}

interface PortfolioContext {
  files: File[];

  tabs: string[];
  setTabs: React.Dispatch<React.SetStateAction<string[]>>;

  activeTabId: string;
  setActiveTabId: React.Dispatch<React.SetStateAction<string>>;

  popups: {
    directory: {
      display: boolean;
      setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
    };

    help: {
      display: boolean;
      setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
    };
  };
}

const PortfolioContext = React.createContext<PortfolioContext>(
  {} as PortfolioContext
);

interface PortfolioProps {
  children?: React.ReactNode;
  fileMetadata: Awaited<ReturnType<typeof getGithubFileMetadata>>;
}

const Portfolio = ({ fileMetadata, children }: PortfolioProps) => {
  const files = [Activity, About, Skills, Experience].map((File) => {
    const metadata = fileMetadata.find(
      (metadata) => metadata.normalizedName === File.displayName
    );
    return {
      displayName: File.displayName,
      path: metadata?.path ?? "",
      author: metadata?.author ?? "",
      modified: new Date(metadata?.modified ?? ""),
      id: File.id,
      Icon: File.Icon,
    };
  });

  const pathSegment = usePathname().split("/").pop() ?? "";
  const startFile =
    files
      .filter((file) => file.displayName.toLowerCase() === pathSegment)
      .map((file) => file.displayName)
      .pop() ?? "";
  const [tabs, setTabs] = React.useState([startFile]);
  const [activeTabId, setActiveTabId] = React.useState(startFile);
  const [displayDirectory, setDisplayDirectory] = React.useState(false);
  const [displayHelp, setDisplayHelp] = React.useState(false);

  return (
    <PortfolioContext.Provider
      value={{
        files: files,
        tabs,
        setTabs,
        activeTabId,
        setActiveTabId,
        popups: {
          directory: {
            display: displayDirectory,
            setDisplay: setDisplayDirectory,
          },
          help: {
            display: displayHelp,
            setDisplay: setDisplayHelp,
          },
        },
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export default Portfolio;
export { PortfolioContext };
export type PortfolioContextProps = ContextType<typeof PortfolioContext>;
