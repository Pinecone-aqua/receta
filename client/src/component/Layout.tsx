import Navbar from "./Navbar";
import Footer from "./Footer";
import { useProduct } from "@/context/ProductContext";
import Head from "next/head";
import { ReactNode } from "react";

export default function Layout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const { activeBtn } = useProduct();

  function bgHandler() {
    if (activeBtn == "difficulty") {
      // localStorage.setItem("currentColor", "#124822");
      return "bg-[#267F40] text-white scroll-smooth duration-1000";
    } else if (activeBtn == "strong") {
      // localStorage.setItem("currentColor", "#790C0C");
      return "bg-[#D0384C] text-white scroll-smooth duration-1000";
    } else if (activeBtn == "sweet") {
      // localStorage.setItem("currentColor", "#B63122");
      return "bg-[#FFFBF1] scroll-smooth duration-1000 text-black";
    } else {
      // localStorage.setItem("currentColor", "#054B68");
      return "bg-[#86A1AC] text-white scroll-smooth duration-1000";
    }
  }

  return (
    <div>
      <Head>
        <title key="title">RECETA.</title>
      </Head>
      <div className={bgHandler()}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
