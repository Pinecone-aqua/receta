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
import OurStory from "@/component/sub/OurStory";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <>
        <div className={`flex container mx-auto min-h-[85vh] bg-currentColor`}>
          <SideBar />
          <Collection />
        </div>
        <div className="bg-[#1E1E1E] border border-[#05445F]">
          <Categories />
          <Recipes />
          <OurStory />
          <Membership />
        </div>
        <div className="bg-[url(/help.png)] bg-cover bg-center h-[500px] bg-[#124822]">
          <div className="pt-[10%] pl-[20%]">
            <p className="text-[46px] font-bold mb-5 text-center">
              Need help getting started?
            </p>
            <div className="flex justify-center">
              <button className="font-bold border rounded-full py-2 px-[4rem] text-[24px]">
                let us help you
              </button>
            </div>
          </div>
        </div>
        <Popular />
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
