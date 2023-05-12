import { Carousel } from "primereact/carousel";
import React from "react";

export default function OurStory() {
  const ourStoryValue = [
    "In the late 19th and early 20th century, bars went from being seedy spots hidden in alleyways to popular gathering spots. Bartenders began dressing up to work and following set recipes.",
    "Jerry Thomas published the country’s first cocktail book, The Bon Vivant’s Compnion, in 1862.",
  ];
  const ourStoryTemplate = (value: any) => {
    return <p className="text-[18px] py-2">{value}</p>;
  };
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
  return (
    <div className="bg-black text-white ourstory">
      <div className="Container  border-s-[0.5px] border-[#424242]">
        <h1 className="text-[72px] font-semibold px-10 py-[6rem]">
          <span className="border-b pb-3">Our</span> story
        </h1>
        <div className="flex pb-[6rem]">
          <img src="./OurStory.png" alt="image" />
          <div className="ps-10 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-semibold">Receta team</h1>
              <div className="mt-5">
                <Carousel
                  value={ourStoryValue}
                  circular={true}
                  numVisible={1}
                  numScroll={1}
                  responsiveOptions={responsiveOptions}
                  itemTemplate={ourStoryTemplate}
                  indicatorsContentClassName={"flex justify-center gap-0"}
                />
              </div>
            </div>
            <button className="py-2 px-[6rem] border me-auto">read more</button>
          </div>
        </div>
      </div>
    </div>
  );
}
