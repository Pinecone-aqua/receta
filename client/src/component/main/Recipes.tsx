import RecipeCard from "./RecipeCard";
import { BsArrowDownShort } from "react-icons/bs";
import { useProduct } from "@/context/ProductContext";

export default function Recipes(): JSX.Element {
  const { recipes } = useProduct();

  return (
    <div>
      <div className="flex flex-wrap gap-[4%] place-content-center mx-auto px-[30px]">
        {recipes?.map((recipe, index) => (
          <RecipeCard recipe={recipe} key={index} />
        ))}
      </div>
      <div className="place-content-center flex my-10">
        <div className="text-white cursor-pointer">
          <BsArrowDownShort className="animate-bounce mx-auto w-[45px] h-[45px] border rounded-[50%]" />
          <p className="text-[12px]">Цааш үзэх</p>
        </div>
      </div>
    </div>
  );
}
