import springPreview from "../static/spring.jpg";

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
  previewImage?: string;
}

export const RESOURCE_VIDEOS: ResourceVideo[] = [
  {
    title: "Spring starts here",
    channel: "Laur Spilca",
    category: "Spring Boot",
    youtubeUrl:
      "https://youtube.com/playlist?list=PLEocw3gLFc8W25hvuYb6EERd3F0aZjUQF&si=d3GWkbvTzuMot9BF",
    recommended: true,
    previewImage: springPreview,
  },
  {
    title: "Java course for free",
    channel: "Bro Code",
    category: "Java Fundamentals",
    duration: "12h",
    youtubeUrl: "https://www.youtube.com/watch?v=xk4_1vDrzzo",
    recommended: true,
  },
];
