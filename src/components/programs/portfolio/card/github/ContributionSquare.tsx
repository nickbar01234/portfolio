import { ContributionDay } from "@/app/api/github/profile/route.schema";
import { levelToColor } from "@/utils";
import moment from "moment";
import React from "react";

interface ContributionSquareProps {
  day: ContributionDay | undefined;
  setContributionText: React.Dispatch<React.SetStateAction<string>>;
}

const ContributionSquare = (props: ContributionSquareProps) => {
  const { day, setContributionText } = props;

  const contributionText = React.useMemo(() => {
    if (day == undefined) {
      return "";
    }
    const date = moment(day.date).format("MMMM Do");
    return `${
      day.contributionCount === 0 ? "No" : day.contributionCount
    } contributions on ${date}`;
  }, [day]);

  return (
    <div
      className={`z-0 relative h-4 w-4 rounded-sm ${
        day === undefined ? "invisible" : levelToColor(day.contributionLevel)
      }`}
      onMouseEnter={() => setContributionText(contributionText)}
      onMouseLeave={() => setContributionText("")}
    />
  );
};

export default ContributionSquare;
