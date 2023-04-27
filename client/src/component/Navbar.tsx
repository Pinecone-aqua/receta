import Link from "next/link";
import { useRouter } from "next/router";
import { CiSearch } from "react-icons/ci";
import { useUser } from "@/context/UserContext";
import { Avatar, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

export default function Navbar(): JSX.Element {
  const router = useRouter();
  const { user, setUser } = useUser();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function searchHandler(e: any): void {
    e.preventDefault();
    console.log(e.target.search.value);
  }

  return (
    <header className="text-currentColor container mx-auto flex justify-between p-8">
      <h1
        className="text-[32px] text-white font-bold cursor-pointer"
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
            <Avatar size="sm" name={user.email} />
          </MenuButton>
          <MenuList>
            <p className="text-black">settings</p>
            <p className="text-black">account</p>
            <p
              className="text-black cursor-pinter"
              onClick={() => setUser(undefined)}
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

{
  /* <ul className="list-none flex  justify-between container mx-auto p-1">
        <li>receta.</li>
        <li>search</li>
        <Link href="../login">login</Link>
      </ul> */
}
