import React from "react";
import SectionTitle from "./SectionTitle";
import websitetheme from "../assets/websitetheme.png";

const Themes = () => {
  const style = "h-[25rem] w-auto border rounded-md border-gray-300 shadow-xl";
  return (
    <div className="mt-24">
      <SectionTitle
        title={"Our built-in themes"}
        description={"launch your landing page in seconds using these themes"}
      />
      <div className="flex justify-center flex-wrap gap-8">
        <img src={websitetheme} alt="theme" className={style} />
        <img src={websitetheme} alt="theme" className={style} />
        <img src={websitetheme} alt="theme" className={style} />{" "}
        <img src={websitetheme} alt="theme" className={style} />{" "}
        <img src={websitetheme} alt="theme" className={style} />{" "}
        <img src={websitetheme} alt="theme" className={style} />{" "}
      </div>
    </div>
  );
};

export default Themes;
