import React from "react";

interface IconProps {
  className?: string;
}

export type Component<T = {}> = React.FunctionComponent<T> & {
  displayName: string;
  Icon: (props: IconProps) => JSX.Element;
};

export type TypedFetch<T = {}> = Omit<RequestInit, "body" | "method"> & {
  body: T;
};

export type File<T> = {
  displayName: Component["displayName"];
  relativePath: string;
} & T;

export interface Directory<T = {}> {
  absolutePath: string;
  displayName: string;
  files: File<T>[];
  directories: Directory<T>[];
}
