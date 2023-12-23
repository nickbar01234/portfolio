import { Component } from "@/type";
import { hash } from "@/utils";
import { createHash } from "crypto";

const Tutorial: Component = () => {
  return <>hello</>;
};

Tutorial.displayName = "Tutorial";
Tutorial.id = hash(Tutorial.displayName);

export default Tutorial;
