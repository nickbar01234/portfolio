import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { PortfolioContext } from "@/components/programs";

const SideBar = () => {
  const {
    popups: { directory },
  } = React.useContext(PortfolioContext);
  const { display: displayDirectory, setDisplay: setDisplayDirectory } =
    directory;

  return (
    <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-2">
      <FontAwesomeIcon
        icon={faFolder}
        className="cursor-pointer"
        onClick={() => setDisplayDirectory(!displayDirectory)}
      />
    </div>
  );
};

export default SideBar;
