import RecipeCard from "./RecipeCard";
import { BsArrowDownShort } from "react-icons/bs";

export default function Recipes(): JSX.Element {
  return (
    <div className="py-[10px]">
      {" "}
      <div className="flex flex-wrap gap-[5%] place-content-center w-[95%] mx-auto px-[30px]">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
      <div className="place-content-center flex">
        <div className="text-white cursor-pointer">
          <BsArrowDownShort className="mx-auto w-[45px] h-[45px] border rounded-[50%]" />
          <p className="text-[12px]">Цааш үзэх</p>
        </div>
      </div>
    </div>
  );
}
