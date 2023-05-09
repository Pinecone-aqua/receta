import Header from "@/component/Header";
import ParallaxText from "@/component/main/ParalloxText";

export default function Shop(): JSX.Element {
  return (
    <>
      <div className="News text-[#FFFFFF]">
        <Header />
        <div className="News-Container Container">
          <h1 className="News-title">News</h1>
          <p className="News-sub-title ">
            What’s happening in the cocktail world?
          </p>
        </div>
      </div>
      <div className="News-parallox">
        <ParallaxText baseVelocity={-2}>
          <div className="News-parallox-text flex gap-10">
            <p>receta news.</p> <p>receta news.</p> <p>receta news.</p>
          </div>
        </ParallaxText>
      </div>
      <div className="Container News-sub-text">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old.
      </div>
      <p className="line" />
      <div className="pt-[28px] h-[100vh]">
        <p className="line" />
        <div className="Container p-[64px]">
          <h3 className="Section-title">Getting Started</h3>
          <p className="Section-title-border" />
        </div>
      </div>
    </>
  );
}
