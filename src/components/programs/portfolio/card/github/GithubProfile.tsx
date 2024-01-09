import React from "react";
import { Loader } from "@/components/layout";
import GithubCard from "./GithubCard";
import { USERNAME } from "../../constants";
import GithubCalendar from "./GithubCalendar";
import Image from "next/image";
import { getGithubProfile } from "@/server/github";

interface GithubProfileProps {
  year: number;
  githubProfile: Awaited<ReturnType<typeof getGithubProfile>>;
}

const GithubProfile = (props: GithubProfileProps) => {
  const { githubProfile, year } = props;

  return (
    <div className="flex flex-col gap-y-2 bg-bg-highlight p-6 rounded h-full w-full justify-between">
      <div className="flex gap-x-4 items-center">
        <Image
          src={githubProfile.user.avatarUrl}
          alt="Github profile"
          className="md:w-24 md:h-24 w-20 h-20 rounded-full"
          width={0}
          height={0}
          sizes="100vw"
        />
        <h1 className="text-3xl font-semibold">{USERNAME}</h1>
      </div>
      <div className="grid grid-cols-12 gap-x-2 gap-y-2">
        <div className="lg:col-span-3 col-span-6">
          <GithubCard
            header="Repositories"
            count={githubProfile.user.repositories.totalCount}
          />
        </div>
        <div className="lg:col-span-3 col-span-6">
          <GithubCard
            header="Contributions"
            count={
              githubProfile.user.contributionsCollection.contributionCalendar
                .totalContributions
            }
          />
        </div>
        <div className="lg:col-span-3 col-span-6">
          <GithubCard
            header="Open PRs"
            count={githubProfile.user.pullRequests.totalCount}
          />
        </div>
        <div className="lg:col-span-3 col-span-6">
          <GithubCard
            header="Open Issues"
            count={githubProfile.user.issues.totalCount}
          />
        </div>
      </div>
      <GithubCalendar
        contributionCollection={githubProfile.user.contributionsCollection}
        year={year}
      />
    </div>
  );
};

export default GithubProfile;
