/* eslint-disable react-hooks/exhaustive-deps */
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function Layout({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const router = useRouter();
  useEffect(() => {
    console.log("router: ", router);

    if (router.query.token) {
      console.log("router token: ", router.query.token);
      Cookies.set("token", `${router.query.token}`);
      router.push("../");
    }
  }, [router]);

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
