import React from "react";
import Layout from "@/component/Layout";
import Recipes from "@/component/sub/Recipes";
import Membership from "@/component/sub/Membership";
import Popular from "@/component/sub/Popular";
import { GetStaticProps } from "next";
import axios from "axios";
import { CategoriesType } from "@/util/Types";
import Categories from "@/component/sub/Categories";

export default function Home(props: {
  categories: CategoriesType[];
}): JSX.Element {
  const { categories } = props;

  return (
    <Layout>
      <div>
        <Categories categories={categories} />
        <Recipes />
        <Membership />
        <Popular />
      </div>
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
