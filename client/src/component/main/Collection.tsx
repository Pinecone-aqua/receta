import { useOthers } from "../../context/OthersContext";
import { CollectionType } from "../../util/Types";
import React, { useEffect } from "react";
import { BsArrowDownShort } from "react-icons/bs";

export default function Collection({
  collections,
}: {
  collections: CollectionType[];
}): JSX.Element {
  const { setActiveCollectionBtn, activeCollectionBtn } = useOthers();
  let activeIndex = 0;

  useEffect(() => {
    localStorage.getItem("currentCollection")
      ? setActiveCollectionBtn(localStorage.getItem("currentCollection"))
      : setActiveCollectionBtn("Difficulty");
  }, []);

  function sliderHandler() {
    const groups = document.getElementsByClassName("collection-article");
    const nextIndex =
      activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

    const currentGroup: any = document.querySelector(
      `[data-index="${activeIndex}"]`
    );
    const nextGroup: any = document.querySelector(
      `[data-index="${nextIndex}"]`
    );

    currentGroup.dataset.status = "inactive";
    nextGroup.dataset.status = "becoming-active-from-inactive";

    setTimeout(() => {
      nextGroup.dataset.status = "active";
      activeIndex = nextIndex;
    });
  }

  return (
    <div className="collection-container">
      <div
        className="absolute border border-black rounded-full px-4 py-5 right-[15%] top-[100px] cursor-pointer z-10"
        onClick={sliderHandler}
      >
        next
      </div>
      <div className="Collection-arrow absolute rounded-[50%] bottom-[-535px] w-full text-center z-10">
        <BsArrowDownShort className="text-black mx-auto p-[12px] w-[48px] h-[48px] border-[0.5px] border-black rounded-[50%] bg-white" />
      </div>
      {collections.map((collection, index) => (
        <div
          key={index}
          data-index={index}
          data-status={index === 0 ? "active" : "inactive"}
          className={`collection-article slider${index + 1}`}
        >
          <div className="Collection Container">
            <div className="w-[50%] relative Col-section-left">
              <div className="Collection-div text-white">
                <h1 className="text-[60px] font-medium">{collection.name}</h1>
                <p className="">
                  The origins of the word "cocktail" have been debated . The
                  first written mention of "cocktail" as a beverage appeared in
                  The Farmers Cabinet, 1803 in the United States. The first
                  definition of a cocktail as an alcoholic beverage appeared
                  three years later in The Balance and Columbian Repository May
                  13, 1806
                </p>
              </div>
            </div>

            <div className="w-[50%] Col-section-right">
              <picture>
                <img
                  className="Col-right-image z-10"
                  src={collection.image_url}
                />
              </picture>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

{
  /* <div className="gap-[12px] flex flex-wrap">
<button className="py-[6px] px-[16px] text-white bg-[#1e1e1e] border-[1px] border-[#1e1e1e] rounded-[50px] duration-300 z-10">
  {collection.name}
</button>
</div> */
}
