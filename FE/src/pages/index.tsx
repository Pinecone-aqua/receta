import Navbar from "@/component/Navbar";

export default function Home(): JSX.Element {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white h-[35vh] pt-[120px] text-center text-3xl">
        COMING SOON
      </div>
    </div>
  );
}
