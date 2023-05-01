import Navbar from "@/component/Navbar";
import { CommentType, RecipesType } from "@/util/Types";
import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

import Comment from "@/component/main/recipe/Comment";
import RatingComp from "@/component/main/recipe/Rating";
import Details from "@/component/main/recipe/Details";
import { Rating } from "primereact/rating";

export default function Recipe(props: {
  recipe: RecipesType;
  comments: CommentType[];
}): JSX.Element {
  const recipe: RecipesType = props.recipe;
  const comments: CommentType[] = props.comments;

  return (
    <div className="bg-[#1e1e1e] text-[#FFFBF1]">
      <Navbar />
      <Details recipe={recipe} />
      <div className="max-w-[1300px] text-[#1e1e1e] text-[20px] mx-auto bg-[#FFFBF1] p-[20px]">
        <p>{recipe.description}</p>
        <div className="flex gap-5">
          <Comment comments={comments} recipe_id={recipe._id} />
          <RatingComp />
        </div>
        <Rating
          value={5}
          disabled
          cancel={false}
          className="border-[2px] border-[black] rounded-[20px] w-[150px] p-3"
        />
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get(`http://localhost:3003/recipes/get-ids`);
  const resJson = await res.data;
  const paths = await resJson.map((id: { _id: string }) => ({
    params: {
      id: id._id,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};
interface RecipeProps {
  recipe: RecipesType | null;
}

export const getStaticProps: GetStaticProps<RecipeProps> = async ({
  params,
}: GetStaticPropsContext) => {
  const res = await axios.get(
    `http://localhost:3003/recipes/get?id=${params?.id}`
  );
  const resComment = await axios.get(
    `http://localhost:3003/comments/find?id=${params?.id}`
  );
  const comments = await resComment.data;
  const recipe = await res.data;

  return {
    props: {
      recipe: recipe,
      comments: comments,
    },
  };
};
