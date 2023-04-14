/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownFill } from "react-icons/ri";

export default function Navbar(): JSX.Element {
  const [show, setShow] = useState(false);

  function searchHandler(e: any): void {
    e.preventDefault();
    console.log(e.target.search.value);
  }
  return (
    <div className="text-white bg-[#86A1AC] px-[20px] pt-[64px] flex justify-between pb-[20px]">
      <div>Dashboard</div>
      <div className="flex">
        <form className="relative w-[500px] me-4" onSubmit={searchHandler}>
          <input
            type="text"
            name="search"
            className="w-full border-b placeholder-white bg-[#86A1AC] text-white text-md"
            placeholder="search"
          />
          <CiSearch className="absolute right-0 top-0 w-[25px] h-[25px]" />
        </form>
        <div className="relative">
          <button onClick={() => setShow(!show)} className="flex">
            <picture>
              <img
                className="rounded-[50%] h-[25px] object-cover w-[25px]"
                src="https://i.guim.co.uk/img/media/bc12099e16c5e0a7ed7b1e63687dac6dd71ff13b/305_331_2800_1680/master/2800.jpg?width=620&quality=45&dpr=2&s=none"
                alt="..."
              />
            </picture>
            <RiArrowDropDownFill className="w-6 h-6" />
          </button>
          {show && (
            <ul className="absolute bg-red-400 left-[-20px] w-[50px]">
              <li>a</li>
              <li>a</li>
              <li>a</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
