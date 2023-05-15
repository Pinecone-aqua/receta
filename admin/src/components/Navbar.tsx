import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownFill } from "react-icons/ri";
import { useOthers } from "../context/OthersContext";
import axios from "axios";
import { CategoryType, CocktailType, ToolsType } from "../util/Types";
import { useEffect, useState } from "react";
import { useCocktail } from "../context/CocktailContext";
// import { useRouter } from "next/router";

interface RecipePropType {
  categoriesData: CategoryType[];
  // collections: CollectionType[];
  recipes: CocktailType[];
  toolsData: ToolsType[];
}

export default function Navbar({
  categoriesData,
  // collections,
  recipes,
  toolsData,
}: RecipePropType): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  // const router = useRouter();
  const { activePage } = useOthers();
  const { setRecipes } = useCocktail();
  const { setTools, tools, setCategories, categories } = useOthers();

  useEffect(() => {
    setRecipes(recipes);
    console.log(tools)
    console.log(categories)
    setTools(toolsData);
    setCategories(categoriesData);
  }, []);

  
  function handleSort(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  const filtered = recipes.filter((tool) =>
    tool.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedRecipe = filtered.sort((a, b) =>
    a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
  );
  console.log(sortedRecipe)

  return (
    <div className="text-white my-[50px] p-[16px] flex justify-between rounded-md border-[0.2px]">
      <div className="text-[teal]">{activePage && activePage}</div>
      <div className="flex">
          <input
            onChange={handleSort}
            type="text"
            name="search"
            className="w-full border-b placeholder-[#454ADE] bg-[#fff] text-[#454ADE] text-md"
            placeholder="search"
          />
          <CiSearch className="absolute right-0 top-0 w-[25px] h-[25px] text-[#454ADE]" />
        <picture>
          <img
            className="rounded-[50%] h-[25px] object-cover w-[25px]"
            src="https://i.guim.co.uk/img/media/bc12099e16c5e0a7ed7b1e63687dac6dd71ff13b/305_331_2800_1680/master/2800.jpg?width=620&quality=45&dpr=2&s=none"
            alt="..."
          />
        </picture>
        <RiArrowDropDownFill className="w-6 h-6" />
      </div>
    </div>
  );
}


export async function getStaticProps() {
  const categoriesData = await axios
    .get(`http://localhost:3003/categories/get`)
    .then((res) => res.data);

  const collections = await axios
    .get("http://localhost:3003/collections/get")
    .then((res) => res.data);

  const recipes = await axios
    .get("http://localhost:3003/recipes/all")
    .then((res) => res.data);

  const toolsData = await axios
    .get("http://localhost:3003/tools/get")
    .then((res) => res.data);

  return {
    props: {
      categoriesData,
      collections,
      recipes,
      toolsData,
    },
  };
}
