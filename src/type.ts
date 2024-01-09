import React from "react";

interface IconProps {
  className?: string;
}

export type Component<T = {}> = React.FunctionComponent<T> & {
  displayName: string;
  id: string;
  Icon: (props: IconProps) => JSX.Element;
};

export type TypedFetch<T = {}> = Omit<RequestInit, "body" | "method"> & {
  body: T;
};
