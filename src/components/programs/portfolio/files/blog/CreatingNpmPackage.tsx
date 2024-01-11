import { Component } from "@/type";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CreatingNpmPackage: Component = () => {
  return null;
};

CreatingNpmPackage.displayName = "CreatingNpmPackage";
CreatingNpmPackage.Icon = function Icon() {
  return <FontAwesomeIcon icon={faMarkdown} />;
};

export default CreatingNpmPackage;
