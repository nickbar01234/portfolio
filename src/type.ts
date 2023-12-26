import React from "react";

export type Component<T = { active: boolean; typingCommand: boolean }> =
  React.FunctionComponent<T> & {
    displayName: string;
    id: string;
  };
