import Link from 'next/link'
// import { useState } from "react"

export default function Sidebar(): JSX.Element {
  // const [current, setCurrent] = useState();

  return (
    <div className="w-72 min-h-screen bg-black pt-44">
      <div className="my-10 flex justify-center">
        <Link href="/category">
          <div
            className="bg-amber-500 hover:bg-orange-500 text-black w-32 h-12 text-lg cursor-pointer flex justify-center items-center rounded font-bold"
          >
            Category
          </div>
        </Link>
      </div>
      <div className="my-10 flex justify-center">
        <Link href="/collection">
          <div
            className="bg-amber-500 hover:bg-orange-500 text-black w-32 h-12 text-lg cursor-pointer flex justify-center items-center rounded font-bold"
          >
            Collection
          </div>
        </Link>
      </div>
      <div className="my-10 flex justify-center">
        <Link href="/comment">
          <div
            className="bg-amber-500 hover:bg-orange-500 text-black w-32 h-12 text-lg cursor-pointer flex justify-center items-center rounded font-bold"
          >
            Comment
          </div>
        </Link>
      </div>
      <div className="my-10 flex justify-center">
        <Link href="/recipe">
          <div
            className="bg-amber-500 hover:bg-orange-500 text-black w-32 h-12 text-lg cursor-pointer flex justify-center items-center rounded font-bold"
          >
            Recipe
          </div>
        </Link>
      </div>
      <div className="my-10 flex justify-center">
        <Link href="/user">
          <div
            className="bg-amber-500 hover:bg-orange-500 text-black w-32 h-12 text-lg cursor-pointer flex justify-center items-center rounded font-bold"
          >
            User
          </div>
        </Link>
      </div>
      <div className="my-10 flex justify-center">
        <Link href="/">
          <div
            className="bg-amber-500 hover:bg-orange-500 text-black w-32 h-12 text-lg cursor-pointer flex justify-center items-center rounded font-bold"
          >
            Logout
          </div>
        </Link>
      </div>
    </div>
  );
}
