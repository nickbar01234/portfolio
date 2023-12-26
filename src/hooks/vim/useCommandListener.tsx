import { PortfolioContext } from "@/components/programs";
import { Command, whichCommand } from "@/utils";
import React from "react";

interface UseCommandListenerProps {}

const useCommandListener = (props: UseCommandListenerProps) => {
  const {
    files,
    tabs,
    setTabs,
    activeTabId,
    setActiveTabId,
    popups: { directory, help },
  } = React.useContext(PortfolioContext);
  const { display: displayDirectory, setDisplay: setDisplayDirectory } =
    directory;
  const { display: displayHelp, setDisplay: setDisplayHelp } = help;

  const [command, setCommand] = React.useState("");
  const [listening, setListening] = React.useState(false);

  const executeTabNew = React.useCallback(
    (filename: string) => {
      const maybeFile = files.find((file) => file.displayName === filename);
      if (maybeFile == undefined) {
        // TODO(nickbar01234) - Handle
      } else {
        if (tabs.find((tab) => tab.displayName === filename) == undefined) {
          setTabs((prev) => [...prev, maybeFile]);
        }
        setActiveTabId(maybeFile.id);
      }
    },
    [files, tabs, setTabs, setActiveTabId]
  );

  const onKeydown = React.useCallback(
    (e: KeyboardEvent) => {
      if (!listening && e.key === ":") {
        setListening(true);
        setCommand(":");
      } else if (listening) {
        switch (e.key) {
          case "Enter":
            setCommand("");
            setListening(false);

            switch (whichCommand(command)) {
              case Command.TAB_NEW: {
                executeTabNew(command.split(" ")[1]);
                break;
              }

              case Command.HELP: {
                setDisplayHelp(true);
                setDisplayDirectory(false);
                break;
              }

              case Command.QUIT: {
                if (displayHelp) {
                  setDisplayHelp(false);
                } else if (displayDirectory) {
                  setDisplayDirectory(false);
                } else {
                  setTabs((tabs) =>
                    tabs.filter((tab) => tab.id !== activeTabId)
                  );
                  // TODO(nickbar01234) - Add history stack
                  setActiveTabId(
                    (prev) => tabs.find((tab) => tab.id !== prev)?.id ?? ""
                  );
                }
                break;
              }

              case Command.LS: {
                setDisplayDirectory(true);
                setDisplayHelp(false);
                break;
              }
            }

            break;

          case "Backspace":
            const newCommand = command.slice(0, command.length - 1);
            setCommand(newCommand);
            if (newCommand.length === 0) {
              setListening(false);
            }
            break;

          case "Escape":
            setCommand("");
            setListening(false);
            break;

          default:
            if (e.key.length === 1) {
              setCommand((prev) => prev + e.key);
            }
        }
      }
    },
    [
      listening,
      command,
      executeTabNew,
      setDisplayHelp,
      displayHelp,
      setTabs,
      setActiveTabId,
      activeTabId,
      tabs,
      displayDirectory,
      setDisplayDirectory,
    ]
  );

  React.useEffect(() => {
    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  });

  return { command, listening };
};

export default useCommandListener;
