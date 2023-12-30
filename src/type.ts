import React from "react";

interface IconProps {
  className?: string;
}

export type Component<T = { active: boolean; typingCommand: boolean }> =
  React.FunctionComponent<T> & {
    displayName: string;
    path: string;
    id: string;
    Icon: (props: IconProps) => JSX.Element;
  };

export type TypedFetch<T = {}> = Omit<RequestInit, "body" | "method"> & {
  body: T;
};
