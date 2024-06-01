export interface ServerVideo {
  id: number;
  titolo: string;
  descrizione: string;
  autore: string;
  durata: string;
  image: string;
  link: string;
  lingua: string;
}

export interface ClientVideo {
  title: string;
  description: string;
  author: string;
  duration: string;
  link: string;
  thumbnail: string;
  language: string;
}

// Logger type
export interface Logger {
  success: ClientVideo[];
  error: ClientVideo[];
}
