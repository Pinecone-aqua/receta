import Header from "@/component/Header";
// import ParallaxText from "@/component/main/ParalloxText";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RiCloseFill } from "react-icons/ri";
import { Section } from "@/component/main/motionScroll/MotionScroll";
import { NewsType } from "@/util/Types";
import { GetStaticProps } from "next";
import axios from "axios";
import Image from "next/image";

export default function Shop({
  newsData,
}: {
  newsData: NewsType[];
}): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedData, setSelectedData] = useState<any>(null);

  // const imageLoader = ({
  //   src,
  //   width,
  //   quality,
  // }: {
  //   src: string;
  //   width: number;
  //   quality: number;
  // }) => {
  //   return `https://res.cloudinary.com/${src}?w=${width}&q=${quality || 20}`;
  // };
  return (
    <>
      <div className={``} onClick={() => selectedData && setSelectedData(null)}>
        <div className={selectedData ? `opacity-[0.1]` : ""}>
          <Header />
        </div>
        <Section>
          <div className="Container flex flex-wrap card-container relative">
            {newsData.map((item: NewsType, index: number) => (
              <motion.div
                layoutId={item._id}
                key={index}
                onClick={() => !selectedData && setSelectedData(item)}
                className={selectedData ? `card disable` : `card active`}
              >
                <motion.div>
                  <Image
                    className="motion-card-image rounded-md"
                    src={item.image_url}
                    fill={true}
                    alt={`${item.name} image`}
                  />
                </motion.div>
                <div className="flex flex-col justify-between h-full p-4">
                  <motion.h2 className="p-2 font-bold text-[18px]">
                    {item.category}
                  </motion.h2>
                  <motion.h5 className="p-2 text-lg font-bold text-[18px]">
                    {item.title}
                  </motion.h5>
                </div>
              </motion.div>
            ))}
            <AnimatePresence>
              {selectedData && (
                <motion.div
                  layoutId={selectedData.id}
                  className={`selected-card Container`}
                >
                  <motion.h5>{selectedData.category}</motion.h5>
                  <motion.h2>{selectedData.title}</motion.h2>
                  <motion.button onClick={() => setSelectedData(null)}>
                    <RiCloseFill className="w-[30px] h-[30px] p-1 rounded-[25px]   absolute right-6 top-7" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Section>
      </div>
    </>
  );
}

interface Props {
  newsData: NewsType[];
}
export const getStaticProps: GetStaticProps<Props> = async () => {
  const newsData = await axios
    .get(`http://localhost:3003/news/all`)
    .then((res) => res.data);

  return {
    props: {
      newsData: newsData,
    },
  };
};
