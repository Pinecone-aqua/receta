import { RecipesType } from "@/util/Types";
import { useRouter } from "next/router";

export default function RecipeCard(props: {
  recipe: RecipesType;
}): JSX.Element {
  const { recipe } = props;
  const router = useRouter();

  return (
    <div
      className="min-w-[180px] w-[17%] mb-10 max-h-[340px] bg-white cursor-pointer"
      onClick={() => {
        router.push(`../recipe/${recipe._id}`);
      }}
    >
      <picture>
        <img
          src={`${recipe.image_url}`}
          className="w-full h-[83%] object-cover"
          alt=""
        />
      </picture>
      <div className="flex gap-2 place-content-center">
        {recipe.categories_id.map((rec: RecipesType, index: number) => (
          <p key={index}>{rec.name}</p>
        ))}
      </div>
      <p className="text-center">{recipe.name}</p>
    </div>
  );
}
