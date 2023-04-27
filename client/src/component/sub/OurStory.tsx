import { FiArrowRight } from "react-icons/fi";
import AdviceRow from "./AdviceRow";
import OurStoryRow from "./OurStoryRow";
import JournalRow from "./JournalRow";

export default function OurStory() {
  return (
    <div>
      <div className="OurStory">
        <div className="firstPart relative">
          <img
            src="OurStory1.png"
            alt="orange"
            className="absolute"
            style={{ right: "0px" }}
          />

          <img
            src="OurStory2.png"
            alt="image"
            className="absolute h-[250px]"
            style={{ bottom: "0px", left: "15%" }}
          />
          <OurStoryRow />
          <OurStoryRow />
        </div>
        <div className="secondPart relative">
          <img
            src="OurStory3.png"
            alt="cup"
            className="absolute"
            style={{ top: "18%" }}
          />
          <div className="absolute w-[50%] mt-5" style={{ left: "32%" }}>
            <div className="text-[132px] font-bold leading-[238px]">
              our story
            </div>
            <div className="text-[24px]">
              What's happening in the cocktial world? Plunge into our articles
              and get to feel the Quenched cocktail universe? We have Gathered
              related content and tips & tricks to get you started making
              cocktails and living the fabulous.
            </div>
            <button className="bg-white py-1 px-[50px] text-black rounded-full mt-[48px] font-bold">
              read more
            </button>
          </div>
          <OurStoryRow />
          <OurStoryRow />
          <OurStoryRow />
        </div>
      </div>
      <div className="advice relative">
        <img
          src="Advice1.png"
          alt="image"
          className="absolute"
          style={{ right: "20%" }}
        />
        <img
          src="Advice2.png"
          alt="image"
          className="absolute"
          style={{ left: "25%", top: "10%" }}
        />
        <img
          src="Advice3.png"
          alt="image"
          className="absolute"
          style={{ bottom: "-10%", right: "0" }}
        />
        <AdviceRow />
        <AdviceRow />
        <div
          className="absolute w-[30%]"
          style={{ bottom: "27%", left: "16%" }}
        >
          <p className="text-[132px] font-bold leading-[238px] tracking-wide">
            advice
          </p>
          <p className="text-[24px]">
            What’s happening in the cocktail world? Plunge into our articles and
            get to feel the Quenched cocktail universe?
          </p>
          <button className="py-2 w-[180px] rounded-full mt-[48px] font-bold border flex justify-evenly items-center pl-2">
            <span>show more</span>
            <FiArrowRight className="text-[24px]" />
          </button>
        </div>
        <div className="flex">
          <div className="border border-s-0 border-t-0 border-[gray] h-[250px] w-[10%]"></div>
          <div className="border border-s-0 border-t-0 border-[gray] h-[250px] w-[72%]"></div>
          <div className="border border-s-0 border-e-0 border-[gray] border-t-0 h-[250px] w-[18%]"></div>
        </div>
      </div>
      <div className="journal relative">
        <img
          src="Journal1.png"
          alt="image"
          className="absolute"
          style={{ left: "20%" }}
        />
        <img
          src="Journal2.png"
          alt="image"
          className="absolute"
          style={{ left: "15%", bottom: "15%" }}
        />
        <JournalRow />
        <div
          className="absolute w-[35%]"
          style={{ bottom: "11%", right: "20%" }}
        >
          <p className="text-[132px] font-bold leading-[238px] tracking-wide">
            Journal
          </p>
          <p className="text-[24px]">
            What’s happening in the cocktail world? Plunge into our articles and
            get to feel the Quenched cocktail universe?
          </p>
          <button className="py-2 w-[180px] rounded-full mt-[48px] font-bold border flex justify-evenly items-center pl-2">
            <span>read more</span>
            <FiArrowRight className="text-[24px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
