import { useOthers } from "../../context/OthersContext";
import { CollectionType } from "../../util/Types";
import React, { useEffect } from "react";
import { BsArrowDownShort } from "react-icons/bs";
import { Section } from "./motionScroll/MotionScroll";

export default function Collection({
  collections,
}: {
  collections: CollectionType[];
}): JSX.Element {
  const { setActiveCollectionBtn, activeCollectionBtn } = useOthers();
  useEffect(() => {
    localStorage.getItem("currentCollection")
      ? setActiveCollectionBtn(localStorage.getItem("currentCollection"))
      : setActiveCollectionBtn("Difficulty");
  }, []);

  return (
    <div className="Collection Container">
      <div className="w-[50%] relative Col-section-left">
        <div className="Collection-div">
          <h1 className="text-[48px] font-medium">
            {activeCollectionBtn && activeCollectionBtn}
          </h1>
          <p className="text-[#8a8a8a]">
            The origins of the word "cocktail" have been debated . The first
            written mention of "cocktail" as a beverage appeared in The Farmers
            Cabinet, 1803 in the United States. The first definition of a
            cocktail as an alcoholic beverage appeared three years later in The
            Balance and Columbian Repository May 13, 1806
          </p>
          <div className="gap-[12px] flex flex-wrap">
            {collections.map((collection, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveCollectionBtn(collection.name),
                    localStorage.setItem("currentCollection", collection.name);
                  localStorage.removeItem("category");
                }}
                className={
                  activeCollectionBtn === collection.name
                    ? "py-[6px] px-[16px] text-white bg-[#1e1e1e] border-[1px] border-[#1e1e1e] rounded-[50px] duration-300 z-10"
                    : `py-[6px] px-[16px] text-[#1e1e1e] border-[1px] border-[#1e1e1e] rounded-[50px] z-10`
                }
              >
                {collection.name}
              </button>
            ))}
          </div>
        </div>
        <div className="Collection-arrow absolute rounded-[50%] bottom-[-26px] right-[-26px] bg-white">
          <BsArrowDownShort className="text-black mx-auto p-[12px] w-[48px] h-[48px] border-[0.5px] border-black rounded-[50%]" />
        </div>
      </div>

      <div className="w-[50%] Col-section-right">
        {collections.map(
          (collection, index) =>
            activeCollectionBtn === collection.name && (
              <picture key={index}>
                <img
                  key={index}
                  className="Col-right-image"
                  src={collection.image_url}
                />
              </picture>
            )
        )}
      </div>
    </div>
  );
}
