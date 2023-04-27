import { useProduct } from "@/context/ProductContext";
import { RecipesType } from "@/util/Types";
import axios from "axios";
import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

export default function Popular(): JSX.Element {
  const [recipes, setRecipes] = useState<RecipesType[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:3003/recipes/all")
      .then((res) => setRecipes(res.data));
  }, []);
  return (
    <div className="p-5 bg-[#FFFBF1] text-[#1e1e1e]">
      <h2 className="container mx-auto text-3xl mb-5 font-bold">
        Popular and easy to learn cocktails
      </h2>
      <div className="container mx-auto flex flex-wrap justify-between">
        {recipes?.slice(0, 4).map((recipe, index) => (
          <RecipeCard recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
