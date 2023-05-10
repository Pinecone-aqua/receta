import { useRouter } from "next/router";
import { BiHomeAlt2 } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { TbBrandShopee } from "react-icons/tb";
import { RiSettings3Fill } from "react-icons/ri";
import { MdBookmarkBorder } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { useOthers } from "../context/OthersContext";
import { SiApplenews } from "react-icons/si";

export default function SideBar(): JSX.Element {
  const { activePage, setActivePage } = useOthers();

  const router = useRouter();
  return (
    <div className="h-[100vh] ps-[40px] fixed bg-white">
      <div className="">
        <h1 className="text-[#454ADE] text-[32px] font-bold mb-[80px] mt-[50px]">
          receta.
        </h1>
        <div>
          {pages.map((page, index) => (
            <button
              key={index}
              className={
                activePage == page.name
                  ? "w-[200px] rounded-md text-[20px] text-left text-[#fff] bg-[#454ADE] flex mb-[20px] items-center p-[8px]"
                  : "w-[200px] text-[20px] text-left text-[#C9C9C9] bg-[#FCFCFC] flex items-center mb-[20px] p-[8px]"
              }
              onClick={() => {
                router.push(`../${page.url}`);
                setActivePage(page.name);
                localStorage.setItem("page", page.name);
              }}
            >
              <span className="mt-[3px] w-[20px] h-[20px] mb-[2px]">
                {page.icon}
              </span>
              <p className="m-0 pl-[10px]">{page.name}</p>
            </button>
          ))}
        </div>

        <div className="flex gap-[6px] cursor-pointer mt-[30vh]">
          <CiLogout className="text-[#FF543E] mt-[2px] w-[20px] h-[20px] ms-[6px]" />{" "}
          <p>Log out</p>
        </div>
      </div>
    </div>
  );
}

interface PageType {
  name: string;
  url: string;
  icon: JSX.Element;
}
export const pages: PageType[] = [
  {
    url: "../Dashboard",
    name: "Dashboard",
    icon: <BiHomeAlt2 />,
  },
  {
    url: "../Recipe",
    name: "Recipe",
    icon: <TbBrandShopee />,
  },
  {
    url: "../News",
    name: "News",
    icon: <SiApplenews />,
  },

  {
    url: "../User",
    name: "User",
    icon: <BsFillPeopleFill />,
  },
  {
    url: "../Order",
    name: "Order",
    icon: <MdBookmarkBorder />,
  },
  {
    url: "../Settings",
    name: "Settings",
    icon: <RiSettings3Fill />,
  },
];
