import { useProduct } from "@/context/ProductContext";
import { useRouter } from "next/router";
import { FiArrowRight } from "react-icons/fi";
import AdviceRow from "./AdviceRow";
import OurStoryRow from "./OurStoryRow";

export default function OurStory() {
  const router = useRouter();
  const { setActivePage } = useProduct();
  return (
    <div className="text-[#FFFBF1]">
      <div className="OurStory">
        <div className="firstPart relative">
          <img
            src="OurStory2.png"
            alt="image"
            className="absolute w-[60%]"
            style={{ bottom: "0px", left: "15%" }}
          />
          <OurStoryRow />
          <OurStoryRow />
        </div>
        <div className="secondPart relative motion-div">
          <img
            src="OurStory3.png"
            alt="cup"
            className="absolute w-[35%] max-w-[400px]"
            style={{ top: "18%" }}
          />
          <div className="absolute w-[50%] mt-5" style={{ left: "32%" }}>
            <div className="lg:text-[132px] sm:text-[50px] md:text-[70px] font-bold leading-[238px]">
              our story
            </div>
            <div className="md:text-[24px] sm:text-[16px]">
              What's happening in the cocktial world? Plunge into our articles
              and get to feel the Quenched cocktail universe? We have Gathered
              related content and tips & tricks to get you started making
              cocktails and living the fabulous.
            </div>
            <button
              className="bg-white py-1 px-[50px] text-black rounded-full mt-[48px] font-bold"
              onClick={() => {
                router.push(`../advice`),
                  localStorage.setItem("page", "Our Story");
                setActivePage("Our Story");
              }}
            >
              read more
            </button>
          </div>
          <OurStoryRow />
          <OurStoryRow />
          <OurStoryRow />
        </div>
      </div>
      <div className="advice relative motion-div">
        <img
          src="Advice1.png"
          alt="image"
          className="absolute w-[35%] max-w-[500px]"
          style={{ right: "20%" }}
        />
        <img
          src="Advice2.png"
          alt="image"
          className="absolute w-[35%] max-w-[500px]"
          style={{ left: "25%", top: "10%" }}
        />
        <img
          src="Advice3.png"
          alt="image"
          className="absolute w-[30%]"
          style={{ bottom: "-10%", right: "0" }}
        />
        <AdviceRow />
        <AdviceRow />
        <div
          className="absolute w-[30%]"
          style={{ bottom: "27%", left: "16%" }}
        >
          <p className="lg:text-[132px] sm:text-[50px] md:text-[70px] font-bold leading-[238px] tracking-wide">
            advice
          </p>
          <p className="md:text-[24px] sm:text-[16px]">
            What’s happening in the cocktail world? Plunge into our articles and
            get to feel the Quenched cocktail universe?
          </p>
          <button className="py-2 w-[180px] rounded-full mt-[48px] font-bold border flex justify-evenly items-center pl-2">
            <span
              onClick={() => {
                router.push(`../advice`),
                  localStorage.setItem("page", "Advice");
                setActivePage("Advice");
              }}
            >
              show more
            </span>
            <FiArrowRight className="md:text-[24px] sm:text-[16px]" />
          </button>
        </div>
        <div className="flex">
          <div className="border border-s-0 border-t-0 border-[#054B68] h-[250px] w-[10%]"></div>
          <div className="border border-s-0 border-t-0 border-[#054B68] h-[250px] w-[72%]"></div>
          <div className="border border-s-0 border-e-0 border-[#054B68] border-t-0 h-[250px] w-[18%]"></div>
        </div>
      </div>
    </div>
  );
}
