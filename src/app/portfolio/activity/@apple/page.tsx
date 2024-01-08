import { AppleHealthProfile } from "@/components/programs/portfolio/card";
import { getAppleHealth } from "@/server/apple";

const Page = async () => {
  const appleHealth = await getAppleHealth({});
  return <AppleHealthProfile appleHealth={appleHealth} />;
};

export default Page;
