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
  selected,
  setSelected,
}: {
  subjects: string[];
  topics: Map<string, Set<string>>;
  selected: { subject: string; topic: string };
  setSelected: Function;
}) {
  const [open, setOpen] = useState({ subj: false, topic: false });

  return (
    <>
      <TextLG className="mb-8 mt-40 text-center">
        Cerca video nella videoteca
      </TextLG>
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
              {selected.subject !== "all"
                ? (function () {
                    const subj = subjects.find(
                      (subj) => subj === selected.subject
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
                      if (currentValue === selected.subject) return;
                      setSelected({ ...selected, subject: currentValue });
                    }}
                  >
                    {subj === "all"
                      ? "Tutte le materie"
                      : subj[0].toUpperCase() + subj.slice(1)}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        selected.subject === subj ||
                          (selected.subject === "all" && subj === "all")
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
              {selected.topic !== "all"
                ? (function () {
                    const topicSet = topics.get(selected.subject);
                    if (!topicSet) return selected.topic;
                    for (const topic of topicSet) {
                      if (topic === selected.topic)
                        return topic[0].toUpperCase() + topic.slice(1);
                    }
                    return (
                      selected.topic[0].toUpperCase() + selected.topic.slice(1)
                    );
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
                      setSelected({ ...selected, topic: "all" });
                    }}
                  >
                    Tutti gli argomenti
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        selected.topic === "all" ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                </CommandGroup>
                {[...topics.keys()].map(
                  (subj) =>
                    (selected.subject === subj ||
                      selected.subject === "all") && (
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
                                if (currentValue === selected.topic) return;
                                setSelected({
                                  subject: subj,
                                  topic: currentValue,
                                });
                              }}
                            >
                              {topic[0].toUpperCase() + topic.slice(1)}
                              <CheckIcon
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  selected.topic === topic
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
            onClick={() => {
              setSelected({ subject: "all", topic: "all" });
            }}
          >
            <ResetIcon />
          </Button>
        </TooltipHeader>
      </div>
    </>
  );
}
