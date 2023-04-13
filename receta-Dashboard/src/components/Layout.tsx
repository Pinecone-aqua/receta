import Navbar from "./Navbar";
import SideBar from "./SideBar";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Navbar />
      <div className="flex">
        {" "}
        <SideBar />
        <main className="rounded-md m-3 w-full dark:bg-[rgb(34,46,60)]">
          {children}
        </main>
      </div>
    </>
  );
}
