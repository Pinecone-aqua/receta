import axios from "axios";
import { Tabs, TabList, Tab, TabPanels } from "@chakra-ui/react";
import {
  CategoryType,
  CocktailType,
  CollectionType,
  ToolsType,
} from "@/src/types/types";
import RecipeTable from "../components/sub/tables/recipe/RecipeTable";
import CategoryTable from "../components/sub/tables/category/CategoryTable";
import ToolTable from "../components/sub/tables/tool/ToolTable";
import Layout from "../components/Layout";

interface RecipePropType {
  categories: CategoryType[];
  collections: CollectionType[];
  recipes: CocktailType[];
  tools: ToolsType[];
}

export default function Recipe({
  categories,
  collections,
  recipes,
  tools,
}: RecipePropType): JSX.Element {
  console.log("categories:", categories);
  console.log("collections:", collections);
  return (
    <Layout>
      {/* // <div className="w-full flex justify-center gap-3 ml-[10px]"> */}
      <div className="w-3/5 ml-[10px] mt-[20px]">
        <Tabs>
          <TabList>
            <Tab>Recipes</Tab>
            <Tab>Categories</Tab>
            <Tab>Tools</Tab>
          </TabList>

          <TabPanels>
            <RecipeTable
              collections={collections}
              recipes={recipes}
              categories={categories}
              tools={tools}
            />
            <CategoryTable collections={collections} categories={categories} />
            <ToolTable tools={tools} />
          </TabPanels>
        </Tabs>
      </div>
      {/* </div> */}
    </Layout>
  );
}

export async function getStaticProps() {
  const categories = await axios
    .get(`http://localhost:3003/categories/get`)
    .then((res) => res.data);

  const collections = await axios
    .get("http://localhost:3003/collections/get")
    .then((res) => res.data);

  const recipes = await axios
    .get("http://localhost:3003/recipes/all")
    .then((res) => res.data);

  const tools = await axios
    .get("http://localhost:3003/tools/get")
    .then((res) => res.data);

  return {
    props: {
      categories,
      collections,
      recipes,
      tools,
    },
  };
}
