import { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";

export default function Popular(): JSX.Element {
  const [EasyRecipe, setEasyRecipe] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3003/recipes/filter?name=difficulty&limit=8`)
      .then((res) => setEasyRecipe(res.data));
  }, []);
  return (
    <div className=" bg-[#FFFBF1]">
      <h2 className="container mx-auto text-3xl font-bold text-[#124822] py-[2%]">
        Popular and easy to learn cocktails
      </h2>
      <div className="flex gap-[5%]  place-content-center w-[90%] mx-auto p-[30px]">
        {EasyRecipe.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
