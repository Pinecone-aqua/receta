import Layout from "@/component/Layout";
import Image from "next/image";

export default function Advice(): JSX.Element {
  return (
    <Layout>
      <>
        <section className="about relative">
          <h1 className="about-title absolute top-[10%] text-center w-full">
            OUR STORY
          </h1>
          <img
            className="object-cover w-full h-[672px]"
            src="../aboutBgg.jpg"
            alt=""
          />
          <div className="about-div">
            <div className="flex">
              <div className="about-div-text left">
                In the late 19th and early 20th century, bars went from being
                seedy spots hidden in alleyways to popular gathering spots.
                Bartenders began dressing up to work and following set recipes.
              </div>
              <img className="w-[50%]" src="../aboutBg.jpg" alt="" />
            </div>
            <div className="flex">
              <img className="w-[50%]" src="../aboutBg.jpg" alt="" />
              <div className="about-div-text right">
                In the late 19th and early 20th century, bars went from being
                seedy spots hidden in alleyways to popular gathering spots.
                Bartenders began dressing up to work and following set recipes.
              </div>
            </div>
            <div className="block relative w-full place-items-center">
              <img
                className="w-[100%] object-cover h-[50vh]"
                src="../aboutBg.jpg"
                alt=""
              />
              <div className="absolute top-1/2 text-center w-full">
                In the late 19th and early 20th century, bars went from being
                seedy spots hidden in alleyways to popular gathering spots.
                Bartenders began dressing up to work and following set recipes.
              </div>
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
}
