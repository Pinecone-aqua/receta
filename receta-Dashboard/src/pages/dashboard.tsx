import Header from "../components/subcomps/Header";
import Sidebar from "../components/subcomps/Sidebar";
export default function dashboard(): JSX.Element {
  return (
    <div className="w-screen h-full">
      <Header />
      <div className="w-screen h-full">
        <Sidebar />
      </div>
    </div>
  );
}
