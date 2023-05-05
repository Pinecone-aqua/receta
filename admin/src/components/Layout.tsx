import Navbar from "./Navbar";
import SideBar from "./SideBar";

export default function Layout({ children }: { children: JSX.Element }) {
  //logged in bainyy, baihgui bol /login user
  return (
    <div className="flex">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossOrigin="anonymous"
      />
      <SideBar />
      <div className="w-full">
        <Navbar />
        <main className="bg-[#FFFBF1] min-h-[86vh]">{children}</main>
      </div>
    </div>
  );
}
