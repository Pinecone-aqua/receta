import { CategoriesType, RecipesType } from "../../util/Types";
import { useRef } from "react";
import Link from "next/link";
import React from "react";
import { Carousel } from "primereact/carousel";
export default function Recoommend({
  recommend,
}: {
  recommend: RecipesType[];
}): JSX.Element {
  const ref = useRef(null);

  const productTemplate = (recipe: any) => {
    return (
      <div className=" my-auto">
        <Link href={`../cocktail/${recipe._id}`}>
          <img src={recipe.image_url} alt={recipe.name} />
          <div className="text-white text-center mt-4">
            <div className="mb-3">{recipe.name}</div>
            {recipe.categories_id.map((cate: CategoriesType) => cate.name)}
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
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
      numScroll: 1,
    },
  ];

  return (
    <div className="py-[172px] recommend px-[160px] flex flex-col place-content-center gradient bg-black">
      <p className="recommend-title-sub">Top drinks</p>
      <h1 className="recommend-title mb-[5rem]">We recommend you</h1>
      <div className="Container pb-[10px] flex">
        <Carousel
          circular={true}
          value={recommend}
          numVisible={3}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          itemTemplate={productTemplate}
          indicatorsContentClassName={"flex justify-center gap-0"}
        />
      </div>

      <div className="border py-2 px-[4rem] text-white mx-auto mt-10 cursor-pointer">
        you try these drinks
      </div>
    </div>
  );
}
