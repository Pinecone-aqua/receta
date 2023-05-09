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
    <div className="flex max-w-[1300px] mx-auto">
      <div className="w-[45%] ">
        <div>
          <img className="w-full" src={`${recipe.image_url}`} alt="image" />
        </div>
        <div className="py-5 px-5 bg-[#FFFBF1] text-center border border-b-black">
          <h2 className="text-4xl text-[#1e1e1e] font-bold">{recipe.name}</h2>
          {recipe.categories_id.map((cate: CategoriesType, index) => (
            <p className="text-red-500 text-3xl font-medium" key={index}>
              {cate.name}
            </p>
          ))}
        </div>
      </div>
      <div className="w-[55%] relative bg-[#1E1E1E] text-white">
        <div className="h-[50%] bg-[#323232] px-[74px] overflow-y-auto">
          <div className="text-lg absolute bg-[#323232] h-[150px] w-[80%] flex items-center border-b-[1px]">
            <div>Step-by-step</div>
          </div>
          <div className="text-[24px]">
            <div className="font-bold mt-[160px]">Prepare</div>
            {recipe.how_to.map((single: any, index: number) => (
              <div key={index} className="leading-8 mt-5 mb-[3rem] font-medium">
                {index + 1}. {single}
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <Tabs variant="unstyled" colorScheme="green" isFitted>
            <TabList>
              <Tab
                _selected={{
                  bg: "#1e1e1e !important",
                }}
                style={{
                  background: "#323232",
                }}
              >
                <div className="p-1">Ingredients</div>
              </Tab>
              <Tab
                _selected={{
                  bg: "#1e1e1e !important",
                }}
                style={{
                  background: "#323232",
                }}
              >
                Tools
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel
                className="h-[540px]"
                paddingTop="60px"
                paddingLeft={100}
                overflowY="auto"
              >
                {recipe.ingredients.map((ingredient: any, index: number) => (
                  <p className="text-[18px] leading-9" key={index}>
                    {ingredient}
                  </p>
                ))}
              </TabPanel>
              <TabPanel
                paddingTop="60px"
                className="flex flex-wrap gap-[32px]"
                paddingLeft={100}
                overflowY="auto"
              >
                {recipe.tools_id.map((tool: any, index: number) => (
                  <Link href={`../store/${tool._id}`} key={index}>
                    <img className="w-[150px]" src={tool.image_url} alt="" />
                    <p className="text-[18px] text-center leading-9">
                      {tool.name}
                    </p>
                  </Link>
                ))}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
