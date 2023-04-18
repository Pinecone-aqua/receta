import Navbar from "./Navbar";
import SideBar from "./sub/SideBar";
import Collection from "./sub/Collection";
import Footer from "./Footer";
import { useState } from "react";

export default function Layout({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const [activeBtn, setActiveBtn] = useState<string>("difficulty");

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
    <div className={bgHandler()}>
      <Navbar />
      <div className="flex container mx-auto min-h-[85vh]">
        <SideBar />
        <Collection setActiveBtn={setActiveBtn} activeBtn={activeBtn} />
      </div>
      <main className="bg-[#1E1E1E] border border-[1px] border-[#05445F]">
        {children}
        <Footer />
      </main>
    </div>
  );
}
