"use client";

import { Component } from "@/type";
import { hash } from "@/utils";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Experience: Component = () => {
  return null;
};

Experience.displayName = "Experience";
Experience.id = hash(Experience.displayName);
Experience.Icon = function Icon({ className = "" }) {
  return (
    <FontAwesomeIcon icon={faMarkdown} className={`text-id ${className}`} />
  );
};

export default Experience;
