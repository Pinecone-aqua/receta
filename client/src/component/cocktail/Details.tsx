import Heart from "@/icons/Heart";
import LeftArrow from "@/icons/LeftArrow";
import { CategoriesType, RecipesType, ToolType } from "@/util/Types";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Carousel } from "primereact/carousel";
import { useEffect, useState } from "react";

interface DetailsType {
  recipe: RecipesType;
  tools: ToolType[];
}

export default function Details({ recipe, tools }: DetailsType): JSX.Element {
  const [usedTools, setUsedTools] = useState<any>([]);
  const router = useRouter();

  function getToolById(id: string) {
    return tools.find((tool: ToolType) => tool._id === id);
  }

  useEffect(() => {
    const temp = recipe.tools_id?.map((tool) => {
      return getToolById(tool._id);
    });
    setUsedTools(temp);
  }, []);
  const toolTemplate = (tool: any) => {
    return (
      <div className="my-auto">
        <Link href={`../store/${tool._id}`}>
          <img src={tool.image_url} alt={tool.name} />
          <div className="text-white text-center mt-4">
            <div className="mb-3">{tool.name}</div>
          </div>
        </Link>
      </div>
    );
  };
  const responsiveOptions = [
    {
      breakpoint: "1199px",

      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  return (
    <div className="flex max-w-[1300px] h-[90vh] mx-auto border-x border-[#424242] relative">
      <div className="w-[50%] ">
        <div className="relative">
          <div className="image-bg">
            <img className="w-full" src={`${recipe.image_url}`} alt="image" />
            <div className="overlay"></div>
          </div>
          <div className="text-white text-[52px] absolute bottom-[10%] left-[32%] font-semibold tracking-wider">
            {recipe.name}
          </div>
          <div className="text-white text-xl absolute bottom-[6%] left-[45%] font-light">
            {recipe.categories_id[0].name}
          </div>
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
      <div className="w-[50%] relative text-white tabs">
        <Tabs>
          <TabList className="px-10" style={{ justifyContent: "space-evenly" }}>
            <Tab
              _selected={{
                color: "white !important",
                borderBottom: "1px solid white",
              }}
            >
              <span className="text-xl px-10 py-7">Ingredients</span>
            </Tab>
            <Tab
              _selected={{
                color: "white !important",
                borderBottom: "1px solid white",
              }}
            >
              <span className="text-xl px-10 py-7">Step by step</span>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <div className="h-[600px] flex flex-col flex-wrap mt-20 px-[76px] gap-10 overflow-y-auto text-xl min-h-[38vh]">
                {recipe.ingredients?.map(
                  (ingredient: string, index: number) => (
                    <div key={index}>
                      {index + 1}. <span className="ps-2">{ingredient}</span>
                    </div>
                  )
                )}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="h-[600px] px-[74px] mt-20 overflow-y-auto">
                <div className="text-[20px]">
                  {recipe.how_to?.map((single: any, index: number) => (
                    <div
                      key={index}
                      className="leading-8 mb-[3rem] font-medium"
                    >
                      <p className="mb-1">Step {index + 1}.</p>
                      <p>{single}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      <div className="max-w-[1300px] w-full mx-auto text-white bg-[#121212] singleProd-tab absolute bottom-[-26.5%] py-5 px-10">
        <div className="text-2xl font-semibold ps-[3.5rem] mt-5">
          Used tools
        </div>
        <div className="mt-5 recipe-carousel">
          <Carousel
            circular={true}
            value={usedTools}
            numVisible={5}
            responsiveOptions={responsiveOptions}
            itemTemplate={toolTemplate}
            indicatorsContentClassName={"flex justify-center gap-0"}
          />
        </div>
      </div>
    </div>
  );
}
