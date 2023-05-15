import { CategoryType, CocktailType, ToolsType } from "@/src/util/Types";
import { useState } from "react";

export default function SearchFunc({
  setSortedRecipe,
  sortedRecipe,
}: any): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSort(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  const filteredData = sortedRecipe.filter((one: { name: string }) =>
    one.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const sortedData = filteredData.sort(
    (
      a: { name: { toLowerCase: () => number } },
      b: { name: { toLowerCase: () => number } }
    ) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
  );
  setSortedRecipe();
  setSortedRecipe(sortedData);

  return (
    <>
      <input
        onChange={handleSort}
        type="text"
        name="search"
        className="w-2/5 h-[30px] border-b placeholder-[#454ADE] bg-[#fff] text-[#454ADE] text-md"
        placeholder="search"
      />
    </>
  );
}

// {
//   sortedData.map((oneElement, index) => (
//     <div className="flex">
//       <div key={index}>{oneElement.name}</div>
//       <img className="h-[20px]" src={oneElement.image_url} alt="" />
//     </div>
//   ));
// }
