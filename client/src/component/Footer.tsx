import { BsArrowRightShort } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { Pages } from "@/util/constVariables";
import Link from "next/link";
import { useOthers } from "@/context/OthersContext";

export default function Footer(): JSX.Element {
  const { setActivePage } = useOthers();
  return (
    <footer className="bg-white">
      <div className="Container footer flex relative text-black border-s-[0.5px] border-[#dadada] ps-[47px] pt-[50px] justify-between">
        <div className="flex flex-col justify-around">
          <h2 className="logo">receta.</h2>
          <div className="font-medium text-[12px] max-w-[400px] leading-[15px] text-[#747474]">
            © <span className="text-black">receta</span> 2023. Made with by{" "}
            <span className="text-black">receta</span>club. Зохиогчийн эрх
            хуулиар хамгаалагдсан
          </div>
        </div>
        <picture>
          <img
            src="../footer.webp"
            className="w-[250px] mx-auto mt-[50px]"
            alt="footer"
          />
        </picture>

        <picture>
          <img
            src="../cocktail.webp"
            alt="cocktail"
            className="absolute bottom-[-30px] left-[-7px] w-[15px] h-[20px]"
          />
        </picture>
      </div>
    </footer>
  );
}
