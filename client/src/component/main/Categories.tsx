import { useProduct } from "@/context/ProductContext";
import { CategoriesType } from "@/util/Types";
import CategoryBtn from "./CategoryBtn";

export default function Categories(): JSX.Element {
  const { categories } = useProduct();

  return (
    <>
      <div className="p-[30px] place-content-center flex gap-5 flex-wrap">
        {categories.map((category: CategoriesType, index) => (
          <CategoryBtn key={index} category={category.name} class={false} />
        ))}
      </div>
    </>
  );
}
