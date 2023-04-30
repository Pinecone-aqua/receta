import { useRouter } from "next/router";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Input, Divider } from "@chakra-ui/react";
import { FiX } from "react-icons/fi";
import axios from "axios";

export default function Login(): JSX.Element {
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function loginHandler(e: any): void {
    e.preventDefault();
    console.log(e.target.email.value);
  }

  function googleLoginHandler() {
    axios.get("http://localhost:3003/google-login").then((res) => {
      router.push(res.data);
    });
  }
  return (
    //
    <div className="flex">
      <div className="md:w-[50%] sm:w-[30%] bg-cover bg-[url(/login.jpg)] h-[100vh] max-w-[600px]" />
      <div className="bg-[#1E1E1E] sm:w-[70%] p-[30px] w-[100%]">
        <FiX
          className="right-10 top-11 text-[#267F40] absolute w-[25px] h-[25px] cursor-pointer"
          onClick={() => {
            router.push("../");
          }}
        />
        <h1
          className="text-[#FFFBF1] text-[32px] font-bold cursor-pointer text-center md:pt-[20vh]"
          onClick={() => {
            router.push("../");
          }}
        >
          receta.
        </h1>
        <form
          className=" w-[500px] mx-auto mt-[10%] flex flex-col gap-5"
          onSubmit={(e) => loginHandler(e)}
        >
          <Input
            type="email"
            variant="flushed"
            placeholder="И-мэйл эсвэл Утасны дугаар"
            className="text-white"
            name="email"
          />

          <Input
            type="password"
            variant="flushed"
            className="text-white"
            placeholder="Нууц үг"
            name="password"
          />
          <div className="flex flex-wrap justify-between gap-3">
            <p className="text-white text-sm w-[80px]">бүртгүүлэх</p>
            <p className="text-white text-sm w-[160px] border-b border-white">
              Нууц үгээ мартсан уу?
            </p>
          </div>

          <button
            type="submit"
            className="w-full text-black bg-[#FFFBF1] p-[8px] rounded-[25px] mt-5"
          >
            Нэвтрэх
          </button>
          <div className="relative w-full h-[20px]">
            <Divider orientation="horizontal" className="absolute top-5 " />
            <span className="absolute mx-auto ms-[41%] top-0 text-white bg-[#1e1e1e] p-2">
              эсвэл
            </span>
          </div>
        </form>

        <span
          onClick={googleLoginHandler}
          className="cursor-pointer min-w-[170px] max-w-[500px] w-[60%] px-5 p-2 bg-white rounded-[25px] flex mx-auto gap-2 place-content-center mt-5"
        >
          <p className="text-[#267F40] text-[16px]">sign in google</p>
          <FcGoogle className="mt-[3px] w-[20px] h-[20px]" />
        </span>
      </div>
    </div>
  );
}
