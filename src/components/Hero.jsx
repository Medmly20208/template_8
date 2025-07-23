import React from "react";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";

const Hero = () => {
  const imgHeroStyle = "h-42 w-auto rounded-3xl shadow-2xl";

  return (
    <div id="home" className="flex justify-between gap-8 items-center mt-12">
      <div className="flex flex-col gap-6 ">
        <h1 className="text-5xl font-bold text-center md:text-left">
          Build, Customize and Launch Your landing page in Seconds
        </h1>
        <p className="md:w-[80%] text-center md:text-left">
          Launch your own landing page with{" "}
          <span className="text-yellow-300 font-bold">
            SoftwareCraftMasters
          </span>{" "}
          in just a few clicks and Maximize Your ROI With 500%+
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <input
            placeholder="Enter your email adress"
            className="w-72 px-4 py-2  border border-gray-400 rounded-md "
          />
          <button className="main-btn">Get started</button>
        </div>
      </div>
      <div className="hidden md:flex justify-center flex-wrap gap-8">
        <img src={hero1} alt="hero 1" className={imgHeroStyle} />
        <img src={hero2} alt="hero 2" className={imgHeroStyle} />
        <img src={hero3} alt="hero 3" className={imgHeroStyle} />
        <img src={hero4} alt="hero 4" className={imgHeroStyle} />
      </div>
    </div>
  );
};

export default Hero;
