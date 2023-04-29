import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { BsArrowRightShort } from "react-icons/bs";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 3], [-distance, distance]);
}

function Image({ sub }: { sub: any }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <>
      {" "}
      <section className={`section ${sub.class} `}>
        <div ref={ref}>
          <img src={`./${sub.img}.png`} className="img " alt="..." />
        </div>
        <motion.h2 style={{ y }} className={`h2`}>
          {`${sub.title}`}
        </motion.h2>
        <p className={`w-[50%] text-white ${sub.textClass}`}>{sub.text}</p>
        <button className="absolute bottom-[150px] flex text-white">
          read more
          <BsArrowRightShort className="mt-[2px] w-[20px] h-[20px]" />
        </button>
      </section>
    </>
  );
}

export default function App() {
  return (
    <div className="mandatory-scroll-snapping">
      {mainSub.map((sub) => (
        <Image sub={sub} />
      ))}
    </div>
  );
}

const mainSub = [
  {
    img: "OurStory2",
    text: "Whats happening in the cocktial world? Plunge into our articles and get to feel the Quenched cocktail universe? We have Gathered related content and tips & tricks to get you started making cocktails and living the fabulous.",
    title: "Our Story",
    class: "flex",
  },
  {
    img: "Advice1",
    text: "Whats happening in the cocktial world? Plunge into our articles and get to feel the Quenched cocktail universe? We have Gathered related content and tips & tricks to get you started making cocktails and living the fabulous.",
    title: "Advice",
    class: "flex",
    textClass: "absolute bottom-[65px]",
  },
  {
    img: "Journal1",
    text: "Whats happening in the cocktial world? Plunge into our articles and get to feel the Quenched cocktail universe? We have Gathered related content and tips & tricks to get you started making cocktails and living the fabulous.",
    title: "Journal",
    class: "flex",
  },
];
