import React from "react";

export type Component<T = {}> = React.FunctionComponent<T> & {
  displayName: string;
  id: string;
};
