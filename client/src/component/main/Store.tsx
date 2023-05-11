import { useOthers } from "@/context/OthersContext";
import { ToolType } from "@/util/Types";
import { useRouter } from "next/router";
import React from "react";
import { useRef } from "react";
import { HiOutlineShoppingBag, HiOutlineArrowRight } from "react-icons/hi";
export default function Store({ tools }: { tools: ToolType[] }): JSX.Element {
  const router = useRouter();
  const ref = useRef(null);
  const { setActivePage } = useOthers();
  const shopIcon =
    "w-[30px] h-[30px] p-[10px] w-[50px] h-[50px] rounded-[25px] border cursor-pointer ease-in duration-100";

  return (
    <div className="bg-[#171717]">
      <div className="Container border-s-[0.5px] border-[#424242] py-[100px]">
        <h1 className="font-semibold Store-title text-[72px] leading-[86px] pb-[50px] ps-[40px] text-[#FFFFFF]">
          Store
        </h1>
        <div className="flex Store">
          <div className="relative min-w-[480px] Store-image h-[1083px] object-cover">
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
          <div className="ps-[65px] Store-shop-slider">
            <h2 className="font-semibold text-[48px] leading-[72px] text-[#FFFFFF]">
              Cocktail store
            </h2>
            <div className="flex flex-col gap-[74px] pt-[50px]">
              <div>
                <h3 className="font-semibold text-[28px] leaeding-[24px] text-[#FFFFFF] pb-[40px]">
                  Tools
                </h3>
                <div className="flex">
                  <ul
                    className="flex Store-slider w-[30vw] h-[300px] scroll-ul"
                    ref={ref}
                  >
                    {tools.map((tool, index) => (
                      <li
                        key={index}
                        className="relative cursor-pointer scroll-li"
                        onClick={() => {
                          router.push(`../store/${tool._id}`);
                          setActivePage("");
                          localStorage.setItem("page", "");
                        }}
                      >
                        <picture>
                          <img
                            src={tool.image_url}
                            className="max-w-[192px] absolute object-cover z-20 hover:z-0 hover:opacity-10"
                            alt="tool"
                          />
                        </picture>
                        <p className="w-[83.5%] absolute bottom-[20px] text-white text-center">
                          {tool.name}
                        </p>
                        <HiOutlineShoppingBag
                          className={`${shopIcon} text-white z-10 hover:block mx-[30.5%] mt-[90px]`}
                        />
                      </li>
                    ))}
                  </ul>
                  <HiOutlineArrowRight className="my-auto cursor-pointer ms-[64px] text-white w-[42px] h-[42px] rounded-[25px] p-3 border" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[28px] leaeding-[24px] text-[#FFFFFF] pb-[40px]">
                  Tools
                </h3>
                <div className="flex">
                  <ul
                    className="flex Store-slider w-[30vw] h-[300px] scroll-ul"
                    ref={ref}
                  >
                    {tools.map((tool, index) => (
                      <li
                        key={index}
                        className="relative cursor-pointer scroll-li"
                        onClick={() => {
                          router.push(`../store/${tool._id}`);
                          localStorage.setItem("page", "");
                          setActivePage("");
                        }}
                      >
                        <picture>
                          <img
                            src={tool.image_url}
                            className="max-w-[192px] absolute object-cover z-20 hover:z-0 hover:opacity-10"
                            alt="tool"
                          />
                        </picture>
                        <p className="w-[83.5%] absolute bottom-[20px] text-white text-center">
                          {tool.name}
                        </p>
                        <HiOutlineShoppingBag
                          className={`${shopIcon} text-white z-10 hover:block mx-[30.5%] mt-[90px]`}
                        />
                      </li>
                    ))}
                  </ul>
                  <HiOutlineArrowRight className="my-auto cursor-pointer ms-[64px] text-white w-[42px] h-[42px] rounded-[25px] p-3 border" />
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
