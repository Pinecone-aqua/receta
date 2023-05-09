import Header from "@/component/Header";
import ParallaxText from "@/component/main/ParalloxText";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RiCloseFill } from "react-icons/ri";

export default function Shop(): JSX.Element {
  const [selectedData, setSelectedData] = useState<any>(null);
  return (
    <>
      <div className={``} onClick={() => selectedData && setSelectedData(null)}>
        <Header />
        {/* <div className="News-parallox">
        <ParallaxText baseVelocity={-2}>
          <div className="News-parallox-text flex gap-10">
            <p>receta news.</p> <p>receta news.</p> <p>receta news.</p>
          </div>
        </ParallaxText>
      </div> */}
        <div className="Container flex flex-wrap card-container relative">
          {cardData.map((item: any) => (
            <motion.div
              layoutId={item.id}
              onClick={() => !selectedData && setSelectedData(item)}
              className={selectedData ? `card disable` : `card active`}
            >
              <motion.h5>{item.category}</motion.h5>
              <motion.h2>{item.title}</motion.h2>
            </motion.div>
          ))}
          <AnimatePresence>
            {selectedData && (
              <motion.div
                layoutId={selectedData.id}
                className={`selected-card bg-[#${selectedData.bg}]`}
              >
                <motion.h5>{selectedData.category}</motion.h5>
                <motion.h2>{selectedData.title}</motion.h2>
                <motion.button onClick={() => setSelectedData(null)}>
                  <RiCloseFill className="w-[30px] h-[30px] p-1 rounded-[25px] bg-[#eca387] hover:bg-[#eca599]  absolute right-6 top-5" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

const cardData = [
  {
    id: "c",
    category: "Pizza",
    title: "5 Food Apps Delivering the Best of Your City",
  },
  {
    id: "f",
    category: "How to",
    title: "Arrange Your Apple Devices for the Gram",
  },
  {
    id: "a",
    category: "Pedal Power",
    title: "Map Apps for the Superior Mode of Transport",
  },
  {
    id: "g",
    category: "Holidays",
    title: "Our Pick of Apps to Help You Escape From Apps",
  },
  {
    id: "d",
    category: "Photography",
    title: "The Latest Ultra-Specific Photography Editing Apps",
  },
  {
    id: "h",
    category: "They're all the same",
    title: "100 Cupcake Apps for the Cupcake Connoisseur",
  },
  {
    id: "e",
    category: "Cats",
    title: "Yes, They Are Sociopaths",
  },
  {
    id: "b",
    category: "Holidays",
    title: "Seriously the Only Escape is the Stratosphere",
  },
];
