import Heading from "@/components/hero/heading";
import SearchBar from "@/components/hero/search-bar";
import TextLG from "@/components/typhography/textLG";
import Category from "@/components/videos/category";

export default function Home() {
  return (
    <>
      <Heading />
      <SearchBar />
      <TextLG className="mt-24 mb-2 text-center">Materia 1</TextLG>
      <Category name="Argomento 1" />
      <Category name="Argomento 2" />
      <Category name="Argomento 3" />
      <TextLG className="mt-12 mb-2 text-center">Materia 2</TextLG>
      <Category name="Argomento 1" />
      <Category name="Argomento 2" />
      <Category name="Argomento 3" />
    </>
  );
}
