import React from "react";
import { Link } from "react-router-dom";
import images from "../images";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const FourthPage = () => {
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
        <h1 data-aos="fade-down" className="font-semibold text-xl">
          Where do you want to go after eating? {"(no cola) >:DD "}
        </h1>
        <img src={images.catdonut} alt="" />
      </div>
      <div className="bg-white rounded-md shadow-md py-4 px-8 flex justify-start items-start flex-wrap my-8 gap-12">
        <Link onClick={() => alert("Hell yeah blawg!")} to="/valentinesday">
          <div>
            <h1 className="text-lg font-bold my-4">J.CO Donuts</h1>
            <img
              className="object-contain h-64 rounded-md"
              src={images.jco}
              alt=""
            />
          </div>
        </Link>
        <Link onClick={() => alert("Hell yeah blawg!")} to="/valentinesday">
          <div>
            <h1 className="text-lg font-bold my-4">Blueberry Cheesecake!</h1>
            <img
              className="object-contain h-64  rounded-md"
              src={images.blueberry}
              alt=""
            />
          </div>
        </Link>
        <Link onClick={() => alert("Hell yeah blawg!")} to="/valentinesday">
          <div>
            <h1 className="text-lg font-bold my-4">Coffee</h1>
            <img
              className="object-contain h-64  rounded-md"
              src={images.coffee}
              alt=""
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default FourthPage;
