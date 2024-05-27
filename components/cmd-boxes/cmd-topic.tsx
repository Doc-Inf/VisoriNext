import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../ui/command";
import { cn } from "@/lib/utils";
import { CommandList } from "cmdk";

export default function CmdTopic({
  selectedSubject,
  disabled,
  topics,
  selected,
  setSelected,
}: {
  selectedSubject: string;
  disabled: boolean;
  topics: Map<any, any>;
  selected: string;
  setSelected: Function;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={(state: boolean) => setOpen(!open)}>
      <PopoverTrigger asChild>
        <Button
          disabled={disabled}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between  w-[80%] rounded-xl"
        >
          {selected !== ""
            ? (function () {
                const keys = topics.keys();
                for (const subj of keys) {
                  for (const topic of topics.get(subj)) {
                    if (topic === selected)
                      return topic[0].toUpperCase() + topic.slice(1);
                  }
                }
                return "Seleziona l'argomento...";
              })()
            : "Seleziona l'argomento..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 rounded-lg">
        <Command>
          <CommandInput
            placeholder="Seleziona  l'argomento..."
            className="h-9"
          />
          <div className="max-h-[150px] overflow-y-scroll">
            {[...topics.keys()].map((subj) => (
              <CommandGroup
                heading={subj[0].toUpperCase() + subj.slice(1)}
                key={subj}
              >
                {[...(topics.get(subj)?.values() || [])].map((topic) => (
                  <CommandItem
                    key={topic}
                    value={topic}
                    onSelect={(currentValue) => {
                      setOpen(false);
                      if (currentValue === selected) return;
                      setSelected(currentValue);
                    }}
                  >
                    {topic[0].toUpperCase() + topic.slice(1)}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        selected === topic ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
            <CommandList />
          </div>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
