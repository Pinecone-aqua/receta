/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownFill } from "react-icons/ri";
import { useOthers } from "../context/OthersContext";

export default function Navbar(): JSX.Element {
  const [show, setShow] = useState(false);
  const { activePage } = useOthers();

  function searchHandler(e: any): void {
    e.preventDefault();
    console.log(e.target.search.value);
  }
  return (
    <div className="text-white my-[50px] p-[16px] flex justify-between rounded-md">
      <div className="text-[#454ADE]">{activePage && activePage}</div>
      <div className="flex">
        <form className="relative min-w-[300px] me-4" onSubmit={searchHandler}>
          <input
            type="text"
            name="search"
            className="w-full border-b placeholder-[#454ADE] bg-[#fff] text-[#454ADE] text-md"
            placeholder="search"
          />
          <CiSearch className="absolute right-0 top-0 w-[25px] h-[25px] text-[#454ADE]" />
        </form>
        <picture>
          <img
            className="rounded-[50%] h-[25px] object-cover w-[25px]"
            src="https://i.guim.co.uk/img/media/bc12099e16c5e0a7ed7b1e63687dac6dd71ff13b/305_331_2800_1680/master/2800.jpg?width=620&quality=45&dpr=2&s=none"
            alt="..."
          />
        </picture>
        <RiArrowDropDownFill className="w-6 h-6" />
      </div>
    </div>
  );
}
