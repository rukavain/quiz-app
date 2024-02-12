import { Link } from "react-router-dom";
import React from "react";
import images from "../images";

const SecondPage = () => {
  return (
    <>
      <section className="flex flex-col justify-start py-12 items-center bg-pink-300 h-auto">
        <div className="rounded-md shadow-md py-6 px-12 bg-white flex flex-col gap-12 max-w-xl justify-center items-start">
          <h1 className="text-4xl font-bold text-center">
            When are you available, love? {";3"}
          </h1>
          <input className="" min="2024-02" max="2024-02" type="date" />
          <img src={images.catDate} alt="" />
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
