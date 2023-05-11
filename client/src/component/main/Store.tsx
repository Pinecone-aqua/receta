import { useOthers } from "@/context/OthersContext";
import { ToolType } from "@/util/Types";
import Image from "next/image";
import { useRouter } from "next/router";
import { Carousel } from "primereact/carousel";
import React from "react";
import { useRef } from "react";
import { HiOutlineShoppingBag, HiOutlineArrowRight } from "react-icons/hi";
export default function Store({ tools }: { tools: ToolType[] }): JSX.Element {
  const router = useRouter();
  const ref = useRef(null);
  const { setActivePage } = useOthers();
  const shopIcon =
    "w-[30px] h-[30px] p-[10px] w-[50px] h-[50px] rounded-[25px] border cursor-pointer ease-in duration-100";
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 2,
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
  const toolTemplate = (tool: any) => (
    <div
      className="cursor-pointer relative tool-card"
      onClick={() => {
        router.push(`../store/${tool._id}`);
        setActivePage("");
        localStorage.setItem("page", "");
      }}
    >
      <Image
        src={tool.image_url}
        alt="tool"
        width={1000}
        height={1000}
        className="mb-10 z-20 hover:opacity-10 hover:z-0"
      />

      <p className="absolute bottom-[-50px] w-full text-white text-center">
        {tool.name}
      </p>
      <HiOutlineShoppingBag
        className={`${shopIcon} text-white absolute top-0 z-10 hover:block mx-[38.5%] mt-[120px] tool-icon`}
      />
    </div>
  );

  return (
    <div className="bg-[#171717]">
      <div className="Container border-s-[0.5px] border-[#424242] pb-[90px] pt-[80px]">
        <h1 className="font-semibold Store-title text-[72px] leading-[86px] pb-[50px] ps-[40px] text-[#FFFFFF]">
          Store
        </h1>
        <div className="flex Store">
          <div className="relative min-w-[43%] Store-image h-[1083px] object-cover mt-auto">
            <picture>
              <img src="../Store.webp" className="Store-image-abs" alt="" />
            </picture>
            <HiOutlineShoppingBag
              onClick={() => {
                router.push(`../store`);
              }}
              className={`${shopIcon} Store-image-icon text-[#A0A0A0] border-[#A0A0A0] absolute bottom-[40px] right-[40px] hover:border-white hover:text-white`}
            />
          </div>
          <div className="ps-[65px] w-[57%] Store-shop-slider h-full flex flex-col justify-start">
            <h2 className="font-semibold text-[48px] leading-[72px] text-[#FFFFFF]">
              Cocktail store
            </h2>
            <div className="flex flex-col gap-[74px] pt-[50px] h-[40%]">
              <div>
                <h3 className="font-semibold text-[28px] leading-[24px] text-[#FFFFFF] pb-[40px]">
                  Tools
                </h3>

                <div>
                  <Carousel
                    circular={true}
                    value={tools}
                    numVisible={2}
                    numScroll={1}
                    responsiveOptions={responsiveOptions}
                    itemTemplate={toolTemplate}
                    // indicatorsContentClassName={
                    //   "flex flex-wrap justify-center"
                    // }
                  />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[28px] leading-[24px] text-[#FFFFFF] pb-[40px]">
                  Tools
                </h3>

                <div>
                  <Carousel
                    circular={true}
                    value={tools}
                    numVisible={2}
                    numScroll={1}
                    responsiveOptions={responsiveOptions}
                    itemTemplate={toolTemplate}
                    // indicatorsContentClassName={
                    //   "flex flex-wrap justify-center"
                    // }
                  />
                </div>
              </div>
              <button className="buyButton w-[385px] text-[#ffffff] border-[#ffffff] font-semibold leading-[16px] text-[16px] py-[16px] border-[1px] hover:bg-[]">
                buy bar set
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
