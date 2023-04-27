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
      <>
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
