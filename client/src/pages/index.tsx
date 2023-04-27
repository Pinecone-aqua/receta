import React from "react";
import Layout from "@/component/Layout";
import Recipes from "@/component/sub/Recipes";
import Membership from "@/component/sub/Membership";
import Popular from "@/component/sub/Popular";
import Categories from "@/component/sub/Categories";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <>
        <div className="bg-[#1E1E1E]">
          <Categories />
          <Recipes />
          <div className="bg-[url(/bodyBG.png)] bg-cover flex flex-col min-h-[200vh] justify-between">
            <div className="flex flex-wrap justify-around container mx-auto gap-5 m-40">
              <Membership />
              <Membership />
            </div>
            <Popular />
          </div>
        </div>
        <div className="bg-[url(/help.png)] bg-cover h-[400px]">
          <h5>a</h5>
          <button>a</button>
        </div>
      </>
    </Layout>
  );
}
