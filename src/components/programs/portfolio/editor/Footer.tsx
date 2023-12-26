import { timeBetween } from "@/utils";
import React from "react";

interface FooterProps {
  command: string;
  author: string;
  lastModified: Date;
}

const Footer = (props: FooterProps) => {
  const { command, author, lastModified } = props;

  const timeSinceLastModified = React.useMemo(() => {
    const { year, month, day, min } = timeBetween(lastModified);
    if (year > 0) {
      return `${year} years ago`;
    } else if (month > 0) {
      return `${month} months ago`;
    } else if (day > 0) {
      return `${day} days ago`;
    } else {
      return `${min} mins ago`;
    }
  }, [lastModified]);

  return (
    <div className="flex items-center justify-between p-2 w-full bg-bg-variant drop-shadow-lg h-full text-sm">
      {command.length === 0 ? (
        <span className="uppercase">-- normal --</span>
      ) : (
        <span className="max-w-64 text-ellipsis overflow-hidden">
          <pre className="border-r-2 border-r-comment">{command}</pre>
        </span>
      )}
      <span>
        Blame {author} ({timeSinceLastModified})
      </span>
    </div>
  );
};

export default Footer;
