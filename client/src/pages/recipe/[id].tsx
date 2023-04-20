import Navbar from "@/component/Navbar";
import { RecipesType } from "@/util/Types";
import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

export default function Recipe(props: { recipes: RecipesType[] }): JSX.Element {
  const recipes: RecipesType[] = props.recipes;
  console.log(recipes);

  return (
    <div className="bg-[#1E1E1E]">
      {" "}
      <Navbar />
      <div className="container mx-auto mt-[50px] shadow shadow-drop-md">
        <div className="flex">
          <picture className="w-[50%] ">
            <img
              className="w-full rounded-l-lg"
              src={`${recipes[0].image_url}`}
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
            <h2 className="text-center text-2xl">{recipes[0].name}</h2>
            <p>{recipes[0].description}</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <iframe
          className="w-[100%] h-[60vh] aspect-video "
          src={recipes[0].video_url}
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
