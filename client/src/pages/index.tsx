import { Badge } from "flowbite-react";
import React from "react";
import Layout from "@/component/Layout";
import Recipes from "@/component/sub/Recipes";
import CategoryBtn from "@/component/sub/CategoryBtn";
import Membership from "@/component/sub/Membership";
import Popular from "@/component/sub/Popular";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <div>
        <div className="p-[30px] place-content-center flex gap-5 flex-wrap">
          <CategoryBtn category={`Easy`} class={`active`} />
          <CategoryBtn category={`Intermediate`} class={`inactive`} />
          <CategoryBtn category={`Very easy`} class={`inactive`} />
        </div>
        <Recipes />
        <Membership />
        <Popular />
      </div>
    </Layout>
  );
}
