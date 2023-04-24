import { CategoriesType } from "@/util/Types";
import { useEffect, useState } from "react";
import CategoryBtn from "./CategoryBtn";

export default function Categories(props: {
  categories: CategoriesType[];
}): JSX.Element {
  const { categories } = props;
  const [category, setCategory] = useState<CategoriesType[]>([]);

  useEffect(() => {
    if (localStorage.getItem("currentPage")) {
      setCategory(
        categories.filter(
          (category: CategoriesType) =>
            category.collection_id.name == localStorage.getItem("currentPage")
        )
      );
    } else {
      setCategory(
        categories.filter(
          (category: CategoriesType) =>
            category.collection_id.name == "difficulty"
        )
      );
    }
  }, [categories]);

  return (
    <>
      <div className="p-[30px] place-content-center flex gap-5 flex-wrap">
        {category.map((category: CategoriesType, index) => (
          <CategoryBtn
            key={index}
            category={category.name}
            class={`inactive`}
          />
        ))}
      </div>
    </>
  );
}
