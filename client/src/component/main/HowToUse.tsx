import { useOthers } from "@/context/OthersContext";
import { useRouter } from "next/router";
import React from "react";

export default function HowToUse(): JSX.Element {
  const router = useRouter();
  const { setActivePage } = useOthers();
  return (
    <div className="HowToUse py-[5rem] text-white">
      <div className="Container flex flex-col gap-7 p-5">
        <h1 className="text-3xl font-semibold">How to use Shaker</h1>
        <p className="HowToUse-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nisi
          dolor omnis explicabo debitis! Saepe, corporis veniam neque eius, aut
          necessitatibus fugiat quia maiores ullam dolorum sit, reiciendis
          voluptates delectus.
        </p>
        <button
          className="py-3 px-[6rem] border me-auto"
          onClick={() => {
            router.push("../news"),
              localStorage.setItem("page", "news"),
              setActivePage("news");
          }}
        >
          read more
        </button>
      </div>
    </div>
  );
}
