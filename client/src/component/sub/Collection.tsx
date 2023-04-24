import { CollectionType } from "@/util/Types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";

export default function Collection(props: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setActiveBtn: any;
  activeBtn: string | null;
}): JSX.Element {
  const [data, setData] = useState<CollectionType[]>([]);
  const { setActiveBtn, activeBtn } = props;

  useEffect(() => {
    axios
      .get("http://localhost:3003/collections/get")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="text-white h-[80vh] relative ps-[10%]  pt-[15%] w-full flex gap-12">
      {data.map((collection, index) => (
        <div
          onClick={() => {
            setActiveBtn(collection.name),
              localStorage.setItem("currentCollection", collection.name);
          }}
          key={index}
          className="w-full"
        >
          <picture>
            <img
              src={`../${collection.name}.png`}
              className={
                activeBtn == collection.name
                  ? `max-w-[250px] h-[400px] object-cover z-10 absolute bottom-0 sm:hidden md:block cursor-pointer `
                  : `w-[130px] h-[190px] absolute bottom-5 cursor-pointer `
              }
              alt="..."
            />
          </picture>
          <p
            className={
              activeBtn == collection.name
                ? `z-0 absolute text-3xl top-[40%] left-[25%] font-bold text-[150px] text-[#FFFBF1]`
                : "absolute bottom-0 text-[#124822] ms-[30px] cursor-pointer "
            }
          >
            {collection.name}
          </p>
          {activeBtn == collection.name && (
            <RiArrowDropDownFill className="absolute w-[40px] h-[40px] bottom-[-15px] ms-[8%]" />
          )}
        </div>
      ))}
    </div>
  );
}
