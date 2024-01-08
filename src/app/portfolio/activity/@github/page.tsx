import { GithubProfile } from "@/components/programs/portfolio/card";
import { USERNAME } from "@/components/programs/portfolio/constants";
import { getGithubProfile } from "@/server/github";

const Page = async () => {
  const year = new Date().getFullYear();
  const githubProfile = await getGithubProfile({
    username: USERNAME,
    year: year,
  });
  return <GithubProfile year={year} githubProfile={githubProfile} />;
};

export default Page;
