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

export default function CmdSubject({
  subjects,
  disabled,
  selected,
  setSelected,
}: {
  subjects: string[];
  disabled: boolean;
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
          className="w-[80%] justify-between rounded-xl"
        >
          {selected !== ""
            ? (function () {
                const subj = subjects.find((subj) => subj === selected);
                return subj && subj[0].toUpperCase() + subj.slice(1);
              })()
            : "Seleziona la materia..."}
          <CaretSortIcon className="w-4 h-4 ml-2 opacity-50 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 rounded-lg ">
        <Command>
          <CommandInput placeholder="Seleziona la materia..." className="h-9" />
          <CommandEmpty>Nessuna materia trovata...</CommandEmpty>
          <CommandGroup>
            {subjects.map((subj) => (
              <CommandItem
                key={subj}
                value={subj}
                onSelect={(currentValue) => {
                  setOpen(false);
                  if (currentValue === selected) return;
                  setSelected(currentValue);
                }}
              >
                {subj === "all"
                  ? "Tutte le materie"
                  : subj[0].toUpperCase() + subj.slice(1)}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    selected === subj ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
            <CommandList></CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
