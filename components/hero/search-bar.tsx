"use client";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import TextLG from "../typhography/textLG";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar({
  selected,
}: {
  selected: { materia: string; argomento: string };
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const genQuery = (newParam: string, key: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (newParam !== "all") {
      params.set(key, newParam);
    } else {
      params.delete(key);
    }

    return params.toString();
  };
  const handleRouting = (value: string, from: string) => {
    const base = "/";
    const query = genQuery(value, from);

    router.push(`${base}?${query}`, {
      scroll: false,
    });
  };
  return (
    <>
      <TextLG className="mb-4 text-center">Cerca nella videoteca</TextLG>
      <div className="m-auto space-x-2 items-center justify-center flex w-[80%] max-w-screen-md mb-8">
        <Select
          onValueChange={(curr) => handleRouting(curr, "materia")}
          value={selected.materia || "all"}
        >
          <SelectTrigger className="w-[280px] rounded-xl shadow-md shadow-input dark:shadow-none">
            <SelectValue placeholder="Materia" className="text-white" />
            <p className="sr-only">Materia da cercare </p>
          </SelectTrigger>
          <SelectContent className="w-[280px] rounded-xl  shadow-input dark:shadow-none  pb-3">
            <SelectGroup className="px-2">
              <SelectLabel className="-px-1">Materia</SelectLabel>
              <SelectItem className="text-md" value="all">
                Tutte
              </SelectItem>
              <SelectItem className="text-md" value="biologia">
                Biologia
              </SelectItem>
              <SelectItem className="text-md" value="chimica">
                Chimica
              </SelectItem>
              <SelectItem className="text-md" value="scienze della terra">
                Scienze della Terra
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select
          onValueChange={(curr) => handleRouting(curr, "argomento")}
          value={selected.argomento || "all"}
        >
          <SelectTrigger className="w-[280px] rounded-xl shadow-md shadow-input dark:shadow-none">
            <SelectValue placeholder="Argomento" className="text-white" />
            <p className="sr-only">Argomento da cercare </p>
          </SelectTrigger>
          <SelectContent className="w-[280px] rounded-xl  shadow-input dark:shadow-none  pb-3">
            <SelectGroup className="px-2">
              <SelectLabel className="-px-1">Argomento</SelectLabel>
              <SelectItem className="text-md" value="all">
                Tutti
              </SelectItem>
              <SelectItem className="text-md" value="cellula">
                Cellula
              </SelectItem>
              <SelectItem className="text-md" value="terremoto">
                Terremoto
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button className="rounded-xl">
          <Search />
        </Button>
      </div>
    </>
  );
}
