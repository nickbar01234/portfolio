import { Component } from "@/type";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditorProvider, { NumberedLine } from "../../editor";

const CreatingNpmPackage: Component = () => {
  return (
    <EditorProvider>
      <NumberedLine>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        voluptatem consequuntur voluptas vel maxime esse explicabo libero
        quisquam modi perspiciatis dicta architecto molestias provident a iste
        similique, expedita minus ea.
      </NumberedLine>
    </EditorProvider>
  );
};

CreatingNpmPackage.displayName = "CreatingNpmPackage";
CreatingNpmPackage.Icon = function Icon({ className }) {
  return (
    <FontAwesomeIcon icon={faMarkdown} className={`text-id ${className}`} />
  );
};

export default CreatingNpmPackage;
