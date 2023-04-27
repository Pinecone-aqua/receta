import RecipeCard from "./RecipeCard";
import { BsArrowDownShort } from "react-icons/bs";
import { useProduct } from "@/context/ProductContext";

interface RecipesType {
  bgColor: string;
  textColor: string;
}

export default function Recipes({
  bgColor,
  textColor,
}: RecipesType): JSX.Element {
  const { recipes } = useProduct();

  return (
    <div>
      <div className="flex flex-wrap gap-[4%] place-content-center mx-auto px-[30px]">
        {recipes?.map((recipe, index) => (
          <RecipeCard
            recipe={recipe}
            key={index}
            bgColor={bgColor}
            textColor={textColor}
          />
        ))}
      </div>
    </div>
  );
}
