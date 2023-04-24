// import axios from "axios";
import { CategoriesType, RecipesType } from "@/util/Types";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

interface PropType {
  children: React.ReactNode;
}

interface ContextType {
  recipes: RecipesType[] | null;
  categories: CategoriesType[];
  activeBtn: string | null;
  setActiveBtn: React.Dispatch<React.SetStateAction<string | null>>;
  setRecipes: React.Dispatch<React.SetStateAction<RecipesType[]>>;
}
const productContext = createContext<ContextType>({} as ContextType);
//custom hook
export const useProduct = () => useContext(productContext);

export default function ProductProvider({ children }: PropType) {
  const [activeBtn, setActiveBtn] = useState<string | null>("difficulty");
  const [recipes, setRecipes] = useState<RecipesType[]>([]);
  const [categories, setCategories] = useState<CategoriesType[]>([]);

  useEffect(() => {
    if (localStorage.getItem("currentCollection"))
      setActiveBtn(localStorage.getItem("currentCollection"));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3003/recipes/filter?name=${activeBtn}`)
      .then((res) => setRecipes(res.data));

    axios
      .get(`http://localhost:3003/categories/filter?name=${activeBtn}`)
      .then((res) => setCategories(res.data));
  }, [activeBtn]);

  return (
    <productContext.Provider
      value={{ recipes, activeBtn, setActiveBtn, categories, setRecipes }}
    >
      {children}
    </productContext.Provider>
  );
}
