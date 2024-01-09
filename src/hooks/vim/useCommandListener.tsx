import { RootNavigationContext, PortfolioContext } from "@/context";
import { Command, whichCommand } from "@/utils";
import React from "react";

interface UseCommandListenerProps {}

const useCommandListener = (props: UseCommandListenerProps) => {
  const {
    activeTabId,
    popups: { directory, help },
    commandListenerActive,
    setCommandListenerActive,
  } = React.useContext(PortfolioContext);
  const { display: displayDirectory, setDisplay: setDisplayDirectory } =
    directory;
  const { display: displayHelp, setDisplay: setDisplayHelp } = help;
  const { onFileClick, onFileClose } = React.useContext(RootNavigationContext);

  const [command, setCommand] = React.useState("");

  const onKeydown = React.useCallback(
    (e: KeyboardEvent) => {
      if (!commandListenerActive && e.key === ":") {
        setCommandListenerActive(true);
        setCommand(":");
      } else if (commandListenerActive) {
        switch (e.key) {
          case "Enter":
            setCommand("");
            setCommandListenerActive(false);

            switch (whichCommand(command)) {
              case Command.TAB_NEW: {
                onFileClick(command.split(" ")[1]);
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
                  onFileClose(activeTabId);
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
              setCommandListenerActive(false);
            }
            break;

          case "Escape":
            setCommand("");
            setCommandListenerActive(false);
            break;

          default:
            if (e.key.length === 1) {
              setCommand((prev) => prev + e.key);
            }
        }
      }
    },
    [
      onFileClick,
      onFileClose,
      commandListenerActive,
      setCommandListenerActive,
      command,
      setDisplayHelp,
      displayHelp,
      activeTabId,
      displayDirectory,
      setDisplayDirectory,
    ]
  );

  React.useEffect(() => {
    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  });

  return { command };
};

export default useCommandListener;
