import Link from "next/link";
import { useRouter } from "next/router";
import { useUser } from "../context/UserContext";
import { Menu, MenuButton, MenuList, Tooltip } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { Pages } from "../util/constVariables";
import Login from "./main/Login";
import { useOthers } from "../context/OthersContext";
import { Example } from "./main/menu/MotionMenu";
import React from "react";

export default function Header(): JSX.Element {
  const router = useRouter();
  const { user, setUser } = useUser();
  const { activePage, setActivePage } = useOthers();

  return (
    <header className="header">
      <div className="Container flex justify-between">
        <Tooltip label="Cocktails page" aria-label="A tooltip" openDelay={200}>
          <h1
            className="logo"
            onClick={() => {
              router.push("../");
              setActivePage("cocktails");
              localStorage.setItem("page", "cocktails");
            }}
          >
            receta.
          </h1>
        </Tooltip>

        <div className="header-pages flex justify-between">
          {Pages.map((page, index) => (
            <Link
              className={
                activePage == page.name
                  ? "border-b text-[#1e1e1e] border-[#1e1e1e]"
                  : "text-[#1e1e1e] z-10"
              }
              key={index}
              href={page.url}
              onClick={() => {
                localStorage.setItem("page", page.name);
                setActivePage(page.name);
              }}
            >
              <Tooltip
                label={`${page.name} page`}
                aria-label="A tooltip"
                openDelay={200}
              >
                {page.name}
              </Tooltip>
            </Link>
          ))}
        </div>
        {user ? (
          <Menu>
            <div className="flex gap-5">
              <MenuButton>
                <picture>
                  <img
                    className="w-[35px] h-[35px] rounded-[25px]"
                    src={user.picture}
                    alt=""
                  />
                </picture>
              </MenuButton>
              <Example />
            </div>
            <MenuList className="flex text-center flex-col gap-3">
              <p className="text-[16px] p-2 text-gray-600 border-b-[1px]">
                hello! {user.name}
              </p>
              <p className="text-gray-500 cursor-pointer hover:text-[#1e1e1e]">
                settings
              </p>
              <p className="text-gray-500 cursor-pointer hover:text-[#1e1e1e]">
                account
              </p>
              <p
                className="text-gray-500 cursor-pointer hover:text-[#1e1e1e]"
                onClick={() => {
                  setUser(undefined), Cookies.remove("token");
                }}
              >
                log out
              </p>
            </MenuList>
          </Menu>
        ) : (
          <div className="flex gap-5">
            <Login />
            <Example />
          </div>
        )}
      </div>
    </header>
  );
}
