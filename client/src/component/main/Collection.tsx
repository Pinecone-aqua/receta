import { useProduct } from "@/context/ProductContext";
import { CollectionType } from "@/util/Types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";

export default function Collection(): JSX.Element {
  const [data, setData] = useState<CollectionType[]>([]);
  const { setActiveBtn, activeBtn } = useProduct();

  useEffect(() => {
    axios
      .get("http://localhost:3003/collections/get")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="h-[78vh] w-[80%] relative flex ms-[5%]">
      {data.map((collection, index) => (
        <div
          onClick={() => {
            setActiveBtn(collection.name);
            localStorage.setItem("currentCollection", collection.name);
          }}
          key={index}
          className="w-[25%] flex justify-center items-end"
        >
          <div>
            <img
              src={`../${collection.name}.png`}
              className={
                activeBtn == collection.name
                  ? `w-[100%] z-10 bottom-0 sm:hidden md:block cursor-pointer`
                  : `w-[130px] h-[190px] cursor-pointer`
              }
              alt="..."
            />

            <p
              className={
                activeBtn == collection.name
                  ? `z-0 absolute text-3xl top-[40%] left-[25%] font-bold text-[150px] text-currentColor`
                  : `text-currentColor cursor-pointer text-center`
              }
            >
              {collection.name}
            </p>
            {activeBtn == collection.name && (
              <RiArrowDropDownFill className="absolute w-[40px] h-[40px] bottom-[-15px] ms-[11%]" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
