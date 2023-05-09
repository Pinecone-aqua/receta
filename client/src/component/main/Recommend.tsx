import { useOthers } from "@/context/OthersContext";
import { RecipesType } from "@/util/Types";
import Link from "next/link";
import { useRef } from "react";
import React from "react";

export default function Recoommend({
  recommend,
}: {
  recommend: RecipesType[];
}): JSX.Element {
  const ref = useRef(null);
  const { setActivePage } = useOthers();

  return (
    <div className="py-[172px] recommend px-[160px] flex flex-col place-content-center gradient bg-black">
      <p className="recommend-title-sub">TOP DRINKS</p>
      <h1 className="recommend-title">We recommend you</h1>
      <ul ref={ref} className="Container pb-[10px] scroll-ul">
        {recommend.map((recipe, index) => (
          <li key={index} className="scroll-li">
            <Link
              href={`../cocktail/${recipe._id}`}
              onClick={() => {
                localStorage.setItem("page", "");
                setActivePage("");
              }}
            >
              <picture>
                <img
                  className="w-full object-cover"
                  src={recipe.image_url}
                  alt={recipe.name}
                />
              </picture>
            </Link>
          </li>
        ))}
      </ul>
      <div className="border py-2 px-[4rem] text-white mx-auto mt-10">
        you try these drinks
      </div>
    </div>
  );
}
