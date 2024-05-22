import Heading from "@/components/hero/heading";
import SearchBar from "@/components/hero/search-bar";
import TextLG from "@/components/typhography/textLG";
import Category from "@/components/videos/category";
import { getClientVideos } from "@/constants/functions";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log(searchParams);

  const query = (function () {
    let res = "";
    if (searchParams.materia && searchParams.argomento) {
      res = `?materia=${searchParams.materia}&argomento=${searchParams.argomento}`;
    } else if (searchParams.argomento) {
      res = `?argomento=${searchParams.argomento}`;
    } else if (searchParams.materia) {
      res = `?materia=${searchParams.materia}`;
    }

    return res;
  })();

  const res = await fetch(
    `https://www.itisvallauri.net/visori360/php/datiHome.php${query}`,
    { method: "GET", headers: { "Content-Type": "application/json" } }
  );

  const data = await res.json();

  const videos = getClientVideos(data);

  return (
    <>
      <Heading />
      {/* @ts-ignore, TODO: fix */}
      <SearchBar selected={searchParams} />
      {/* TODO: filter by category  and handle search */}
      <TextLG className="mt-24 mb-2 text-center first-letter:capitalize">
        {searchParams.materia || "Tutte le materie"}
      </TextLG>
      <Category
        name={(searchParams.argomento as string) || "Tutti gli argomenti"}
        videos={videos}
      />
    </>
  );
}
