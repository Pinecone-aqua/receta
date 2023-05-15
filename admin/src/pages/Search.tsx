import axios from "axios";
import { useEffect } from "react";
import Layout from "../components/Layout";
import SearchFunc from "../components/recipe/functions/SearchFunc";
import { useCocktail } from "../context/CocktailContext";
import { useOthers } from "../context/OthersContext";
import { CategoryType, CocktailType, ToolsType } from "../util/Types";

interface RecipePropType {
  categoriesData: CategoryType[];
  recipes: CocktailType[];
  toolsData: ToolsType[];
}

export default function Search({
  categoriesData,
  recipes,
  toolsData,
}: RecipePropType): JSX.Element {
  return (
    <Layout>
      <div>
        <SearchFunc
          categories={categoriesData}
          recipes={recipes}
          tools={toolsData}
        />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const categoriesData = await axios
    .get(`http://localhost:3003/categories/get`)
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
      recipes,
      toolsData,
    },
  };
}
