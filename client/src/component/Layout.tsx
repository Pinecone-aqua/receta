import Navbar from "./Navbar";
import Footer from "./Footer";
import { useProduct } from "@/context/ProductContext";
import Head from "next/head";
import { ReactNode } from "react";
<<<<<<< HEAD
import SideBar, { Pages } from "./SideBar";
=======
>>>>>>> 85f4d59 (added currentcolor)

export default function Layout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const { activeBtn, activePage } = useProduct();

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
        <div className={`flex ps-[5%] mx-auto min-h-[85vh] bg-currentColor`}>
          <SideBar />
          {Pages.map((page) => page.name == activePage && page.subPage)}
        </div>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
