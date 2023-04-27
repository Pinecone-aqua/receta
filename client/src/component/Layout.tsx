import Navbar from "./Navbar";
import Footer from "./Footer";
import RecipeProvider, { useProduct } from "@/context/ProductContext";
import Head from "next/head";
import SideBar, { Pages } from "./sub/SideBar";
import { Skeleton } from "primereact/skeleton";

export default function Layout({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const { activeBtn, activePage } = useProduct();

  function bgHandler() {
    if (activeBtn == "difficulty") {
      return "bg-[#267F40] scroll-smooth duration-1000";
    } else if (activeBtn == "strong") {
      return "bg-[#D0384C] scroll-smooth duration-1000";
    } else if (activeBtn == "sweet") {
      return "bg-[#86A1AC] scroll-smooth duration-1000";
    } else {
      return "bg-[#1E1E1E] scroll-smooth duration-1000";
    }
  }
  return (
    <div>
      <Head>
        <title key="title">RECETA.</title>
      </Head>
      <div className={bgHandler()}>
        <Navbar />
        <main className="">
          <div
            className={`flex container mx-auto min-h-[85vh] bg-currentColor`}
          >
            <SideBar />
            {Pages.map((page) => activePage === page.name && page.subPage)}
          </div>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
