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
import NeedHelp from "@/component/sub/NeedHelp";
import { BsArrowDownShort } from "react-icons/bs";

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
          <Recipes bgColor="#FFFBF1" textColor="#1E1E1E" />
          <div className="place-content-center flex my-10">
            <div className="text-white cursor-pointer">
              <BsArrowDownShort className="animate-bounce mx-auto w-[45px] h-[45px] border rounded-[50%]" />
              <p className="text-[12px]">Цааш үзэх</p>
            </div>
          </div>
          <OurStory />
          <Membership />
        </div>
        <NeedHelp />
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
