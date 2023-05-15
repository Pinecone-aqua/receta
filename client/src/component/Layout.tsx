import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import React from "react";

export default function Layout({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
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
    </>
  );
}
