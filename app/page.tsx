import Heading from "@/components/hero/heading";
import SearchBar from "@/components/hero/search-bar";
import TextLG from "@/components/typhography/textLG";
import Category from "@/components/videos/category";
import { getClientVideos } from "@/constants/functions";

async function fetchVideos(query: string) {
  try {
    const res = await fetch(
      `https://www.itisvallauri.net/visori360/php/datiHome.php${query}`,
      { method: "GET", headers: { "Content-Type": "application/json" } }
    );
    const data = await res.json();
    return getClientVideos(data);
  } catch (err) {
    throw new Error("Failed to fetch videos");
  }
}

async function fetchSubjects() {
  try {
    const res = await fetch(
      "https://www.itisvallauri.net/visori360/php/datiHome.php?getMaterie",
      { method: "GET", headers: { "Content-Type": "application/json" } }
    );
    const data = await res.json();
    return data.map((obj: { id: string; nome: string }) =>
      obj.nome.toLowerCase()
    );
  } catch (err) {
    throw new Error("Failed to fetch subjects");
  }
}

async function fetchTopics() {
  try {
    const res = await fetch(
      "https://www.itisvallauri.net/visori360/php/datiHome.php?getArgomenti",
      { method: "GET", headers: { "Content-Type": "application/json" } }
    );
    const data = await res.json();
    const map = new Map();
    for (const { nomeArgomento, materia } of data) {
      const lowerMateria = materia.toLowerCase();
      const lowerArgomento = nomeArgomento.toLowerCase();
      if (!map.has(lowerMateria)) {
        map.set(lowerMateria, new Set([lowerArgomento]));
        continue;
      }
      map.set(lowerMateria, map.get(lowerMateria).add(lowerArgomento));
    }
    return map;
  } catch (err) {
    throw new Error("Failed to fetch topics");
  }
}

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
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

  const videos = await fetchVideos(query);
  const subjs = ["all", ...(await fetchSubjects())];
  const topics = await fetchTopics();

  return (
    <>
      <Heading />
      <SearchBar subjects={subjs} topics={topics} />
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
