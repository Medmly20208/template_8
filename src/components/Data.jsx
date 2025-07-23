import React from "react";
import SectionTitle from "./SectionTitle";
import earth from "../assets/earth.png";

const Data = () => {
  const data = [
    {
      number: "200k",
      name: "Users",
    },
    {
      number: "40%",
      name: "Conversion rate",
    },
    {
      number: "2M",
      name: "Pages",
    },
    {
      number: "20",
      name: "Countries",
    },
  ];
  return (
    <div id="aboutus" className="mt-24">
      <SectionTitle
        title={"Join over 200k entrepreneur"}
        description={"Explore the numbers behind our success"}
      />
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-4">
        {data.map((item) => {
          return (
            <div className="border-l-4 p-4 border-blue-600 w-[15rem]">
              <h1 className="text-7xl font-bold mb-4">+{item.number}</h1>
              <p className="text-gray-700 text-lg font-semibold">{item.name}</p>
            </div>
          );
        })}
      </div>
      <img src={earth} alt="earth" />
    </div>
  );
};

export default Data;
