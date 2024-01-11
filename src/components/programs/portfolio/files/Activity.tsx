import { Component } from "@/type";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Activity: Component<{ children?: React.ReactNode }> = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

Activity.displayName = "Activity";
Activity.Icon = function Icon(style) {
  return <FontAwesomeIcon icon={faHeart} className={`text-keyword ${style}`} />;
};

export default Activity;
