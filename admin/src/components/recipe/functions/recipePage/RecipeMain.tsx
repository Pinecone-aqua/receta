import { useState } from "react";
import RecipeTable from "../tables/RecipeTable";
import { CategoryType, CocktailType, CollectionType, ToolsType } from "@/src/util/Types";
import CreateRecipe from "../../CreateRecipe";
import { Input, TabPanel } from "@chakra-ui/react";

interface CategoriesPropType {
  categories: CategoryType[];
  recipes: CocktailType[];
  tools: ToolsType[];
  collections: CollectionType[];
}

export default function RecipeMain({
  collections,
  recipes,
  categories,
  tools
}: CategoriesPropType): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSort(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  const filteredData = recipes.filter((one: { name: string }) =>
    one.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const sortedData = filteredData.sort(
    (a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));

  return (
    <TabPanel className="">
      <div className="w-full flex justify-between items-center">
        <CreateRecipe collections={collections} tools={tools} />
        <Input onChange={handleSort}
          type="text"
          name="search"
          width="300px"
          className="pl-[10px] focus:outline-none h-[30px] border-b bg-[#fff] text-[#454ADE] text-md mr-[20px]"
          placeholder="search" size='sm' />
      </div>
        <RecipeTable sortedData={sortedData} categories={categories} collections={collections} tools={tools} />
    </TabPanel>
  );
}
