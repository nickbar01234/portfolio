import { Component } from "@/type";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SideBarProps {
  files: Component[];
}

const SideBar = (props: SideBarProps) => {
  const { files } = props;

  return (
    <div className="h-full w-full flex flex-col text-center gap-y-2">
      <FontAwesomeIcon icon={faFolder} className="cursor-pointer" />
    </div>
  );
};

export default SideBar;
