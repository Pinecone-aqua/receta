import Navbar from "@/component/Navbar";
import { RecipesType } from "@/util/Types";
import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { AspectRatio } from "@chakra-ui/react";

export default function Recipe(props: { recipes: RecipesType }): JSX.Element {
  const recipes: RecipesType = props.recipes;

  return (
    <div className="bg-[#1E1E1E]">
      {" "}
      <Navbar />
      <div className="container mx-auto mt-[50px] shadow shadow-drop-md">
        <div className="flex">
          <picture className="w-[50%] ">
            <img
              className="w-full rounded-l-lg"
              src={`${recipes.image_url}`}
              alt=""
            />
          </picture>
          <div className="w-[50%] bg-[#343434] text-white rounded-r-lg ">
            <div className="justify-around flex text-2xl p-5">
              <button>Ingredients</button>
              <button>How to</button>
              <button>Tools</button>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFBF1] min-h-[30vh] rounded-b-lg mb-[5%]">
          <div className="w-[50%]">
            {" "}
            <h2 className="text-center text-2xl">{recipes.name}</h2>
            <p>{recipes.description}</p>
          </div>
        </div>
      </div>
      <AspectRatio maxW="w-full" ratio={2}>
        <iframe src={recipes.video_url} allowFullScreen />
      </AspectRatio>
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
  recipes: RecipesType | null;
}

export const getStaticProps: GetStaticProps<RecipeProps> = async ({
  params,
}: GetStaticPropsContext) => {
  const res = await axios.get(
    `http://localhost:3003/recipes/get?id=${params?.id}`
  );
  const recipes = await res.data;

  return {
    props: {
      recipes: recipes,
    },
  };
};
