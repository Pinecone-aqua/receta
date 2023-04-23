import { CategoriesType } from "@/util/Types";
import { useEffect, useState } from "react";
import CategoryBtn from "./CategoryBtn";

export default function Categories(props: {
  categories: CategoriesType[];
}): JSX.Element {
  const { categories } = props;
  const [collection, setCollection] = useState<string | null>();

  useEffect(() => {
    setCollection(localStorage.getItem("currentPage"));
  }, []);

  console.log(collection);
  return (
    <>
      <div className="p-[30px] place-content-center flex gap-5 flex-wrap">
        {categories.map(
          (category: CategoriesType, index) =>
            category.collection_id.name == collection && (
              <CategoryBtn
                key={index}
                category={category.name}
                class={`inactive`}
              />
            )
        )}
      </div>
    </>
  );
}
