import { Carousel } from "primereact/carousel";
import React from "react";

export default function OurStory() {
  const ourStoryValue = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ab porro vitae. Quasi quis impedit, qui ex reprehenderit rerum assumenda architecto dicta, veniam distinctio amet atque odio rem debitis aliquam neque eveniet eos tempora!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ab porro vitae. Quasi quis impedit, qui ex reprehenderit rerum assumenda architecto dicta, veniam distinctio amet atque odio rem debitis aliquam neque eveniet eos tempora! part2",
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
      {/* <div className="Container">
        <h1 className="text-[72px] font-semibold px-10 py-[6rem]">
          <span className="border-b pb-3">Our</span> story
        </h1>
        <div className="flex pb-[6rem]">
          <img src="./OurStory.png" alt="image" />
          <div className="ps-10 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-semibold">Write title here</h1>
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
      </div> */}
    </div>
  );
}
