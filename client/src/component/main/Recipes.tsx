import RecipeCard from "./RecipeCard";
import { BsArrowDownShort } from "react-icons/bs";
import { useProduct } from "@/context/ProductContext";
import axios from "axios";

export default function Recipes(): JSX.Element {
  const { recipes, activeBtn, setRecipes } = useProduct();

  function ReadMore() {
    axios
      .get(
        `http://localhost:3003/recipes/filter?name=${activeBtn}&limit=${
          recipes.length + 8
        }`
      )
      .then(
        (res) => res.data.length > 0 && setRecipes([...recipes, ...res.data])
      );
  }

  return (
    <div className="py-[10px]">
      <div className="flex flex-wrap gap-[5%] place-content-center w-[90%] mx-auto px-[30px]">
        {recipes.map((recipe, index) => (
          <RecipeCard recipe={recipe} key={index} />
        ))}
      </div>
      <div className="place-content-center flex my-10" onClick={ReadMore}>
        <div className="text-white cursor-pointer">
          <BsArrowDownShort className="animate-bounce mx-auto w-[45px] h-[45px] border rounded-[50%]" />
          <p className="text-[12px]">Цааш үзэх</p>
        </div>
      </div>
    </div>
  );
}
