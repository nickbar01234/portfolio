import { redirect } from "next/navigation";

const Page = () => {
  // Fallback - Should not be directed here
  redirect("/portfolio/activity");
};

export default Page;
