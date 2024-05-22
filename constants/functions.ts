import { ClientVideo, ServerVideo } from "./types";

export function getClientVideos(videos: ServerVideo[]): ClientVideo[] {
  return videos.map((video) => ({
    title: video.titolo,
    description: video.descrizione,
    link: video.link,
    thumbnail: video.image,
    categories: [],
  }));
}
