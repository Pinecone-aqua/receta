import React from "react";

export default function Login(): JSX.Element {
  return (
    <div className="min-h-[100vh] w-full">
      <div className="m-auto mt-[12%] w-[60%] h-[40vh] bg-[#267F40] p-5 shadow shadow-black">
        <h1 className="text-[#FFFBF1] text-[32px] font-bold">receta.</h1>
        <form className="w-[60%] mx-auto">
          <div>
            <input
              type="text"
              className="w-full text-white border-white border-b bg-[#267F40] placeholder-white"
              placeholder="email"
            />
          </div>
          <div>
            <input type="text" className="w-full" />
          </div>
          <button>a</button>
        </form>
      </div>
      <div className="bg-red-400 m-auto w-[60%] h-[10vh] text-center">
        sign in
      </div>
    </div>
  );
}
