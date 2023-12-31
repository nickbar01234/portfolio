import { timeBetween } from "@/utils";
import React from "react";

interface FooterProps {
  command: string;
  author?: string;
  lastModified?: Date;
}

const Footer = (props: FooterProps) => {
  const { command, author, lastModified } = props;

  const timeSinceLastModified = React.useMemo(() => {
    if (lastModified == undefined) {
      return undefined;
    }
    const { year, month, day, hour, min } = timeBetween(lastModified);
    if (year > 0) {
      return `${year} years ago`;
    } else if (month > 0) {
      return `${month} months ago`;
    } else if (day > 0) {
      return `${day} days ago`;
    } else if (hour > 0) {
      return `${hour} hours ago`;
    } else {
      return `${min} mins ago`;
    }
  }, [lastModified]);

  return (
    <div className="flex items-center sm:justify-between justify-center p-2 w-full bg-bg-variant drop-shadow-lg h-full text-sm">
      <div className="sm:block hidden">
        {command.length === 0 ? (
          <span className="uppercase">-- normal --</span>
        ) : (
          <span className="max-w-64 text-ellipsis overflow-hidden">
            <pre className="border-r-2 border-r-comment">{command}</pre>
          </span>
        )}
      </div>
      {author != undefined && timeSinceLastModified != undefined && (
        <span>
          Blame {author} ({timeSinceLastModified})
        </span>
      )}
    </div>
  );
};

export default Footer;
