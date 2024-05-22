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
  link: string;
  thumbnail: string;
  categories: string[];
}
