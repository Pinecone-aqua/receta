import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import { useFollowPointer } from "./main/mousePointer/use-follow-pointer";
import { useRef } from "react";
// import { motion } from "framer-motion";
import React from "react";

export default function Layout({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  return (
    <>
      <Head>
        <title key="title">RECETA.</title>
      </Head>
      <div className="bg-[#ffffff] text-black">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
      {/* <motion.div
        ref={ref}
        className="box"
        animate={{ x, y }}
        transition={{
          type: "tween",
          damping: 100,
          stiffness: 5000,
          restDelta: 1,
        }}
      /> */}
    </>
  );
}
