import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

export default function Login() {
  const { data: session } = useSession();
  const [showModal, setShowModal] = useState(false);

  console.log(session);

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
        <div className="w-[500px]  bg-white shadow rounded-3xl p-10 top-[20%] mx-auto absolute ms-[20%]">
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
          </div>
        </div>
      ) : null}
    </>
  );
}
