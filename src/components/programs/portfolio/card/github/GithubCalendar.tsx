import { GithubProfile } from "@/app/api";
import { contributionLevel, levelToColor } from "@/utils";
import React from "react";
import ContributionSquare from "./ContributionSquare";

interface GithubCalendarProps {
  contributionCollection:
    | GithubProfile["user"]["contributionsCollection"]
    | undefined;
  year: number;
}

const MONTHS = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const GithubCalendar = (props: GithubCalendarProps) => {
  const { contributionCollection } = props;
  const [contributionText, setContributionText] = React.useState("");

  if (contributionCollection === undefined) {
    return null;
  }

  const months = Array.from({ length: MONTHS.length }, (_, i) => i + 1).map(
    (month) => {
      const weekContainingMonth =
        contributionCollection.contributionCalendar.weeks.filter((week) => {
          return week.contributionDays.some(
            (day) => parseInt(day.date.split("-")[1]) === month
          );
        });

      const weekWithMonth = weekContainingMonth.map((week) => {
        return week.contributionDays.filter(
          (day) => parseInt(day.date.split("-")[1]) === month
        );
      });

      return weekWithMonth;
    }
  );

  return (
    <div className="flex flex-col gap-y-4 min-h-56">
      <div className="flex gap-x-3 w-full overflow-x-auto scrollbar pb-3">
        {months.map((month, idx) => {
          const weeks = month.map((week) => {
            const padded = [
              ...Array.from({ length: week[0].weekday }, (_) => undefined),
              ...week,
            ];

            return padded.map((day, idx) => (
              <ContributionSquare
                key={idx}
                day={day}
                setContributionText={setContributionText}
              />
            ));
          });

          return (
            <div className="flex flex-col max-w-fit" key={idx}>
              <div className="text-center">
                <span>{MONTHS[idx]}</span>
              </div>
              <div className="flex gap-x-1">
                {weeks.flatMap((week, idx) => (
                  <div className="flex flex-col gap-y-1" key={idx}>
                    {week}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          <div className="flex gap-x-1">
            {contributionLevel.map((value) => (
              <div key={value} className={`h-3 w-3 rounded-sm ${value}`} />
            ))}
          </div>
          <div className="text-sm">{props.year}</div>
        </div>
        <div className="text-sm sm:block hidden">{contributionText}</div>
      </div>
    </div>
  );
};

export default GithubCalendar;
