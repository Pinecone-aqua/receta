import Navbar from "./Navbar";
import Footer from "./Footer";
import RecipeProvider, { useProduct } from "@/context/ProductContext";

export default function Layout({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const { activeBtn } = useProduct();

  function bgHandler() {
    if (activeBtn == "difficulty") {
      return "bg-[#267F40] text-white scroll-smooth duration-1000";
    } else if (activeBtn == "strong") {
      return "bg-[#D0384C] text-white scroll-smooth duration-1000";
    } else if (activeBtn == "sweet") {
      return "bg-[#FFFBF1] scroll-smooth duration-1000 text-black";
    } else {
      return "bg-[#86A1AC] text-white scroll-smooth duration-1000";
    }
  }
  return (
    <div className={bgHandler()}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
