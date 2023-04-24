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
      <main>{children}</main>
      <Footer />
    </div>
  );
}
