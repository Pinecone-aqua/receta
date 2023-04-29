import Navbar from "./Navbar";
import Footer from "./Footer";
import { useProduct } from "@/context/ProductContext";
import Head from "next/head";
import SideBar, { Pages } from "./SideBar";

export default function Layout({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const { activeBtn, activePage } = useProduct();

  function bgHandler() {
    if (activeBtn == "difficulty") {
      return "bg-[#267F40] text-white duration-1000";
    } else if (activeBtn == "strong") {
      return "bg-[#D0384C] text-white duration-1000";
    } else if (activeBtn == "sweet") {
      return "bg-[#FFFBF1] duration-1000 text-black";
    } else {
      return "bg-[#86A1AC] text-white  duration-1000";
    }
  }

  return (
    <div>
      <Head>
        <title key="title">RECETA.</title>
      </Head>
      <div className={bgHandler()}>
        <div className="motion-container y mandatory-scroll-snapping ">
          <div className="motion-div">
            <Navbar />
            <div
              className={`flex ps-[5%] mx-auto min-h-[85vh] bg-currentColor`}
            >
              <SideBar />
              {Pages.map((page) => page.name == activePage && page.subPage)}
            </div>
          </div>

          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
