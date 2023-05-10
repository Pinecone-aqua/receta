import { CommentType, RecipesType } from "@/util/Types";
import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Comment from "@/component/cocktail/Comment";
import RatingComp from "@/component/cocktail/Rating";
import Details from "@/component/cocktail/Details";
import { Rating } from "primereact/rating";
import Layout from "@/component/Layout";
import Link from "next/link";
import { useOthers } from "@/context/OthersContext";

export default function Recipe(props: {
  recipe: RecipesType;
  comments: CommentType[];
  recommend: RecipesType[];
}): JSX.Element {
  const recipe: RecipesType = props.recipe;
  const comments: CommentType[] = props.comments;
  const recommend: RecipesType[] = props.recommend;
  const { setActivePage } = useOthers();

  return (
    <Layout>
      <div className="bg-[#1A1A1A]">
        <Details recipe={recipe} />
        <div className="text-[#1e1e1e] text-[20px] mx-auto bg-[#FFFBF1] p-[20px]">
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
        <h3 className="text-[24px] mt-[50px]">Recommended cocktails</h3>
        <div className="flex py-[50px] border-b">
          {recommend.map(
            (cocktail, index) =>
              recipe._id !== cocktail._id && (
                <Link
                  href={cocktail._id}
                  key={index}
                  className=""
                  onClick={() => {
                    localStorage.setItem("page", "");
                    setActivePage("");
                  }}
                >
                  <img src={cocktail.image_url} alt="cocktail" />
                  <p className="text-center">{cocktail.name}</p>
                </Link>
              )
          )}
        </div>
      </div>
    </Layout>
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
  const recipe = await axios
    .get(`http://localhost:3003/recipes/get?id=${params?.id}`)
    .then((res) => res.data);
  const comments = await axios
    .get(`http://localhost:3003/comments/find?id=${params?.id}`)
    .then((res) => res.data);
  const recommend = await axios
    .get(`http://localhost:3003/recipes/recommend`)
    .then((res) => res.data);

  return {
    props: {
      recipe: recipe,
      comments: comments,
      recommend: recommend,
    },
  };
};
