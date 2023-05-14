import { RecipesType } from "../../util/Types";
import Link from "next/link";
import React from "react";
import { Carousel } from "primereact/carousel";
import Image from "next/image";

export default function Recommend({
  recommend,
}: {
  recommend: RecipesType[];
}): JSX.Element {
  const recommendTemplate = (recipe: RecipesType) => (
    <div className="my-auto" key={recipe._id}>
      <Link href={`../cocktail/${recipe._id}`}>
        <Image
          src={recipe.image_url}
          alt={`${recipe.name} image`}
          width={1000}
          height={1000}
        />
        <div className="text-white text-center mt-4">
          {recipe.categories_id.map((cate: any) => (
            <p className="text-[#989898]" key={cate._id}>
              {cate.name}
            </p>
          ))}
          <div
            className="mb-3 text-[20px] text-[#dadada
          ] font-medium"
          >
            {recipe.name}
          </div>
        </div>
      </Link>
    </div>
  );

  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "1091px",
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
    <div className="pt-[88px] pb-[24px] recommend flex flex-col place-content-center gradient bg-black">
      <p className="recommend-title-sub">Top drinks</p>
      <h1 className="recommend-title">We recommend you</h1>
      <div className="Container w-full">
        <Carousel
          circular={true}
          value={recommend}
          numVisible={3}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          itemTemplate={recommendTemplate}
          indicatorsContentClassName={"flex flex-wrap justify-center"}
        />
      </div>
    </div>
  );
}
