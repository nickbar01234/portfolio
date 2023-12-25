import { Component } from "@/type";
import { hash } from "@/utils";
import React from "react";

const About: Component = () => {
  return (
    <>
      <p className="text-primary text-xl">Hi, my name is</p>
      <h1 className="text-7xl">Nick Doan.</h1>
    </>
  );
};

About.displayName = "About";
About.id = hash(About.displayName);

export default About;
