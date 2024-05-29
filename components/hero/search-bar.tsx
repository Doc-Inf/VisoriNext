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
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CaretSortIcon, CheckIcon, ResetIcon } from "@radix-ui/react-icons";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { cn } from "@/lib/utils";
import TooltipHeader from "../tooltip-header";

export default function SearchBar({
  subjects,
  topics,
}: {
  subjects: string[];
  topics: Map<string, Set<string>>;
}) {
  const [open, setOpen] = useState({ subj: false, topic: false });

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
      <div className="m-auto md:space-x-2 md:items-center md:justify-center md:flex  gap-y-4 md:w-[80%] max-w-screen-md mb-4 grid justify-center">
        <Popover
          open={open.subj}
          onOpenChange={(state: boolean) => setOpen({ ...open, subj: state })}
        >
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open.subj}
              className="w-[250px]  justify-between rounded-xl"
            >
              {searchParams.get("materia")
                ? (function () {
                    const subj = subjects.find(
                      (subj) => subj === searchParams.get("materia")
                    );
                    return subj && subj[0].toUpperCase() + subj.slice(1);
                  })()
                : "Seleziona la materia..."}
              <CaretSortIcon className="w-4 h-4 ml-2 opacity-50 shrink-0" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[250px] p-0 rounded-lg">
            <Command>
              <CommandInput
                placeholder="Seleziona la materia..."
                className="h-9"
              />
              <CommandEmpty>Nessuna materia trovata...</CommandEmpty>
              <CommandGroup>
                {subjects.map((subj) => (
                  <CommandItem
                    key={subj}
                    value={subj}
                    onSelect={(currentValue) => {
                      setOpen({ ...open, subj: false });
                      if (currentValue === searchParams.get("materia")) return;
                      handleRouting(currentValue, "materia");
                    }}
                  >
                    {subj === "all"
                      ? "Tutte le materie"
                      : subj[0].toUpperCase() + subj.slice(1)}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        searchParams.get("materia") === subj ||
                          (!searchParams.get("materia") && subj === "all")
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
                <CommandList></CommandList>
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>

        <Popover
          open={open.topic}
          onOpenChange={(state: boolean) => setOpen({ ...open, topic: state })}
        >
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open.topic}
              className="w-[250px] justify-between rounded-xl"
            >
              {searchParams.get("argomento")
                ? (function () {
                    const topicSet = topics.get(
                      searchParams.get("materia") || "all"
                    );
                    if (!topicSet) return "Seleziona l'argomento...";
                    for (const topic of topicSet) {
                      if (topic === searchParams.get("argomento"))
                        return topic[0].toUpperCase() + topic.slice(1);
                    }
                    return "Seleziona l'argomento...";
                  })()
                : "Seleziona l'argomento..."}
              <CaretSortIcon className="w-4 h-4 ml-2 opacity-50 shrink-0" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[250px] p-0 rounded-lg">
            <Command>
              <CommandInput
                placeholder="Seleziona  l'argomento..."
                className="h-9"
              />
              <div className="max-h-[150px] overflow-y-scroll">
                <CommandEmpty>Nessun argomento trovato...</CommandEmpty>
                <CommandGroup>
                  <CommandItem
                    value={"all"}
                    onSelect={() => {
                      setOpen({ ...open, topic: false });
                      handleRouting("all", "argomento");
                    }}
                  >
                    Tutti gli argomenti
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        searchParams.get("argomento") === null
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                </CommandGroup>
                {[...topics.keys()].map(
                  (subj) =>
                    (searchParams.get("materia") === subj ||
                      searchParams.get("materia") === null) && (
                      <CommandGroup
                        heading={subj[0].toUpperCase() + subj.slice(1)}
                        key={subj}
                      >
                        {[...(topics.get(subj)?.values() || [])].map(
                          (topic) => (
                            <CommandItem
                              key={topic}
                              value={topic}
                              onSelect={(currentValue) => {
                                setOpen({ ...open, topic: false });
                                if (
                                  currentValue === searchParams.get("argomento")
                                )
                                  return;
                                router.push(
                                  `/?${new URLSearchParams({
                                    materia: subj,
                                    argomento: currentValue,
                                  }).toString()}`,
                                  {
                                    scroll: false,
                                  }
                                );
                              }}
                            >
                              {topic[0].toUpperCase() + topic.slice(1)}
                              <CheckIcon
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  searchParams.get("argomento") === topic
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          )
                        )}
                      </CommandGroup>
                    )
                )}
                <CommandList />
              </div>
            </Command>
          </PopoverContent>
        </Popover>

        <TooltipHeader text="Cancella i filtri">
          <Button
            className="rounded-xl"
            onClick={() => router.push("/", { scroll: false })}
          >
            <ResetIcon />
          </Button>
        </TooltipHeader>
      </div>
    </>
  );
}
