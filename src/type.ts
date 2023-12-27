import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import React from "react";

export type Component<T = { active: boolean; typingCommand: boolean }> =
  React.FunctionComponent<T> & {
    displayName: string;
    path: string;
    id: string;
    Icon: (
      className: Omit<FontAwesomeIconProps, "icon" | "color">
    ) => JSX.Element;
  };

export type TypedFetch<T = {}> = Omit<RequestInit, "body" | "method"> & {
  body: T;
};
