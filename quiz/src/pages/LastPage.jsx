import React from "react";
import images from "../images";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const LastPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="flex flex-col justify-start py-12 items-center bg-pink-300 h-auto">
      <div
        data-aos="fade-down"
        className="rounded-md shadow-md py-6 px-12 bg-white flex flex-col gap-12 max-w-xl"
      >
        <h1 data-aos="fade-down" className="text-4xl py-5 font-bold">
          Yippee! :33
        </h1>
        <h1 data-aos="fade-down" className="text-lg font-semibold">
          Its settled then! Be sure to dress nicely because it will be one of a
          romantic date. I love you, pookie! Happy Valentine's Day {"<33"}{" "}
        </h1>
        <img data-aos="fade-down" src={images.lastpage} alt="" />
      </div>
    </section>
  );
};

export default LastPage;
