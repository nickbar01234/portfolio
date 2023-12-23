import { Component } from "@/type";
import { timeBetween } from "@/utils";
import React from "react";

interface FooterProps {
  author: string;
  lastModified: Date;
}

const Footer = (props: FooterProps) => {
  const timeSinceLastModified = React.useMemo(() => {
    const { year, month, day, min } = timeBetween(props.lastModified);
    if (year > 0) {
      return `${year} years ago`;
    } else if (month > 0) {
      return `${month} months ago`;
    } else if (day > 0) {
      return `${day} days ago`;
    } else {
      return `${min} mins ago`;
    }
  }, [props.lastModified]);

  return (
    <div className="flex justify-between p-2 rounded-b-md w-full bg-bg-variant drop-shadow-lg h-12">
      <span className="uppercase">-- normal --</span>
      <span>
        Blame {props.author} ({timeSinceLastModified})
      </span>
    </div>
  );
};

export default Footer;
