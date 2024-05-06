import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
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

export default function SearchBar() {
  return (
    <>
      <TextLG className="mb-4 text-center">Cerca nella videoteca</TextLG>
      <div className="m-auto space-x-2 items-center justify-center flex w-[80%] max-w-screen-md mb-8">
        <Select>
          <SelectTrigger className="w-[280px] rounded-xl shadow-md shadow-input dark:shadow-none">
            <SelectValue placeholder="Materia" className="text-white" />
            <p className="sr-only">Materia da cercare </p>
          </SelectTrigger>
          <SelectContent className="w-[280px] rounded-xl  shadow-input dark:shadow-none  pb-3">
            <SelectGroup className="px-2">
              <SelectLabel className="-px-1">Materia</SelectLabel>
              <SelectItem className="text-md" value="mat1">
                Materia 1
              </SelectItem>
              <SelectItem className="text-md" value="mat2">
                Materia 2
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[280px] rounded-xl shadow-md shadow-input dark:shadow-none">
            <SelectValue placeholder="Argomento" className="text-white" />
            <p className="sr-only">Argomento da cercare </p>
          </SelectTrigger>
          <SelectContent className="w-[280px] rounded-xl  shadow-input dark:shadow-none  pb-3">
            <SelectGroup className="px-2">
              <SelectLabel className="-px-1">Materia</SelectLabel>
              <SelectItem className="text-md" value="mat1">
                Argomento 1
              </SelectItem>
              <SelectItem className="text-md" value="mat2">
                Argomento 2
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
