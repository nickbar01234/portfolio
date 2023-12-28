import { Component } from "@/type";
import { hash } from "@/utils";

const Skills: Component = () => {
  return null;
};

Skills.displayName = "Skills";
Skills.path = "src/components/programs/portfolio/files";
Skills.id = hash(Skills.displayName);
Skills.Icon = function Icon(className) {
  return <i className={`text-active ${className}`}>{`{...}`}</i>;
};

export default Skills;
