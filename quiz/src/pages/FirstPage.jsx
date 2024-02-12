import { Link } from "react-router-dom";
import React from "react";
import images from "../images";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FirstPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="flex flex-col justify-start py-12 items-center bg-pink-300 h-auto">
      <div className="rounded-md shadow-md py-6 px-12 bg-white flex flex-col gap-12 max-w-xl">
        <div
          data-aos="fade-down"
          className="flex flex-col justify-center items-start gap-7"
        >
          <h1
            data-aos="fade-down"
            className="text-5xl font-semibold text-center"
          >
            Invitation for Valentine's day.
          </h1>
          <p data-aos="fade-down" className="text-center font-semibold text-xl">
            Hello girlfriend, pleasant day to you. Will you be my partner for
            the upcoming Valentine's day event?
          </p>
        </div>
        <div data-aos="fade-down" className="flex justify-center items-center">
          <img className="w-96" src={images.catFlower} alt="" />
        </div>

        <div className="flex justify-center items-center gap-8">
          <Link to="/date">
            {" "}
            <button
              className="py-4 px-12 text-xl rounded-md shadow-md font-bold hover:text-white hover:bg-pink-300 transition-all"
              onClick={() => alert("yippee!! :33")}
            >
              Yes!
            </button>
          </Link>
          <button
            className="py-4 px-12 text-xl rounded-md shadow-md font-bold hover:text-white hover:bg-pink-300 transition-all"
            onClick={() => alert("Please choose wisely. :)")}
          >
            I no no wanna {":(("}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FirstPage;
