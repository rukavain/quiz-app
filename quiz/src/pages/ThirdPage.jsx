import { Link } from "react-router-dom";
import React from "react";
import images from "../images";

const ThirdPage = () => {
  return (
    <section className="flex flex-col justify-start py-12 items-center bg-pink-300 h-auto">
      <div className="rounded-md shadow-md py-6 px-12 bg-white flex flex-col gap-12 max-w-xl">
        <h1 className="text-4xl font-semibold">Where do you want to eat?</h1>
        <img src={images.catFood} alt="" />
      </div>
      <div className="flex gap-4 justify-start items-center">
        <div>
          <h1>Makimura</h1>
          <img src={images.food1} alt="" />
        </div>
        <div>
          <h1>Sumoniku</h1>
          <img src={images.food2} alt="" />
        </div>
        <div>
          <h1>Wingzone</h1>
          <img src={images.food3} alt="" />
        </div>
        <div>
          <h1>Yakimix</h1>
          <img src={images.food4} alt="" />
        </div>
        <div>
          <h1>Yu-fu-in</h1>
          <img src={images.food5} alt="" />
        </div>
      </div>
    </section>
  );
};

export default ThirdPage;
