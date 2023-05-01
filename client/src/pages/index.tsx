import React from "react";
import Layout from "@/component/Layout";
import Recipes from "@/component/main/Recipes";
import Membership from "@/component/main/Membership";
import Popular from "@/component/main/Popular";
import Categories from "@/component/main/Categories";
import OurStory from "@/component/main/OurStory";
import NeedHelp from "@/component/main/NeedHelp";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <div className="bg-[#1E1E1E]">
        <div className="motion-div">
          <Categories />
          <Recipes />
        </div>
        <div>
          <OurStory />
          <Membership />
        </div>
        <div className="motion-div">
          <NeedHelp />
        </div>
        <div className="motion-div">
          <Popular />
        </div>
      </div>
    </Layout>
  );
}
