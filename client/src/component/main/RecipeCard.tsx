import { RecipesType } from "@/util/Types";
import { useRouter } from "next/router";

export default function RecipeCard(props: {
  recipe: RecipesType;
}): JSX.Element {
  const { recipe } = props;
  const router = useRouter();
  return (
    <div
      className={`min-w-[180px] max-w-[280px]  bg-[#FFFBF1] text-[#1E1E1E]  cursor-pointer rounded-sm overflow-hidden`}
      onClick={() => {
        router.push(`/recipe/${recipe._id}`);
      }}
    >
      <picture>
        <img
          src={`${recipe.image_url}`}
          className="w-full h-[83%] object-cover"
          alt="image"
        />
      </picture>
      <div className="flex-col text-black text-center">
        <p className="text-xs text-red-500 font-medium mt-2">
          {recipe.categories_id.map((cate: any) => cate.name)}
        </p>
        <p className={`font-bold text-currentColor`}>{recipe.name}</p>
      </div>
    </div>
  );
}
