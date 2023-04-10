import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

export default function Login() {
  const { data: session } = useSession();
  const [showModal, setShowModal] = useState(false);

  if (session) {
    // axios.post("http://localhost:4000/google-acc", { session });
    return (
      <div>
        <button
          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    );
  }
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(!showModal)}
      >
        login
      </button>
      {showModal ? (
        <div className="w-[500px] h-[450px] bg-white shadow rounded-3xl p-10 top-[20%] mx-auto absolute ms-[20%]">
          <div className=" w-full flex justify-center text-3xl">
            {" receta . "}
          </div>

          <div className="w-full h-full flex items-center flex-col gap-7 mt-10">
            <div className="w-full">
              <button
                onClick={() => signIn()}
                className={`w-full h-[45px] border border-[#081325] rounded-full`}
              >
                Sign in with google
              </button>
            </div>
            <div className="w-full flex items-center flex-col ">
              <div className="w-10 h-10 bg-white z-20 text-center">
                {" "}
                <p className>or</p>
              </div>

              <div className="border border-t-0 border-black w-full mt-[-27px]"></div>
            </div>
            <div className="w-full">
              <form className="flex flex-col w-full gap-4">
                <div className="w-full flex flex-col gap-2">
                  <input
                    type="text"
                    placeholder="email"
                    className="border border-black bg-transparent h-[40px] rounded-full p-4 placeholder:text-black"
                  />
                  <input
                    type="password"
                    placeholder="password"
                    className="border border-black bg-transparent h-[40px] rounded-full p-4 placeholder:text-black"
                  />
                </div>
                <div className="flex justify-between text-[11px] text-[#555555]">
                  <p>don’t have an account?</p>
                  <p>forgot password?</p>
                </div>
                <button
                  type="submit"
                  // onClick={() => signIn()}
                  className="bg-[#23D3BD] rounded-full w-full h-[50px] text-[20px] font-light"
                >
                  {" Sign in ->"}
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
