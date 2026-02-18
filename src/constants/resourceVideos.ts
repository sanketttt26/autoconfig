export type VideoCategory =
  | "Java Fundamentals"
  | "OOP"
  | "Spring Boot"
  | "Databases"
  | "Testing"
  | "System Design";

export interface ResourceVideo {
  title: string;
  channel: string;
  category: VideoCategory;
  duration?: string;
  youtubeUrl: string;
  recommended?: boolean;
}

export const RESOURCE_VIDEOS: ResourceVideo[] = [
  {
    title: "Spring starts here",
    channel: "Laur Spilca",
    category: "Spring Boot",
    youtubeUrl:
      "https://youtube.com/playlist?list=PLEocw3gLFc8W25hvuYb6EERd3F0aZjUQF&si=d3GWkbvTzuMot9BF",
    recommended: true,
  },
  {
    title: "Object Oriented Programming in Java",
    channel: "Bro Code",
    category: "OOP",
    duration: "3h",
    youtubeUrl: "https://www.youtube.com/watch?v=xk4_1vDrzzo",
    recommended: true,
  },
];
