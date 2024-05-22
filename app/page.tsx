import Heading from "@/components/hero/heading";
import SearchBar from "@/components/hero/search-bar";
import TextLG from "@/components/typhography/textLG";
import Category from "@/components/videos/category";
import { getClientVideos } from "@/constants/functions";

export default async function Home() {
  const res = await fetch(
    "https://www.itisvallauri.net/visori360/php/datiHome.php",
    { method: "GET", headers: { "Content-Type": "application/json" } }
  );

  const data = await res.json();

  const videos = getClientVideos(data);

  return (
    <>
      <Heading />
      <SearchBar />
      {/* TODO: filter by category  and handle search */}
      <TextLG className="mt-24 mb-2 text-center">Materia 1</TextLG>
      <Category name="Argomento 1" videos={videos} />
      <TextLG className="mt-12 mb-2 text-center">Materia 2</TextLG>
      <Category name="Argomento 1" videos={videos} />
    </>
  );
}
