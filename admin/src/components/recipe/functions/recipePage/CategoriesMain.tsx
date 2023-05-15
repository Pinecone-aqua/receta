import { useState } from "react";
import { CategoryType, CollectionType } from "@/src/util/Types";
import { Input, TabPanel } from "@chakra-ui/react";
import CreateCategory from "@/src/components/category/CreateCategory";
import CategoriesTable from "../tables/CategoriesTable";

interface RecipePropType {
  categories: CategoryType[];
  collections: CollectionType[];
}

export default function CategoriesMain({
  collections,
  categories,
}: RecipePropType): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSort(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  const filteredData = categories.filter((one: { name: string }) =>
    one.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const sortedData = filteredData.sort(
    (a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));

  return (
    <TabPanel className="">
      <div className="w-full flex justify-between items-center">
        <CreateCategory collections={collections} />
        <Input onChange={handleSort}
          type="text"
          name="search"
          width="300px"
          className="pl-[10px] focus:outline-none h-[30px] border-b bg-[#fff] text-[#454ADE] text-md mr-[20px]"
          placeholder="search" size='sm' />
      </div>
        <CategoriesTable sortedData={sortedData}/>
    </TabPanel>
  );
}
