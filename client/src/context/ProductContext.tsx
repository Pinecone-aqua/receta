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
  const [activePage, setActivePage] = useState<string | null>("Main");
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
      value={{ recipes, activeBtn,activePage,setActivePage setActiveBtn, categories, setRecipes }}
    >
      {children}
    </productContext.Provider>
  );
}
