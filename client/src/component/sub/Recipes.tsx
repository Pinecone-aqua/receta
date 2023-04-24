import RecipeCard from "./RecipeCard";
import { BsArrowDownShort } from "react-icons/bs";
import { useRecipe } from "@/context/RecipeContext";

export default function Recipes(): JSX.Element {
  const { recipes } = useRecipe();
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
