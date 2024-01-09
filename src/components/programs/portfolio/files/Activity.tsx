import { Component } from "@/type";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Activity: Component<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <React.Fragment>{children}</React.Fragment>
    // <EditorProvider active={active} typingCommand={typingCommand}>
    //   <NumberedLine>
    //     <div className="flex justify-center w-full">
    //       <div className="italic text-comment font-medium">
    //         Looking for some quick insights?
    //       </div>
    //     </div>
    //   </NumberedLine>
    //   <NumberedLine></NumberedLine>
    //   <NumberedLine>
    //     <div className="w-full grid grid-cols-12 gap-4 overflow-hidden">
    //       <div className="lg:col-span-8 col-span-12">
    //         <GithubProfile />
    //       </div>
    //       <div className="lg:col-span-4 col-span-12">
    //         <AppleHealthProfile />
    //       </div>
    //     </div>
    //   </NumberedLine>
    //   <NumberedLine />
    //   <NumberedLine>
    //     <div className="w-full bg-bg-highlight p-8 rounded">
    //       <iframe
    //         src="https://www.google.com/maps/d/u/0/embed?mid=19IBsB2RXDNZIoS0HES_gQJ_TwZS2DOQ&ehbc=2E312F"
    //         className="w-full text-text"
    //         height="560"
    //       />
    //     </div>
    //   </NumberedLine>
    // </EditorProvider>
  );
};

Activity.displayName = "Activity";
Activity.Icon = function Icon(style) {
  return <FontAwesomeIcon icon={faHeart} className={`text-keyword ${style}`} />;
};

export default Activity;
