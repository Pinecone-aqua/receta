import { useOthers } from "../../context/OthersContext";
import { CollectionType } from "../../util/Types";
import React, { useEffect, useState } from "react";
import { RxDoubleArrowDown } from "react-icons/rx";

export default function Collection({
  collections,
}: {
  collections: CollectionType[];
}): JSX.Element {
  const { setActiveCollectionBtn, activeCollectionBtn } = useOthers();
  const [silder, setSlider] = useState(1);
  useEffect(() => {
    localStorage.getItem("currentCollection")
      ? setActiveCollectionBtn(localStorage.getItem("currentCollection"))
      : setActiveCollectionBtn("Difficulty");
  }, []);

  return (
    <div className={`slider${silder}`}>
      <div className="Collection Container relative">
        <div className="w-[50%] relative Col-section-left h-full">
          <div className="Collection-div">
            <h1 className="text-[48px] text-[#fff] font-medium Collection-title">
              {activeCollectionBtn && activeCollectionBtn}
            </h1>
            <p className="text-[#fff] Collection-text">
              The origins of the word `cocktail` have been debated . The first
              written mention of `cocktail` as a beverage appeared in The
              Farmers Cabinet, 1803 in the United States. The first definition
              of a cocktail as an alcoholic beverage appeared three years later
              in The Balance and Columbian Repository May 13, 1806
            </p>
            <div className={`gap-[12px] flex flex-wrap `}>
              {collections.map((collection, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveCollectionBtn(collection.name),
                      localStorage.setItem(
                        "currentCollection",
                        collection.name
                      );
                    setSlider(index + 1);
                    localStorage.removeItem("category");
                  }}
                  className={
                    activeCollectionBtn === collection.name
                      ? `py-[6px] px-[16px] text-[#1e1e1e] bg-[#fff] border-[1px] border-[#fff] rounded-[50px] duration-300 z-10`
                      : `py-[6px] px-[16px] text-[#fff] border-[1px] border-[#fff] rounded-[50px] z-10`
                  }
                >
                  {collection.name}
                </button>
              ))}
            </div>
          </div>
          <div className="Collection-arrow absolute rounded-[50%] bottom-[-26px] right-[-26px] bg-white">
            <RxDoubleArrowDown className="text-black animate-pulse mx-auto p-[12px] w-[48px] h-[48px] rounded-[50%]" />
          </div>
        </div>

        <div className="w-[50%] Col-section-right">
          {collections.map(
            (collection, index) =>
              activeCollectionBtn === collection.name && (
                <img
                  key={index}
                  className="Col-right-image"
                  src={collection.image_url}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}
