import { Component } from "@/type";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SideBarProps {
  files: Component[];
  onFileClick: (file: Component) => void;
}

const Directory = (props: SideBarProps) => {
  const { files, onFileClick } = props;

  return (
    <div className="h-full w-full flex flex-col gap-y-2">
      {files.map((file) => (
        <div
          key={file.id}
          className="flex gap-x-1.5 items-center hover:bg-comment-variant hover:bg-opacity-30 cursor-pointer"
          onClick={() => onFileClick(file)}
        >
          <FontAwesomeIcon icon={faReact} color="#61dbfb" />
          <span>{file.displayName}</span>
        </div>
      ))}
    </div>
  );
};

export default Directory;
