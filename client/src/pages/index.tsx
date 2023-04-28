import React from "react";
import Layout from "@/component/Layout";
import Recipes from "@/component/main/Recipes";
import Membership from "@/component/main/Membership";
import Popular from "@/component/main/Popular";
import Categories from "@/component/main/Categories";
import OurStory from "@/component/main/OurStory";
import NeedHelp from "@/component/main/NeedHelp";
import Motion from "@/component/main/Motion";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <>
        <div className="bg-[#1E1E1E] ">
          <Categories />
          <Recipes />

          <div className="bg-[url(/bgArrow.png)] bg-cover">
            <Motion />
            <Membership />
          </div>
        </div>
        <NeedHelp />
        <Popular />
      </>
    </Layout>
  );
}
