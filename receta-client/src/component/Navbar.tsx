import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownFill } from "react-icons/ri";

export default function Navbar(): JSX.Element {
  const [show, setShow] = useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function searchHandler(e: any): void {
    e.preventDefault();
    console.log(e.target.search.value);
  }
  return (
    <header className="">
      <div className="text-white  container mx-auto flex justify-between pt-8">
        <h1 className="text-[#FFFBF1] text-[32px] font-bold cursor-pointer">
          receta.
        </h1>
        <div className="flex">
          <form className="relative w-[500px] me-4" onSubmit={searchHandler}>
            <input
              type="text"
              name="search"
              className="w-full border-white border-s-0 border-l-0 border-t-0 border-r-0 border-b-1 bg-[#267F40] placeholder-white text-white text-md"
              placeholder="search"
            />
            <CiSearch className="absolute right-0 top-2 w-[25px] h-[25px]" />
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
    </header>
  );
}

{
  /* <ul className="list-none flex  justify-between container mx-auto p-1">
        <li>receta.</li>
        <li>search</li>
        <Link href="../login">login</Link>
      </ul> */
}
