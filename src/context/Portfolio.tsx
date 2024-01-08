import { Component } from "@/type";
import React from "react";
import {
  About,
  Skills,
  Experience,
  Activity,
} from "@/components/programs/portfolio/files";
import { getGithubFileMetadata } from "@/app/api";
import { REPO, USERNAME } from "@/components/programs/portfolio/constants";
import { Loader } from "@/components/layout";

interface File {
  displayName: string;
  id: string;
  Icon: Component["Icon"];
  path: string;
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
}

const Portfolio = ({ children }: PortfolioProps) => {
  const FILES = [Activity, About, Skills, Experience].map((File) => ({
    displayName: File.displayName,
    id: File.id,
    path: File.path,
    Icon: File.Icon,
  }));
  const [fetching, setFetching] = React.useState(true);
  const [tabs, setTabs] = React.useState([Activity.displayName]);
  const [activeTabId, setActiveTabId] = React.useState(Activity.displayName);
  const [displayDirectory, setDisplayDirectory] = React.useState(false);
  const [displayHelp, setDisplayHelp] = React.useState(false);
  const [files, setFiles] = React.useState<File[]>([]);

  React.useEffect(() => {
    if (files.length > 0) {
      return;
    }
    const paths = FILES.map((file) => file.path);
    getGithubFileMetadata(
      {
        body: { username: USERNAME, repo: REPO, paths: paths },
      },
      process.env.NODE_ENV === "development"
    ).then((res) => {
      const files: File[] = FILES.map((file) => {
        const metadata = res.find((v) => v.path === file.path);
        if (metadata === undefined) {
          return {
            ...file,
            author: USERNAME,
            modified: new Date(),
          };
        }
        return {
          ...file,
          author: metadata.author,
          modified: new Date(metadata.modified),
        };
      });
      setFiles(files);
      setFetching(false);
    });
  }, [FILES, files.length]);

  return (
    <Loader loading={fetching}>
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
    </Loader>
  );
};

export default Portfolio;
export { PortfolioContext };
