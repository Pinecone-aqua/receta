import { useRouter } from "next/router";
import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function Login(): JSX.Element {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function loginHandler(e: any): void {
    e.preventDefault();
    console.log(e.target.email.value);
  }
  return (
    <div className="h-[100vh] w-full relative pt-[12%]">
      <div>
        <picture>
          <img
            className="absolute right-0 top-0 min-w-[200px] max-w-[50%]"
            src="../l.png"
          />
        </picture>
      </div>
      <div className="m-auto  max-w-[600px] w-[60%] h-[40vh] bg-[#267F40] p-5 shadow shadow-black">
        <h1
          className="text-[#FFFBF1] text-[32px] font-bold cursor-pointer"
          onClick={() => {
            router.push("../");
          }}
        >
          receta.
        </h1>
        <form
          className="max-w-[400px] mx-auto mt-[10%]"
          onSubmit={loginHandler}
        >
          <div>
            <input
              type="text"
              name="email"
              className="w-full text-white border-white border-b bg-[#267F40] placeholder:italic placeholder:text-white"
              placeholder="email"
            />
          </div>
          <div>
            <input
              name="password"
              type="text"
              className="w-full text-white border-white border-b placeholder:italic bg-[#267F40] placeholder:text-white"
              placeholder="password"
            />
          </div>
          <p className="text-white">register</p>
          <button className="text-[#FFFBF1] cursor-pointer w-full bg-[#124822] p-[8px] rounded-[25px]">
            Нэвтрэх
          </button>
        </form>
      </div>
      <div className="max-w-[600px] bg-[#124822] m-auto w-[60%] p-[30px]">
        <button className="w-[180px] px-5 p-2 bg-white rounded-[25px] justify-around flex mx-auto text-center">
          <p className="text-[#267F40] text-[16px]">sign in google</p>{" "}
          <FcGoogle className="mt-[3px] w-[20px] h-[20px]" />
        </button>
      </div>
    </div>
  );
}
