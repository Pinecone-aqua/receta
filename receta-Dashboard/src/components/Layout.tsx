import Navbar from "./Navbar";
import SideBar from "./SideBar";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full">
        {" "}
        <Navbar />
        <main className="bg-[#FFFBF1] min-h-[86vh]">{children}</main>
      </div>
    </div>
  );
}
