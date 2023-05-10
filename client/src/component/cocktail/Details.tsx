import Heart from "@/icons/Heart";
import LeftArrow from "@/icons/LeftArrow";
import { CategoriesType, RecipesType } from "@/util/Types";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Details({
  recipe,
}: {
  recipe: RecipesType;
}): JSX.Element {
  const router = useRouter();
  return (
    <div className="flex max-w-[1300px] mx-auto border-x border-[#424242]">
      <div className="w-[50%] ">
        <div className="relative">
          <img className="w-full" src={`${recipe.image_url}`} alt="image" />
          <div
            className="absolute top-[5%] left-[5%] cursor-pointer"
            onClick={() => {
              router.back();
            }}
          >
            <LeftArrow />
          </div>
          <div className="absolute top-[5%] right-[5%] cursor-pointer">
            <Heart />
          </div>
        </div>
      </div>
      <div className="w-[55%] relative text-white">
        <div className="h-[30%]"></div>
        <div className="h-[400px] px-[74px] overflow-y-auto">
          <div className="w-[80%] flex items-center text-xl">
            <div>How to make</div>
          </div>
          <div className="text-[24px] mt-5">
            <div className="font-bold text-[36px]">{recipe.name}</div>
            {recipe.how_to.map((single: any, index: number) => (
              <div
                key={index}
                className="leading-8 mt-[3rem] mb-[3.5rem] font-medium"
              >
                <p className="mb-5">STEP {index + 1}</p>
                <p>{single}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
