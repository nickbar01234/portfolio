import { Component } from "@/type";
import { hash } from "@/utils";
import React from "react";

const Intro: Component = () => {
  return (
    <>
      <p className="text-primary text-xl">Hi, my name is</p>
      <h1 className="text-7xl">Nick Doan.</h1>
    </>
  );
};

Intro.displayName = "Intro";
Intro.id = hash(Intro.displayName);

export default Intro;
