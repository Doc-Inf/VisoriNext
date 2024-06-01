import { ClientVideo, ServerVideo } from "./types";

export function getClientVideos(videos: ServerVideo[]): ClientVideo[] {
  return videos.map((video) => ({
    title: video.titolo,
    description: video.descrizione,
    duration: video.durata,
    author: video.autore,
    link: video.link,
    thumbnail: video.image,
    language: video.lingua,
  }));
}
