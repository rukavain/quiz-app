import { Link } from "react-router-dom";
import React from "react";
import images from "../images";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SecondPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <section className="flex flex-col justify-start py-12 items-center bg-pink-300 h-auto">
        <div
          data-aos="fade-down"
          className="rounded-md shadow-md py-6 px-12 bg-white flex flex-col gap-12 max-w-xl justify-center items-start"
        >
          <h1 data-aos="fade-down" className="text-4xl font-bold text-center">
            When are you available, love? {";3"}
          </h1>
          <input
            required
            data-aos="fade-down"
            className=""
            min="2024-02"
            max="2024-02"
            type="date"
          />
          <img data-aos="fade-down" src={images.catDate} alt="" />
          <Link to="/food">
            <button
              onClick={() => alert("Cool date ;)")}
              className="py-4 px-12 text-xl rounded-md shadow-md font-bold hover:text-white hover:bg-pink-300 transition-all"
              type="submit"
            >
              Next
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default SecondPage;
