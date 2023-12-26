import { isTrueKeyPress } from "@/utils";
import React from "react";

interface UseVerticalMovementProps {
  ids: string[];
  activeId: string;
  setActiveId: React.Dispatch<React.SetStateAction<string>>;
  shouldListen: boolean;
}

const useVerticalMovement = (props: UseVerticalMovementProps) => {
  const { ids, activeId, setActiveId, shouldListen } = props;

  const onKeydown = React.useCallback(
    (e: KeyboardEvent) => {
      if (!shouldListen) {
        return;
      }

      const isKeyDown = isTrueKeyPress("j");
      const isKeyUp = isTrueKeyPress("k");
      const idx = ids.indexOf(activeId);
      if (idx === -1) {
        return;
      }

      if (isKeyDown(e) && idx < ids.length - 1) {
        setActiveId(ids[idx + 1]);
      } else if (isKeyUp(e) && idx > 0) {
        setActiveId(ids[idx - 1]);
      }
    },
    [ids, activeId, setActiveId, shouldListen]
  );

  React.useEffect(() => {
    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  });
};

export default useVerticalMovement;
