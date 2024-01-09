"use client";

import { Component } from "@/type";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditorProvider, { NumberedLine } from "../editor";

const TEST = [1, 2, 3];

const Experience: Component = () => {
  return (
    <EditorProvider>
      {TEST.map((value) => (
        <NumberedLine key={value}>
          <div className="w-full flex justify-center">
            <div className="w-[2px] h-full bg-bg-highlight"></div>
          </div>
        </NumberedLine>
      ))}
    </EditorProvider>
  );
};

Experience.displayName = "Experience";
Experience.Icon = function Icon({ className = "" }) {
  return (
    <FontAwesomeIcon icon={faMarkdown} className={`text-id ${className}`} />
  );
};

export default Experience;
