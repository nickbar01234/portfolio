import { Component, Directory, File } from "@/type";
import React, { ContextType } from "react";
import {
  About,
  Skills,
  Experience,
  Activity,
  CreatingNpmPackage,
} from "@/components/programs/portfolio/files";
import { getGithubFileMetadata } from "@/server/github";
import { usePathname } from "next/navigation";
import { searchDirectory, walkDirectory } from "@/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

type FileMetadata = {
  author: string;
  modified: string;
  Icon: Component["Icon"];
};

interface PortfolioContext {
  files: Directory<FileMetadata>;

  tabs: File<FileMetadata>[];
  setTabs: React.Dispatch<React.SetStateAction<File<FileMetadata>[]>>;

  activeTabId: File<FileMetadata>;
  setActiveTabId: React.Dispatch<React.SetStateAction<File<FileMetadata>>>;

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

  commandListenerActive: boolean;
  setCommandListenerActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const PortfolioContext = React.createContext<PortfolioContext>(
  {} as PortfolioContext
);

interface PortfolioProps {
  children?: React.ReactNode;
  fileMetadata: Awaited<ReturnType<typeof getGithubFileMetadata>>;
}

const Portfolio = ({ fileMetadata, children }: PortfolioProps) => {
  const files: PortfolioContext["files"] = walkDirectory(
    fileMetadata,
    (file) => {
      const component = [
        Activity,
        About,
        Skills,
        Experience,
        CreatingNpmPackage,
      ].find((c) => c.displayName === file.displayName);
      return {
        ...file,
        Icon:
          component?.Icon ??
          function Icon({ className }) {
            return (
              <FontAwesomeIcon
                icon={faReact}
                color="#61dbfb"
                className={className}
              />
            );
          },
      };
    }
  );

  // [Activity, About, Skills, Experience].map((File) => {
  //   const metadata = fileMetadata.find(
  //     (metadata) => metadata.normalizedName === File.displayName
  //   );
  //   return {
  //     displayName: File.displayName,
  //     path: metadata?.path ?? "",
  //     author: metadata?.author ?? "",
  //     modified: new Date(metadata?.modified ?? ""),
  //     Icon: File.Icon,
  //   };
  // });

  const pathSegment = usePathname();
  const startFile = searchDirectory(files, (file) =>
    pathSegment.endsWith(file.relativePath)
  )!;
  const [tabs, setTabs] = React.useState([startFile]);
  const [activeTabId, setActiveTabId] = React.useState(startFile);
  const [displayDirectory, setDisplayDirectory] = React.useState(false);
  const [displayHelp, setDisplayHelp] = React.useState(false);
  const [commandListenerActive, setCommandListenerActive] =
    React.useState(false);

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
        commandListenerActive: commandListenerActive,
        setCommandListenerActive: setCommandListenerActive,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export default Portfolio;
export { PortfolioContext };
export type PortfolioContextProps = ContextType<typeof PortfolioContext>;
export type FullFile = File<FileMetadata>;
