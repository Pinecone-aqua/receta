import { RecipesType } from "@/util/Types";
import { useRouter } from "next/router";

export default function RecipeCard(props: {
  recipe: RecipesType;
}): JSX.Element {
  const { recipe } = props;
  const router = useRouter();
  console.log(recipe);
  return (
    <div
      className="min-w-[180px] w-[17%] max-h-[340px] bg-white cursor-pointer"
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
        <p className="text-xs text-red-500 font-medium mt-2">Gin</p>
        <p className="font-bold">{recipe.name}</p>
      </div>
    </div>
  );
}
