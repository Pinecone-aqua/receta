import RecipeCard from "./RecipeCard";
import { BsArrowDownShort } from "react-icons/bs";
import { useOthers } from "../../context/OthersContext";
import axios from "axios";
import { useCocktail } from "../../context/CocktailContext";
import { Tooltip } from "@chakra-ui/react";
import React, { Suspense } from "react";

export default function Recipes(): JSX.Element {
  const { activeCollectionBtn, activeCategoryBtn } = useOthers();
  const { recipes, setRecipes } = useCocktail();

  function ReadMore() {
    localStorage.getItem("category")
      ? axios
          .get(
            `http://localhost:3003/recipes/filter-category?name=${activeCategoryBtn}&limit=${
              recipes.length + 8
            }`
          )
          .then(
            (res) =>
              res.data.length > 0 && setRecipes([...recipes, ...res.data])
          )
      : axios
          .get(
            `http://localhost:3003/recipes/filter?name=${activeCollectionBtn}&limit=${
              recipes.length + 8
            }`
          )
          .then(
            (res) =>
              res.data.length > 0 && setRecipes([...recipes, ...res.data])
          );
  }

  return (
    <div className="relative mb-[88px]">
      <div className="flex flex-wrap  border-x-[0.5px] border-[#dadada] Container gap-[16px] pb-[48px] place-content-center mx-auto">
        <Suspense fallback={<p className="text-blac text-[24px]">Loading</p>}>
          {recipes.map((recipe, index) => (
            <RecipeCard recipe={recipe} key={index} />
          ))}
        </Suspense>
      </div>
      <Tooltip label="empty" aria-label="A tooltip">
        <div
          className="place-content-center cursor-pointer flex my-10 border-b-[0.5px] border-[#dadada] Container"
          onClick={ReadMore}
        >
          <div className="text-white absolute bottom-[-40px]">
            <BsArrowDownShort className="animate-bounce text-black bg-white mx-auto p-[8px] w-[48px] h-[48px] border-[0.5px] border-black rounded-[50%]" />
            <p className="text-[12px] text-black">Цааш үзэх</p>
          </div>
        </div>
      </Tooltip>
    </div>
  );
}
