import { RecipesType } from "@/util/Types";
import { useRouter } from "next/router";

export default function RecipeCard(props: {
  recipe: RecipesType;
  bgColor: string;
  textColor: string;
}): JSX.Element {
  const { recipe, bgColor, textColor } = props;
  const router = useRouter();

  return (
    <div
      className={`min-w-[180px] w-[17%] max-h-[340px] bg-[${bgColor}] cursor-pointer`}
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
        <p className={`font-bold text-[${textColor}]`}>{recipe.name}</p>
      </div>
    </div>
  );
}
