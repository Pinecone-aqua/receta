import RecipeCard from "./RecipeCard";
import { BsArrowDownShort } from "react-icons/bs";
import axios from "axios";
import { useEffect, useState } from "react";
import { RecipesType } from "@/util/Types";

export default function Recipes(): JSX.Element {
  const [recipes, setRecipes] = useState<RecipesType[] | null>();
  useEffect(() => {
    axios
      .get("http://localhost:3003/recipes/get")
      .then((res) => setRecipes(res.data));
  }, []);

  console.log(recipes);
  return (
    <div className="py-[10px]">
      {" "}
      <div className="flex flex-wrap gap-[5%] place-content-center w-[90%] mx-auto px-[30px]">
        {recipes?.map((recipe, index) => (
          <RecipeCard recipe={recipe} key={index} />
        ))}
      </div>
      <div className="place-content-center flex">
        <div className="text-white cursor-pointer">
          <BsArrowDownShort className="animate-bounce mx-auto w-[45px] h-[45px] border rounded-[50%]" />
          <p className="text-[12px]">Цааш үзэх</p>
        </div>
      </div>
    </div>
  );
}
