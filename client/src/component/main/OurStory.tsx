import React from "react";

export default function OurStory() {
  return (
    <div className="bg-black text-white">
      <div className="Container border-s border-[#424242]">
        <h1 className="text-[72px] font-semibold px-10 py-[6rem]">
          <span className="border-b pb-3">Our</span> story
        </h1>
        <div className="flex pb-[6rem]">
          <img src="./OurStory.png" alt="image" />
          <div className="ps-10 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-semibold">Write title here</h1>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus ab porro vitae. Quasi quis impedit, qui ex
                reprehenderit rerum assumenda architecto dicta, veniam
                distinctio amet atque odio rem debitis aliquam neque eveniet eos
                tempora!
              </p>
            </div>
            <button className="py-2 px-[6rem] border me-auto">read more</button>
          </div>
        </div>
      </div>
    </div>
  );
}
