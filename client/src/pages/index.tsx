import React from "react";
import Layout from "@/component/Layout";
import Recipes from "@/component/sub/Recipes";
import Membership from "@/component/sub/Membership";
import Popular from "@/component/sub/Popular";
import { GetStaticProps } from "next";
import axios from "axios";
import { CategoriesType } from "@/util/Types";
import Categories from "@/component/sub/Categories";
import SideBar from "@/component/sub/SideBar";
import Collection from "@/component/sub/Collection";
import { useRecipe } from "@/context/RecipeContext";

export default function Home(props: {
  categories: CategoriesType[];
}): JSX.Element {
  const { categories } = props;
  const { activeBtn, setActiveBtn } = useRecipe();

  return (
    <Layout>
      <>
        <div className={`flex container mx-auto min-h-[85vh] bg-currentColor`}>
          <SideBar />
          <Collection setActiveBtn={setActiveBtn} activeBtn={activeBtn} />
        </div>
        <div className="bg-[#1E1E1E] border border-[#05445F]">
          <Categories categories={categories} />
          <Recipes />
          <Membership />
          <Popular />
        </div>
      </>
    </Layout>
  );
}
interface CategoryProps {
  categories: CategoriesType | null;
}
export const getStaticProps: GetStaticProps<CategoryProps> = async () => {
  const res = await axios.get(`http://localhost:3003/categories/get`);
  const categories = await res.data;

  return {
    props: {
      categories: categories,
    },
  };
};
