import { useRouter } from "next/router";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownFill } from "react-icons/ri";
import { useOthers } from "../context/OthersContext";

export default function Navbar(): JSX.Element {
  const { activePage, setActivePage } = useOthers();
  const router = useRouter();

  return (
    <div className="text-white my-[50px] p-[16px] flex justify-between rounded-md border-[0.2px]">
      <div className="text-[teal]">{activePage && activePage}</div>
      <div className="flex">
        {/* <CiSearch
          className=" w-[25px] h-[25px] text-[#454ADE] me-[20px]"
          onClick={() => {
            router.push("../Search");
            localStorage.removeItem("page");
            setActivePage(null);
          }}
        /> */}
        <picture>
          <img
            className="rounded-[50%] h-[25px] object-cover w-[25px]"
            src="https://i.guim.co.uk/img/media/bc12099e16c5e0a7ed7b1e63687dac6dd71ff13b/305_331_2800_1680/master/2800.jpg?width=620&quality=45&dpr=2&s=none"
            alt="..."
          />
        </picture>
        <RiArrowDropDownFill className="w-6 h-6 cursor-po" />
      </div>
    </div>
  );
}
