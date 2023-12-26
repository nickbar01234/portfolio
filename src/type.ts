import React from "react";

export type Component<T = { active: boolean }> = React.FunctionComponent<T> & {
  displayName: string;
  id: string;
};
