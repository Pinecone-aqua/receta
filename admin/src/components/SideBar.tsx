import Dashboard from "../pages/Dashboard";
import Recipe from "../pages/recipe";
import User from "../pages/User";
import { useRouter } from "next/router";
import ProdIcon from "./icons/ProdIcon";
import Moderator from "../pages/Moderator";
import ModeIcon from "./icons/ModeIcon";
import UserIcon from "./icons/UserIcon";
import Settings from "../pages/Settings";
import SettingIcon from "./icons/SettingIcon";
import DashIcon from "./icons/DashIcon";
import { useEffect, useState } from "react";

export default function SideBar(): JSX.Element {
  const [activeBtn, setActiveBtn] = useState<string | null>();

  useEffect(() => {
    if (localStorage.getItem("btn")) setActiveBtn(localStorage.getItem("btn"));
  }, []);

  const router = useRouter();
  return (
    <div className="h-[100vh] bg-[#054B68] ps-[50px] fixed">
      <h1 className="text-[#FFFBF1] text-[32px] font-bold mb-[100px] mt-[50px]">
        receta.
      </h1>
      {pages.map((page, index) => (
        <button
          key={index}
          className={
            activeBtn == page.name
              ? "h-[40px] w-[200px] text-[20px] text-left text-[#054B68] bg-[#FFFBF1] flex mb-[20px] items-center rounded-l-lg  pl-[10px]"
              : "h-[40px] w-[200px] text-[20px] text-left text-[#FFFBF1] flex items-center mb-[20px]"
          }
          onClick={() => {
            router.push(`../${page.url}`),
              setActiveBtn(page.name),
              localStorage.setItem("btn", page.name);
          }}
        >
          <span className="mt-[3px]">{page.icon}</span>
          <p className="m-0 pl-[10px]">{page.name}</p>
        </button>
      ))}
    </div>
  );
}

interface PageType {
  name: string;
  url: string;
  comp: JSX.Element;
  icon: JSX.Element;
}
export const pages: PageType[] = [
  {
    url: "../dashboard",
    name: "Dashboard",
    comp: <Dashboard />,
    icon: <DashIcon />,
  },
  {
    url: "../recipe",
    comp: <Recipe categories={[]} collections={[]} recipes={[]} tools={[]} />,
    name: "Recipe",
    icon: <ProdIcon />,
  },
  {
    url: "../moderator",
    comp: <Moderator />,
    name: "Moderator",
    icon: <ModeIcon />,
  },
  {
    url: "../user",
    comp: <User />,
    name: "User",
    icon: <UserIcon />,
  },
  {
    url: "../settings",
    comp: <Settings />,
    name: "Settings",
    icon: <SettingIcon />,
  },
];
