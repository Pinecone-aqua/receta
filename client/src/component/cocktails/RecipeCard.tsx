import { useOthers } from "@/context/OthersContext";
import { CategoriesType, RecipesType } from "@/util/Types";
// import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

export default function RecipeCard(props: {
  recipe: RecipesType;
}): JSX.Element {
  const { recipe } = props;
  const router = useRouter();

  const { setActivePage } = useOthers();
  return (
    <div
      className={`relative w-[256px] cursor-pointer h-[320px] bg-gradient-to-t from-black to-gray-500 recipe`}
      onClick={() => {
        router.push(`../cocktail/${recipe._id}`);
        localStorage.setItem("page", "");
        setActivePage("");
      }}
    >
      <div>
        <img
          src={`${recipe.image_url}`}
          className="recipeCard-image"
          alt="image"
        />
      </div>
      <div className="absolute w-[250px] text-center  bottom-[10px] left-1/2 transform -translate-x-2/4 -translate-y-1/1">
        <p className="recipeCard-text">
          {recipe.categories_id.map((cate: CategoriesType) => cate.name)}
        </p>
        <p className="recipeCard-text">{recipe.name}</p>
      </div>
    </div>
  );
}
