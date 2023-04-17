import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Category from "./Category";

export default function Layout({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return (
    <div className="bg-[#267F40]">
      <Navbar />
      <div className="flex">
        <SideBar />
        <Category />
      </div>
      <main>{children}</main>
    </div>
  );
}
