import {
  CategoriesType,
  PropType,
  RecipesType,
  ProductContextType,
} from "@/util/Types";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const productContext = createContext<ProductContextType>(
  {} as ProductContextType
);
//custom hook
export const useProduct = () => useContext(productContext);

export default function ProductProvider({ children }: PropType) {
  const [activeBtn, setActiveBtn] = useState<string | null>("difficulty");
  const [recipes, setRecipes] = useState<RecipesType[]>([]);
  const [categories, setCategories] = useState<CategoriesType[]>([]);
  const [currentColor, setCurrentColor] = useState<string | null>("#124822");

  useEffect(() => {
    if (activeBtn === "difficulty") {
      setCurrentColor("#124822");
    } else if (activeBtn === "strong") {
      setCurrentColor("#790C0C");
    } else if (activeBtn === "sweet") {
      setCurrentColor("#B63122");
    } else {
      setCurrentColor("#054B68");
    }
  }, [activeBtn]);

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
      value={{
        recipes,
        activeBtn,
        setActiveBtn,
        currentColor,
        categories,
        setRecipes,
      }}
    >
      {children}
    </productContext.Provider>
  );
}
