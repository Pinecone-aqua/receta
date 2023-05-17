import { useOthers } from "@/context/OthersContext";
import { useRouter } from "next/router";
import { Carousel } from "primereact/carousel";
import React from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function OurStory(): JSX.Element {
  const { setActivePage } = useOthers();
  const router = useRouter();
  const ourStoryValue = [
    "In the late 19th and early 20th century, bars went from being seedy spots hidden in alleyways to popular gathering spots. Bartenders began dressing up to work and following set recipes.",
    "Jerry Thomas published the country’s first cocktail book, The Bon Vivant’s Compnion, in 1862.",
  ];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ourStoryTemplate = (value: any) => (
    <p key={value._id} className="text-[18px] py-2">
      {value}
    </p>
  );
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
      <div className="Container border-s-[0.5px] border-[#424242]">
        <h1 className="text-[72px] ourstory-title font-semibold px-10 py-[6rem]">
          <span className="border-b pb-3">Our</span> story
        </h1>
        <div className="flex pb-[6rem] ourstory-cont">
          <img src="./OurStory.png" className="ourstory-img" alt="image" />
          <div className="ps-10 ourstory-right flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-semibold">Receta team</h1>
              <div className="mt-5">
                <Carousel
                  prevIcon={<SlArrowLeft />}
                  nextIcon={<SlArrowRight />}
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
            <button
              className="py-2 px-[6rem] border me-auto"
              onClick={() => {
                localStorage.setItem("page", "about");
                setActivePage("about");
                router.push("../about");
              }}
            >
              read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
