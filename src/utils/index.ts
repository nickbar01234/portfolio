import { createHash } from "crypto";

type Time = Record<string, number>;

export const timeBetween = (since: Date) => {
  const MS: Time = {
    year: 3.156e10,
    month: 2.628e9,
    day: 8.64e7,
    min: 60000,
  };

  const unit: Time = Object.assign({}, MS);

  const to = new Date();
  let delta = to.getTime() - since.getTime();

  for (const [key, conversion] of Object.entries(MS)) {
    if (key in unit) {
      const time = Math.floor(delta / conversion);
      delta -= conversion * time;
      unit[key] = time;
    }
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
