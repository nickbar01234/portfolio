import { ContributionDay } from "@/app/api/github/profile/route.schema";
import { createHash } from "crypto";

type Time = Record<"year" | "month" | "day" | "hour" | "min", number>;

export const timeBetween = (since: Date) => {
  const order: (keyof Time)[] = ["year", "month", "day", "hour", "min"];
  const MS: Time = {
    year: 3.156e10,
    month: 2.628e9,
    hour: 3.6e6,
    day: 8.64e7,
    min: 60000,
  };

  const unit: Time = Object.assign({}, MS);

  const to = new Date();
  let delta = to.getTime() - since.getTime();

  for (const key of order) {
    const conversion = MS[key];
    const time = Math.floor(delta / MS[key]);
    delta -= conversion * time;
    unit[key] = time;
  }

  return unit;
};

export const hash = (value: string, algorithm: string = "sha1") => {
  return createHash(algorithm)
    .update(value, "utf-8")
    .digest()
    .toString("base64");
};

export const openNewTab = (url: string) => {
  window.open(url, "_blank", "noreferrer");
};

export const isTrueKeyPress = (key: string) => {
  return (event: KeyboardEvent) =>
    event.key === key && !event.shiftKey && !event.ctrlKey;
};

export enum Command {
  TAB_NEW,
  HELP,
  QUIT,
  LS,
}

export const whichCommand = (command: string) => {
  if (/:tabnew \w+/.test(command)) {
    return Command.TAB_NEW;
  } else if (command === ":help") {
    return Command.HELP;
  } else if (command === ":q") {
    return Command.QUIT;
  } else if (command === ":!ls") {
    return Command.LS;
  } else {
    return Command.TAB_NEW;
  }
};

export const contributionLevel = [
  "bg-comment",
  "bg-[#9be9a8]",
  "bg-[#40c463]",
  "bg-[#30a14e]",
  "bg-[#216e39]",
] as const;

export const levelToColor = (level: ContributionDay["contributionLevel"]) => {
  switch (level) {
    case "FIRST_QUARTILE":
      return "bg-[#9be9a8]";

    case "SECOND_QUARTILE":
      return "bg-[#40c463]";

    case "THIRD_QUARTILE":
      return "bg-[#30a14e]";

    case "FOURTH_QUARTILE":
      return "bg-[#216e39]";

    default:
      return "bg-comment";
  }
};

export const numberWithCommas = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const asFloat = (numerator: number | undefined, denominator: number) => {
  return ((numerator ?? 0) * 1.0) / denominator;
};
