import Navbar from "./Navbar";
import Category from "./sub/Category";

export default function Layout(): JSX.Element {
  return (
    <div className="bg-[#267F40]">
      <Navbar />
      <Category />
    </div>
  );
}
