import Link from "next/link";
import { useRouter } from "next/router";
import { CiSearch } from "react-icons/ci";
import { useUser } from "@/context/UserContext";
import { Avatar, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import Cookies from "js-cookie";

export default function Navbar(): JSX.Element {
  const router = useRouter();
  const { user, setUser } = useUser();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function searchHandler(e: any): void {
    e.preventDefault();
    console.log(e.target.search.value);
  }

  return (
    <header className="text-currentColor container mx-auto flex justify-between py-8">
      <h1
        className="text-[32px] font-bold cursor-pointer"
        onClick={() => {
          router.push("../");
        }}
      >
        receta.
      </h1>
      <form
        className="relative min-w-[300px] w-[60%] me-4"
        onSubmit={searchHandler}
      >
        <input
          type="text"
          className="focus:outline-none bg-transparent w-full p-2 placeholder:text-currentColor border-b-[1px]"
          aria-invalid="false"
          placeholder="search"
        />
        <CiSearch className="absolute right-0 top-2 w-[25px] h-[25px] text-currentColor" />
      </form>

      {user ? (
        <Menu>
          <MenuButton>
            <img
              className="w-[35px] h-[35px] rounded-[25px]"
              src={user.picture}
              alt=""
            />
          </MenuButton>
          <MenuList className="flex flex-col gap-3">
            <p className="text-[16px] text-black border-b-[1px]">
              hello! {user.name}
            </p>
            <p className="text-black cursor-pointer hover:text-red-400">
              settings
            </p>
            <p className="text-black cursor-pointer hover:text-red-400">
              account
            </p>
            <p
              className="text-black cursor-pointer hover:text-red-400"
              onClick={() => {
                setUser(undefined), Cookies.remove("token");
              }}
            >
              log out
            </p>
          </MenuList>
        </Menu>
      ) : (
        <Link href="../login" className="mt-3 text-currentColor">
          login
        </Link>
      )}
    </header>
  );
}
