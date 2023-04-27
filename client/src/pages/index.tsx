import React from "react";
import Layout from "@/component/Layout";
import Recipes from "@/component/sub/Recipes";
import Membership from "@/component/sub/Membership";
import Popular from "@/component/sub/Popular";
import Categories from "@/component/sub/Categories";
import OurStory from "@/component/sub/OurStory";
import NeedHelp from "@/component/sub/NeedHelp";
import { BsArrowDownShort } from "react-icons/bs";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <>
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
