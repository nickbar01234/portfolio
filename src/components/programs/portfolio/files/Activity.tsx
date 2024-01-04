import { Component } from "@/type";
import { hash } from "@/utils";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditorProvider, { NumberedLine } from "../editor";
import React from "react";
import { getGithubProfile } from "@/app/api";
import { USERNAME } from "../constants";
import { Loader } from "@/components/layout";

type GithubProfile = Awaited<ReturnType<typeof getGithubProfile>>;

const Activity: Component = ({ active, typingCommand }) => {
  const [githubProfile, setGithubProfile] =
    React.useState<GithubProfile | null>(null);

  const year = React.useMemo(() => {
    const date = new Date();
    return date.getFullYear().toString();
  }, []);

  React.useState(() => {
    getGithubProfile({ body: { username: USERNAME, year: year } }).then(
      (res) => {
        setGithubProfile(res);
      }
    );
  });

  return (
    <Loader loading={githubProfile === null && active}>
      <EditorProvider active={active} typingCommand={typingCommand}>
        <NumberedLine>
          <div className="w-full flex flex-col flex-wrap">
            <div className="flex justify-center italic text-comment">
              Looking for some quick insights?
            </div>
          </div>
        </NumberedLine>
        <NumberedLine></NumberedLine>
      </EditorProvider>
    </Loader>
  );
};

Activity.displayName = "Activity";
Activity.id = hash(Activity.displayName);
Activity.path = "src/components/programs/portfolio/files/Activity.tsx";
Activity.Icon = function Icon(style) {
  return <FontAwesomeIcon icon={faHeart} className={`text-keyword ${style}`} />;
};

export default Activity;
