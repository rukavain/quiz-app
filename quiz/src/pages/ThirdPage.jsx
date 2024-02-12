import { Link } from "react-router-dom";
import React from "react";
import images from "../images";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const ThirdPage = () => {
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
        <h1 data-aos="fade-down" className="text-4xl font-semibold">
          Where do you want to eat?
        </h1>
        <img data-aos="fade-down" src={images.catFood} alt="" />
      </div>
      <div className="flex gap-12 my-12 justify-center items-center bg-white shadow-md py-4 px-8 mx-8 flex-wrap h-auto rounded-md ">
        <Link onClick={() => alert("Good food!")} to="/valentinesday">
          <div className=" text-xl font-bold flex flex-col gap-4">
            <h1>Makimura</h1>
            <img className="h-44 w-44" src={images.food1} alt="" />
          </div>
        </Link>

        <Link onClick={() => alert("Good food!")} to="/desert">
          <div className=" h-44 w-44 text-xl font-bold flex flex-col gap-4">
            <h1>Sumoniku</h1>
            <img src={images.food2} className="h-44 w-44" alt="" />
          </div>
        </Link>
        <Link onClick={() => alert("Good food!")} to="/desert">
          <div className=" h-44 w-44 text-xl font-bold flex flex-col gap-4">
            <h1>Wingzone</h1>
            <img src={images.food3} className="h-44 w-44" alt="" />
          </div>
        </Link>
        <Link onClick={() => alert("Good food!")} to="/desert">
          <div className=" h-44 w-44 text-xl font-bold flex flex-col gap-4">
            <h1>Yakimix</h1>
            <img src={images.food4} className="h-44 w-44" alt="" />
          </div>
        </Link>
        <Link onClick={() => alert("Good food!")} to="/desert">
          <div className=" h-44 w-44 text-xl font-bold flex flex-col gap-4md">
            <h1>Yu-fu-in</h1>
            <img src={images.food5} className="h-44 w-44" alt="" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ThirdPage;
