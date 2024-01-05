import { Component } from "@/type";
import { hash } from "@/utils";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditorProvider, { NumberedLine } from "../editor";
import React from "react";
import { GithubProfile } from "../card";

const Activity: Component = ({ active, typingCommand }) => {
  return (
    <EditorProvider active={active} typingCommand={typingCommand}>
      <NumberedLine>
        <div className="flex justify-center w-full">
          <div className="italic text-comment font-medium">
            Looking for some quick insights?
          </div>
        </div>
      </NumberedLine>
      <NumberedLine></NumberedLine>
      <NumberedLine>
        <div className="w-full grid grid-cols-12 gap-x-4 overflow-hidden">
          <div className="md:col-span-8 col-span-12 bg-bg-highlight p-2.5 rounded border-bg-highlight w-full">
            <GithubProfile />
          </div>
          <div className="md:col-span-4 col-span-12">hi</div>
        </div>
      </NumberedLine>
    </EditorProvider>
  );
};

Activity.displayName = "Activity";
Activity.id = hash(Activity.displayName);
Activity.path = "src/components/programs/portfolio/files/Activity.tsx";
Activity.Icon = function Icon(style) {
  return <FontAwesomeIcon icon={faHeart} className={`text-keyword ${style}`} />;
};

export default Activity;
