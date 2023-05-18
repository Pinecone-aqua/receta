import axios from "axios";
import Layout from "../components/Layout";
import {
  CategoryType,
  CocktailType,
  CollectionType,
  NewsType,
  ToolsType,
  UsersType,
} from "../util/Types";
import RecipeColGraphic from "../components/dashboard/RecipeColGraphic";
import AllData from "../components/dashboard/AllData";

interface RecipePropType {
  categoriesData: CategoryType[];
  collections: CollectionType[];
  recipes: CocktailType[];
  toolsData: ToolsType[];
  users: UsersType[];
  news: NewsType[];
}

export default function Dashboard({
  categoriesData,
  recipes,
  toolsData,
  users,
  news,
  collections,
}: RecipePropType): JSX.Element {
  return (
    <Layout>
      <div className="w-full flex flex-col items-center gap-5">
        <AllData
          recipes={recipes}
          categoriesData={categoriesData}
          collectionsData={collections}
          toolsData={toolsData}
          usersData={users}
          newsData={news}
        />
        <RecipeColGraphic recipes={recipes} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const users = await axios
    .get(`${process.env.NEXT_PUBLIC_PUBLIC_SERVER}/users/all`)
    .then((res) => res.data);

  const news = await axios
    .get(`${process.env.NEXT_PUBLIC_PUBLIC_SERVER}/news/all`)
    .then((res) => res.data);

  const recipes = await axios
    .get(`${process.env.NEXT_PUBLIC_PUBLIC_SERVER}/recipes/all`)
    .then((res) => res.data);

  const categoriesData = await axios
    .get(`${process.env.NEXT_PUBLIC_PUBLIC_SERVER}/categories/get`)
    .then((res) => res.data);

  const collections = await axios
    .get(`${process.env.NEXT_PUBLIC_PUBLIC_SERVER}/collections/get`)
    .then((res) => res.data);

  const toolsData = await axios
    .get(`${process.env.NEXT_PUBLIC_PUBLIC_SERVER}/tools/get`)
    .then((res) => res.data);

  return {
    props: {
      recipes,
      users,
      news,
      categoriesData,
      collections,
      toolsData,
    },
  };
}
