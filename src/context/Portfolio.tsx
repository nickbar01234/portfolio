import { Component } from "@/type";
import React, { ContextType } from "react";
import {
  About,
  Skills,
  Experience,
  Activity,
} from "@/components/programs/portfolio/files";
import { getGithubFileMetadata } from "@/server/github";

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
  const [tabs, setTabs] = React.useState([Activity.displayName]);
  const [activeTabId, setActiveTabId] = React.useState(Activity.displayName);
  const [displayDirectory, setDisplayDirectory] = React.useState(false);
  const [displayHelp, setDisplayHelp] = React.useState(false);
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
