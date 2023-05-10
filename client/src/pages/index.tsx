import React from "react";
import Collection from "../component/main/Collection";
import Categories from "../component/cocktails/Categories";
import Recipes from "../component/cocktails/Recipes";
import Recommend from "../component/main/Recommend";
import { GetStaticProps } from "next";
import { CollectionType, RecipesType, ToolType } from "../util/Types";
import axios from "axios";
import Store from "../component/main/Store";
import ParallaxText from "../component/main/ParalloxText";
import Layout from "../component/Layout";
import { Section } from "../component/main/motionScroll/MotionScroll";
import OurStory from "@/component/main/OurStory";
import HowToUse from "@/component/main/HowToUse";
// import * as dotenv from "dotenv";

// dotenv.config();

export default function Home({
  collections,
  recommend,
  tools,
}: {
  collections: CollectionType[];
  recommend: RecipesType[];
  tools: ToolType[];
}): JSX.Element {
  return (
    <Layout>
      <>
        <Section>
          <div className="border-b-[0.5px] border-[#dadada]">
            <Collection collections={collections} />
          </div>
        </Section>
        <Categories />
        <div className="relative">
          <Recipes />
          <div className="Container absolute bottom-[-40px] w-full h-[50px] border-x-[0.5px] border-[#dadada] left-1/2 transform -translate-x-2/4 -translate-y-1/1" />
        </div>
        <Section>
          <Recommend recommend={recommend} />
        </Section>

        <Section>
          <OurStory />
        </Section>

        <Section>
          <HowToUse />
        </Section>

        <Section>
          <Store tools={tools} />
        </Section>
        <Section>
          <div className="bg-black py-[25px]">
            <ParallaxText baseVelocity={-1.5}>
              <h2 className="pb-[20px] text-[72px] font-bold text me-[20px] cocktail-parallox-text">
                receta. receta. receta.
              </h2>
            </ParallaxText>
            <ParallaxText baseVelocity={1}>
              <h2 className="text-gray-600 text-[50px] text uppercase me-[50px]">
                you try these drinks goodluck
              </h2>
            </ParallaxText>
          </div>
        </Section>
      </>
    </Layout>
  );
}

interface Props {
  collections: RecipesType[];
  recommend: RecipesType[];
  tools: ToolType[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const collections = await axios
    .get(`http://localhost:3003/collections/get`)
    .then((res) => res.data);

  const recommend = await axios
    .get(`http://localhost:3003/recipes/recommend`)
    .then((res) => res.data);

  const tools = await axios
    .get(`http://localhost:3003/tools/get`)
    .then((res) => res.data);

  return {
    props: {
      collections: collections,
      recommend: recommend,
      tools: tools,
    },
  };
};
