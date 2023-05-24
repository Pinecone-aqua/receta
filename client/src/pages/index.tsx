import React from "react";
import Collection from "../component/main/Collection";
import Categories from "../component/cocktails/Categories";
import Recipes from "../component/cocktails/Recipes";
import { GetStaticProps } from "next";
import { CollectionType, NewsType, RecipesType } from "../util/Types";
import axios from "axios";
import ParallaxText from "../component/main/ParalloxText";
import Layout from "../component/Layout";
import { Section } from "../component/motionScroll/MotionScroll";
import About2 from "../component/main/About";
import GetStartted from "../component/main/GetStarted";
import Recommend from "../component/main/Recommend";
import News from "../component/main/News";

export default function Home({
  collections,
  recommend,
  news,
}: {
  collections: CollectionType[];
  recommend: RecipesType[];
  news: NewsType[];
}): JSX.Element {
  return (
    <Layout>
      <div className="overflow-hidden">
        <Section>
          <div className="border-b-[0.5px] border-[#dadada] ">
            <Collection collections={collections} />
          </div>
        </Section>
        <Categories />
        <div className="relative ">
          <Recipes />
          <div className="Container absolute bottom-[-88px] w-full h-[88px] border-x-[0.5px] border-[#dadada] left-1/2 transform -translate-x-2/4 -translate-y-1/1" />
        </div>

        <div className="bg-[#000]">
          <About2 />
          <GetStartted />
          {/* <OurStory /> */}
          <News news={news} />
          <Recommend recommend={recommend} />
        </div>

        <Section>
          <div className="bg-[#5d5d5d] py-[25px]">
            <ParallaxText baseVelocity={-1.5}>
              <h2 className="pb-[20px] text-[62px] font-bold text-[#f4f4f4] me-[20px] cocktail-parallox-text">
                receta. receta. receta.
              </h2>
            </ParallaxText>
            <ParallaxText baseVelocity={1}>
              <h2 className="text-gray-300 text-[42px] uppercase me-[50px] cocktail-parallox-text-sub">
                you try these drinks goodluck
              </h2>
            </ParallaxText>
          </div>
        </Section>
      </div>
    </Layout>
  );
}

interface Props {
  collections: RecipesType[];
  recommend: RecipesType[];
  news: NewsType[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const collections = await axios
    .get(`${process.env.NEXT_PUBLIC_PUBLIC_SERVER}/collections/get`)
    .then((res) => res.data);

  const recommend = await axios
    .get(`${process.env.NEXT_PUBLIC_PUBLIC_SERVER}/recipes/recommend`)
    .then((res) => res.data);

  const news = await axios
    .get(`${process.env.NEXT_PUBLIC_PUBLIC_SERVER}/news/all`)
    .then((res) => res.data);

  return {
    props: {
      collections,
      recommend,
      news,
    },
  };
};
