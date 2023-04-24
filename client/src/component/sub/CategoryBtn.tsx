import { useProduct } from "@/context/ProductContext";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CategoryBtn(props: {
  category: string;
  class: boolean;
}): JSX.Element {
  const [activeBtn, setActiveBtn] = useState<boolean>(false);
  const { setRecipes } = useProduct();

  useEffect(() => {
    if (activeBtn == true) {
      axios
        .get(
          `http://localhost:3003/recipes/filter-category?name=${props.category}`
        )
        .then((res) => res.data.length > 1 && setRecipes(res.data));
    } else {
      // setRecipes((prev) =>
      //   prev.filter((recipe) => props.category !== recipe.categories_id.name)
      // );
    }
  }, [activeBtn]);

  return (
    <button
      onClick={() => setActiveBtn(!activeBtn)}
      className={
        props.class !== activeBtn
          ? `p-[5px] px-[20px] rounded-[25px] font-light text-currentColor bg-white border border-1`
          : `p-[5px] px-[20px] rounded-[25px] font-light text-white border border-1`
      }
    >
      {props.category}
    </button>
  );
}
