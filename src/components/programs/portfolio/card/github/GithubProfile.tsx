import { GithubProfile, getGithubProfile } from "@/app/api";
import React from "react";
import { Loader } from "@/components/layout";
import GithubCard from "./GithubCard";
import { USERNAME } from "../../constants";
import GithubCalendar from "./GithubCalendar";
import Image from "next/image";

const GithubProfile = () => {
  const [githubProfile, setGithubProfile] =
    React.useState<GithubProfile | null>({
      user: {
        avatarUrl:
          "https://avatars.githubusercontent.com/u/74647679?u=40ef9f02f6012227521bf2267d111385b2e8f8a2&v=4",
        repositories: {
          totalCount: 14,
        },
        issues: {
          totalCount: 13,
        },
        pullRequests: {
          totalCount: 2,
        },
        contributionsCollection: {
          contributionCalendar: {
            isHalloween: false,
            totalContributions: 577,
            weeks: [
              {
                contributionDays: [
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-01-01",
                    weekday: 0,
                  },
                  {
                    color: "#40c463",
                    contributionCount: 5,
                    date: "2023-01-02",
                    weekday: 1,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-01-03",
                    weekday: 2,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-01-04",
                    weekday: 3,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-01-05",
                    weekday: 4,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-01-06",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-01-07",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-01-01",
              },
              {
                contributionDays: [
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-01-08",
                    weekday: 0,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 3,
                    date: "2023-01-09",
                    weekday: 1,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-01-10",
                    weekday: 2,
                  },
                  {
                    color: "#30a14e",
                    contributionCount: 7,
                    date: "2023-01-11",
                    weekday: 3,
                  },
                  {
                    color: "#40c463",
                    contributionCount: 5,
                    date: "2023-01-12",
                    weekday: 4,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 3,
                    date: "2023-01-13",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-01-14",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-01-08",
              },
              {
                contributionDays: [
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-01-15",
                    weekday: 0,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-01-16",
                    weekday: 1,
                  },
                  {
                    color: "#40c463",
                    contributionCount: 4,
                    date: "2023-01-17",
                    weekday: 2,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-01-18",
                    weekday: 3,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 3,
                    date: "2023-01-19",
                    weekday: 4,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-01-20",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-01-21",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-01-15",
              },
              {
                contributionDays: [
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-01-22",
                    weekday: 0,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-01-23",
                    weekday: 1,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-01-24",
                    weekday: 2,
                  },
                  {
                    color: "#40c463",
                    contributionCount: 4,
                    date: "2023-01-25",
                    weekday: 3,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-01-26",
                    weekday: 4,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 2,
                    date: "2023-01-27",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-01-28",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-01-22",
              },
              {
                contributionDays: [
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-01-29",
                    weekday: 0,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 2,
                    date: "2023-01-30",
                    weekday: 1,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-01-31",
                    weekday: 2,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 3,
                    date: "2023-02-01",
                    weekday: 3,
                  },
                  {
                    color: "#40c463",
                    contributionCount: 4,
                    date: "2023-02-02",
                    weekday: 4,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 2,
                    date: "2023-02-03",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-02-04",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-01-29",
              },
              {
                contributionDays: [
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-02-05",
                    weekday: 0,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-02-06",
                    weekday: 1,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-02-07",
                    weekday: 2,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-02-08",
                    weekday: 3,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-02-09",
                    weekday: 4,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-02-10",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-02-11",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-02-05",
              },
              {
                contributionDays: [
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-02-12",
                    weekday: 0,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-02-13",
                    weekday: 1,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 3,
                    date: "2023-02-14",
                    weekday: 2,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 3,
                    date: "2023-02-15",
                    weekday: 3,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-02-16",
                    weekday: 4,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-02-17",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-02-18",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-02-12",
              },
              {
                contributionDays: [
                  {
                    color: "#9be9a8",
                    contributionCount: 3,
                    date: "2023-02-19",
                    weekday: 0,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-02-20",
                    weekday: 1,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 2,
                    date: "2023-02-21",
                    weekday: 2,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-02-22",
                    weekday: 3,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-02-23",
                    weekday: 4,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 2,
                    date: "2023-02-24",
                    weekday: 5,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 3,
                    date: "2023-02-25",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-02-19",
              },
              {
                contributionDays: [
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-02-26",
                    weekday: 0,
                  },
                  {
                    color: "#40c463",
                    contributionCount: 6,
                    date: "2023-02-27",
                    weekday: 1,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-02-28",
                    weekday: 2,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-03-01",
                    weekday: 3,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-03-02",
                    weekday: 4,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-03-03",
                    weekday: 5,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 3,
                    date: "2023-03-04",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-02-26",
              },
              {
                contributionDays: [
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-03-05",
                    weekday: 0,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-03-06",
                    weekday: 1,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-03-07",
                    weekday: 2,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-03-08",
                    weekday: 3,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 2,
                    date: "2023-03-09",
                    weekday: 4,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-03-10",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-03-11",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-03-05",
              },
              {
                contributionDays: [
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-03-12",
                    weekday: 0,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 3,
                    date: "2023-03-13",
                    weekday: 1,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-03-14",
                    weekday: 2,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-03-15",
                    weekday: 3,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-03-16",
                    weekday: 4,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-03-17",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-03-18",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-03-12",
              },
              {
                contributionDays: [
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-03-19",
                    weekday: 0,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-03-20",
                    weekday: 1,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-03-21",
                    weekday: 2,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 2,
                    date: "2023-03-22",
                    weekday: 3,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-03-23",
                    weekday: 4,
                  },
                  {
                    color: "#40c463",
                    contributionCount: 5,
                    date: "2023-03-24",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-03-25",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-03-19",
              },
              {
                contributionDays: [
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-03-26",
                    weekday: 0,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-03-27",
                    weekday: 1,
                  },
                  {
                    color: "#40c463",
                    contributionCount: 4,
                    date: "2023-03-28",
                    weekday: 2,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-03-29",
                    weekday: 3,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-03-30",
                    weekday: 4,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-03-31",
                    weekday: 5,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 3,
                    date: "2023-04-01",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-03-26",
              },
              {
                contributionDays: [
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-04-02",
                    weekday: 0,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 2,
                    date: "2023-04-03",
                    weekday: 1,
                  },
                  {
                    color: "#40c463",
                    contributionCount: 4,
                    date: "2023-04-04",
                    weekday: 2,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 2,
                    date: "2023-04-05",
                    weekday: 3,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 2,
                    date: "2023-04-06",
                    weekday: 4,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-04-07",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-04-08",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-04-02",
              },
              {
                contributionDays: [
                  {
                    color: "#9be9a8",
                    contributionCount: 3,
                    date: "2023-04-09",
                    weekday: 0,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 3,
                    date: "2023-04-10",
                    weekday: 1,
                  },
                  {
                    color: "#40c463",
                    contributionCount: 5,
                    date: "2023-04-11",
                    weekday: 2,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 3,
                    date: "2023-04-12",
                    weekday: 3,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 3,
                    date: "2023-04-13",
                    weekday: 4,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-04-14",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-04-15",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-04-09",
              },
              {
                contributionDays: [
                  {
                    color: "#9be9a8",
                    contributionCount: 2,
                    date: "2023-04-16",
                    weekday: 0,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 3,
                    date: "2023-04-17",
                    weekday: 1,
                  },
                  {
                    color: "#40c463",
                    contributionCount: 5,
                    date: "2023-04-18",
                    weekday: 2,
                  },
                  {
                    color: "#30a14e",
                    contributionCount: 7,
                    date: "2023-04-19",
                    weekday: 3,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-04-20",
                    weekday: 4,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 2,
                    date: "2023-04-21",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-04-22",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-04-16",
              },
              {
                contributionDays: [
                  {
                    color: "#9be9a8",
                    contributionCount: 2,
                    date: "2023-04-23",
                    weekday: 0,
                  },
                  {
                    color: "#40c463",
                    contributionCount: 4,
                    date: "2023-04-24",
                    weekday: 1,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 3,
                    date: "2023-04-25",
                    weekday: 2,
                  },
                  {
                    color: "#40c463",
                    contributionCount: 6,
                    date: "2023-04-26",
                    weekday: 3,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 3,
                    date: "2023-04-27",
                    weekday: 4,
                  },
                  {
                    color: "#40c463",
                    contributionCount: 4,
                    date: "2023-04-28",
                    weekday: 5,
                  },
                  {
                    color: "#40c463",
                    contributionCount: 5,
                    date: "2023-04-29",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-04-23",
              },
              {
                contributionDays: [
                  {
                    color: "#9be9a8",
                    contributionCount: 3,
                    date: "2023-04-30",
                    weekday: 0,
                  },
                  {
                    color: "#30a14e",
                    contributionCount: 8,
                    date: "2023-05-01",
                    weekday: 1,
                  },
                  {
                    color: "#40c463",
                    contributionCount: 4,
                    date: "2023-05-02",
                    weekday: 2,
                  },
                  {
                    color: "#30a14e",
                    contributionCount: 9,
                    date: "2023-05-03",
                    weekday: 3,
                  },
                  {
                    color: "#216e39",
                    contributionCount: 11,
                    date: "2023-05-04",
                    weekday: 4,
                  },
                  {
                    color: "#30a14e",
                    contributionCount: 8,
                    date: "2023-05-05",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-05-06",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-04-30",
              },
              {
                contributionDays: [
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-05-07",
                    weekday: 0,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-05-08",
                    weekday: 1,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-05-09",
                    weekday: 2,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-05-10",
                    weekday: 3,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-05-11",
                    weekday: 4,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 2,
                    date: "2023-05-12",
                    weekday: 5,
                  },
                  {
                    color: "#40c463",
                    contributionCount: 5,
                    date: "2023-05-13",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-05-07",
              },
              {
                contributionDays: [
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-05-14",
                    weekday: 0,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-05-15",
                    weekday: 1,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 2,
                    date: "2023-05-16",
                    weekday: 2,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-05-17",
                    weekday: 3,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-05-18",
                    weekday: 4,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-05-19",
                    weekday: 5,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-05-20",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-05-14",
              },
              {
                contributionDays: [
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-05-21",
                    weekday: 0,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-05-22",
                    weekday: 1,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-05-23",
                    weekday: 2,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-05-24",
                    weekday: 3,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 2,
                    date: "2023-05-25",
                    weekday: 4,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-05-26",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-05-27",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-05-21",
              },
              {
                contributionDays: [
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-05-28",
                    weekday: 0,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-05-29",
                    weekday: 1,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-05-30",
                    weekday: 2,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-05-31",
                    weekday: 3,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-06-01",
                    weekday: 4,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-06-02",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-06-03",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-05-28",
              },
              {
                contributionDays: [
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-06-04",
                    weekday: 0,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-06-05",
                    weekday: 1,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-06-06",
                    weekday: 2,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-06-07",
                    weekday: 3,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-06-08",
                    weekday: 4,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-06-09",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-06-10",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-06-04",
              },
              {
                contributionDays: [
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-06-11",
                    weekday: 0,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-06-12",
                    weekday: 1,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 2,
                    date: "2023-06-13",
                    weekday: 2,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-06-14",
                    weekday: 3,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-06-15",
                    weekday: 4,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-06-16",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-06-17",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-06-11",
              },
              {
                contributionDays: [
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-06-18",
                    weekday: 0,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-06-19",
                    weekday: 1,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-06-20",
                    weekday: 2,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-06-21",
                    weekday: 3,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-06-22",
                    weekday: 4,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-06-23",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-06-24",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-06-18",
              },
              {
                contributionDays: [
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-06-25",
                    weekday: 0,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-06-26",
                    weekday: 1,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-06-27",
                    weekday: 2,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-06-28",
                    weekday: 3,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-06-29",
                    weekday: 4,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-06-30",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-07-01",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-06-25",
              },
              {
                contributionDays: [
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-07-02",
                    weekday: 0,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-07-03",
                    weekday: 1,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-07-04",
                    weekday: 2,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-07-05",
                    weekday: 3,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-07-06",
                    weekday: 4,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-07-07",
                    weekday: 5,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-07-08",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-07-02",
              },
              {
                contributionDays: [
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-07-09",
                    weekday: 0,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-07-10",
                    weekday: 1,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-07-11",
                    weekday: 2,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-07-12",
                    weekday: 3,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-07-13",
                    weekday: 4,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-07-14",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-07-15",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-07-09",
              },
              {
                contributionDays: [
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-07-16",
                    weekday: 0,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-07-17",
                    weekday: 1,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-07-18",
                    weekday: 2,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-07-19",
                    weekday: 3,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-07-20",
                    weekday: 4,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-07-21",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-07-22",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-07-16",
              },
              {
                contributionDays: [
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-07-23",
                    weekday: 0,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-07-24",
                    weekday: 1,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-07-25",
                    weekday: 2,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-07-26",
                    weekday: 3,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-07-27",
                    weekday: 4,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-07-28",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-07-29",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-07-23",
              },
              {
                contributionDays: [
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-07-30",
                    weekday: 0,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-07-31",
                    weekday: 1,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-08-01",
                    weekday: 2,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-08-02",
                    weekday: 3,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-08-03",
                    weekday: 4,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-08-04",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-08-05",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-07-30",
              },
              {
                contributionDays: [
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-08-06",
                    weekday: 0,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-08-07",
                    weekday: 1,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-08-08",
                    weekday: 2,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-08-09",
                    weekday: 3,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-08-10",
                    weekday: 4,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-08-11",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-08-12",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-08-06",
              },
              {
                contributionDays: [
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-08-13",
                    weekday: 0,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-08-14",
                    weekday: 1,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-08-15",
                    weekday: 2,
                  },
                  {
                    color: "#30a14e",
                    contributionCount: 9,
                    date: "2023-08-16",
                    weekday: 3,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-08-17",
                    weekday: 4,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-08-18",
                    weekday: 5,
                  },
                  {
                    color: "#216e39",
                    contributionCount: 97,
                    date: "2023-08-19",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-08-13",
              },
              {
                contributionDays: [
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-08-20",
                    weekday: 0,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-08-21",
                    weekday: 1,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-08-22",
                    weekday: 2,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-08-23",
                    weekday: 3,
                  },
                  {
                    color: "#216e39",
                    contributionCount: 23,
                    date: "2023-08-24",
                    weekday: 4,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-08-25",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-08-26",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-08-20",
              },
              {
                contributionDays: [
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-08-27",
                    weekday: 0,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-08-28",
                    weekday: 1,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-08-29",
                    weekday: 2,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-08-30",
                    weekday: 3,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-08-31",
                    weekday: 4,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-09-01",
                    weekday: 5,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-09-02",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-08-27",
              },
              {
                contributionDays: [
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-09-03",
                    weekday: 0,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-09-04",
                    weekday: 1,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-09-05",
                    weekday: 2,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 2,
                    date: "2023-09-06",
                    weekday: 3,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-09-07",
                    weekday: 4,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-09-08",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-09-09",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-09-03",
              },
              {
                contributionDays: [
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-09-10",
                    weekday: 0,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-09-11",
                    weekday: 1,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-09-12",
                    weekday: 2,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-09-13",
                    weekday: 3,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-09-14",
                    weekday: 4,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-09-15",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-09-16",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-09-10",
              },
              {
                contributionDays: [
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-09-17",
                    weekday: 0,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-09-18",
                    weekday: 1,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-09-19",
                    weekday: 2,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-09-20",
                    weekday: 3,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-09-21",
                    weekday: 4,
                  },
                  {
                    color: "#30a14e",
                    contributionCount: 9,
                    date: "2023-09-22",
                    weekday: 5,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 2,
                    date: "2023-09-23",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-09-17",
              },
              {
                contributionDays: [
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-09-24",
                    weekday: 0,
                  },
                  {
                    color: "#40c463",
                    contributionCount: 5,
                    date: "2023-09-25",
                    weekday: 1,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-09-26",
                    weekday: 2,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-09-27",
                    weekday: 3,
                  },
                  {
                    color: "#40c463",
                    contributionCount: 4,
                    date: "2023-09-28",
                    weekday: 4,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-09-29",
                    weekday: 5,
                  },
                  {
                    color: "#40c463",
                    contributionCount: 4,
                    date: "2023-09-30",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-09-24",
              },
              {
                contributionDays: [
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-10-01",
                    weekday: 0,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-10-02",
                    weekday: 1,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-10-03",
                    weekday: 2,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-10-04",
                    weekday: 3,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-10-05",
                    weekday: 4,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 3,
                    date: "2023-10-06",
                    weekday: 5,
                  },
                  {
                    color: "#40c463",
                    contributionCount: 4,
                    date: "2023-10-07",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-10-01",
              },
              {
                contributionDays: [
                  {
                    color: "#9be9a8",
                    contributionCount: 3,
                    date: "2023-10-08",
                    weekday: 0,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-10-09",
                    weekday: 1,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-10-10",
                    weekday: 2,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-10-11",
                    weekday: 3,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 2,
                    date: "2023-10-12",
                    weekday: 4,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-10-13",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-10-14",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-10-08",
              },
              {
                contributionDays: [
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-10-15",
                    weekday: 0,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-10-16",
                    weekday: 1,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-10-17",
                    weekday: 2,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-10-18",
                    weekday: 3,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 2,
                    date: "2023-10-19",
                    weekday: 4,
                  },
                  {
                    color: "#40c463",
                    contributionCount: 4,
                    date: "2023-10-20",
                    weekday: 5,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-10-21",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-10-15",
              },
              {
                contributionDays: [
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-10-22",
                    weekday: 0,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-10-23",
                    weekday: 1,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-10-24",
                    weekday: 2,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 3,
                    date: "2023-10-25",
                    weekday: 3,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-10-26",
                    weekday: 4,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-10-27",
                    weekday: 5,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 2,
                    date: "2023-10-28",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-10-22",
              },
              {
                contributionDays: [
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-10-29",
                    weekday: 0,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 3,
                    date: "2023-10-30",
                    weekday: 1,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-10-31",
                    weekday: 2,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-11-01",
                    weekday: 3,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-11-02",
                    weekday: 4,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 2,
                    date: "2023-11-03",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-11-04",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-10-29",
              },
              {
                contributionDays: [
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-11-05",
                    weekday: 0,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 2,
                    date: "2023-11-06",
                    weekday: 1,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-11-07",
                    weekday: 2,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-11-08",
                    weekday: 3,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-11-09",
                    weekday: 4,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-11-10",
                    weekday: 5,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-11-11",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-11-05",
              },
              {
                contributionDays: [
                  {
                    color: "#30a14e",
                    contributionCount: 7,
                    date: "2023-11-12",
                    weekday: 0,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 2,
                    date: "2023-11-13",
                    weekday: 1,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-11-14",
                    weekday: 2,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 2,
                    date: "2023-11-15",
                    weekday: 3,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 2,
                    date: "2023-11-16",
                    weekday: 4,
                  },
                  {
                    color: "#40c463",
                    contributionCount: 6,
                    date: "2023-11-17",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-11-18",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-11-12",
              },
              {
                contributionDays: [
                  {
                    color: "#9be9a8",
                    contributionCount: 2,
                    date: "2023-11-19",
                    weekday: 0,
                  },
                  {
                    color: "#40c463",
                    contributionCount: 5,
                    date: "2023-11-20",
                    weekday: 1,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-11-21",
                    weekday: 2,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-11-22",
                    weekday: 3,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-11-23",
                    weekday: 4,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-11-24",
                    weekday: 5,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-11-25",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-11-19",
              },
              {
                contributionDays: [
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-11-26",
                    weekday: 0,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-11-27",
                    weekday: 1,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-11-28",
                    weekday: 2,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-11-29",
                    weekday: 3,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-11-30",
                    weekday: 4,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 2,
                    date: "2023-12-01",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-12-02",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-11-26",
              },
              {
                contributionDays: [
                  {
                    color: "#216e39",
                    contributionCount: 13,
                    date: "2023-12-03",
                    weekday: 0,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-12-04",
                    weekday: 1,
                  },
                  {
                    color: "#216e39",
                    contributionCount: 12,
                    date: "2023-12-05",
                    weekday: 2,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-12-06",
                    weekday: 3,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-12-07",
                    weekday: 4,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-12-08",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-12-09",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-12-03",
              },
              {
                contributionDays: [
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-12-10",
                    weekday: 0,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-12-11",
                    weekday: 1,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-12-12",
                    weekday: 2,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 3,
                    date: "2023-12-13",
                    weekday: 3,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-12-14",
                    weekday: 4,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-12-15",
                    weekday: 5,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-12-16",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-12-10",
              },
              {
                contributionDays: [
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-12-17",
                    weekday: 0,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-12-18",
                    weekday: 1,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-12-19",
                    weekday: 2,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 1,
                    date: "2023-12-20",
                    weekday: 3,
                  },
                  {
                    color: "#ebedf0",
                    contributionCount: 0,
                    date: "2023-12-21",
                    weekday: 4,
                  },
                  {
                    color: "#40c463",
                    contributionCount: 4,
                    date: "2023-12-22",
                    weekday: 5,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 3,
                    date: "2023-12-23",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-12-17",
              },
              {
                contributionDays: [
                  {
                    color: "#9be9a8",
                    contributionCount: 3,
                    date: "2023-12-24",
                    weekday: 0,
                  },
                  {
                    color: "#30a14e",
                    contributionCount: 7,
                    date: "2023-12-25",
                    weekday: 1,
                  },
                  {
                    color: "#216e39",
                    contributionCount: 10,
                    date: "2023-12-26",
                    weekday: 2,
                  },
                  {
                    color: "#40c463",
                    contributionCount: 5,
                    date: "2023-12-27",
                    weekday: 3,
                  },
                  {
                    color: "#40c463",
                    contributionCount: 5,
                    date: "2023-12-28",
                    weekday: 4,
                  },
                  {
                    color: "#9be9a8",
                    contributionCount: 3,
                    date: "2023-12-29",
                    weekday: 5,
                  },
                  {
                    color: "#216e39",
                    contributionCount: 12,
                    date: "2023-12-30",
                    weekday: 6,
                  },
                ],
                firstDay: "2023-12-24",
              },
              {
                contributionDays: [
                  {
                    color: "#30a14e",
                    contributionCount: 7,
                    date: "2023-12-31",
                    weekday: 0,
                  },
                ],
                firstDay: "2023-12-31",
              },
            ],
          },
        },
      },
    });

  const year = React.useMemo(() => {
    const date = new Date();
    return date.getFullYear().toString();
  }, []);

  // React.useEffect(() => {
  //   getGithubProfile({
  //     body: {
  //       username: USERNAME,
  //       year: year,
  //       mock: process.env.NODE_ENV === "development",
  //     },
  //   }).then((res) => {
  //     setGithubProfile(res);
  //   });
  // }, [year]);

  return (
    <Loader loading={githubProfile === null}>
      <div className="flex flex-col gap-y-2 bg-bg-highlight p-2.5 rounded h-full w-full justify-between">
        <div className="flex gap-x-4 items-center">
          <Image
            src={githubProfile?.user.avatarUrl ?? ""}
            alt="Github profile"
            className="md:w-32 md:h-32 w-20 h-20 rounded-full"
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
              count={githubProfile?.user.repositories.totalCount ?? 0}
            />
          </div>
          <div className="lg:col-span-3 col-span-6">
            <GithubCard
              header="Contributions"
              count={
                githubProfile?.user.contributionsCollection.contributionCalendar
                  .totalContributions ?? 0
              }
            />
          </div>
          <div className="lg:col-span-3 col-span-6">
            <GithubCard
              header="Open PRs"
              count={githubProfile?.user.pullRequests.totalCount ?? 0}
            />
          </div>
          <div className="lg:col-span-3 col-span-6">
            <GithubCard
              header="Open Issues"
              count={githubProfile?.user.issues.totalCount ?? 0}
            />
          </div>
        </div>
        <GithubCalendar
          contributionCollection={githubProfile?.user.contributionsCollection}
          year={year}
        />
      </div>
    </Loader>
  );
};

export default GithubProfile;
