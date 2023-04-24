// import axios from "axios";
import { RecipesType } from "@/util/Types";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

interface PropType {
  children: React.ReactNode;
}

interface ContextType {
  recipes: RecipesType[] | null;
  setRecipes: React.Dispatch<React.SetStateAction<RecipesType[]>>;
  activeBtn: string | null;
  setActiveBtn: React.Dispatch<React.SetStateAction<string | null>>;
}
const recipeContext = createContext<ContextType>({} as ContextType);
//custom hook
export const useRecipe = () => useContext(recipeContext);

export default function RecipeProvider({ children }: PropType) {
  const [activeBtn, setActiveBtn] = useState<string | null>("difficulty");
  const [recipes, setRecipes] = useState<RecipesType[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3003/recipes/get")
      .then((res) => setRecipes(res.data));
  }, []);

  useEffect(() => {
    if (localStorage.getItem("currentCollection"))
      setActiveBtn(localStorage.getItem("currentCollection"));
  }, []);

  useEffect(() => {
    // axios.get()
  }, []);

  return (
    <recipeContext.Provider
      value={{ recipes, activeBtn, setActiveBtn, setRecipes }}
    >
      {children}
    </recipeContext.Provider>
  );
}
