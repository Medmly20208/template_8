import React from "react";
import SectionTitle from "./SectionTitle";
import howitworks1 from "../assets/howitworks1.png";
import howitworks2 from "../assets/howitworks2.png";
import howitworks3 from "../assets/howitworks3.png";
import howitworks4 from "../assets/howitworks4.png";

const Howitworks = () => {
  const howItWorks = [
    {
      title: "Sign Up",
      description: "Start building for free, no credit card required.",
      icon: howitworks1, // Replace with actual icon if needed
      isMain: true,
    },
    {
      title: "Create Page",
      description:
        "Choose from built-in templates and customize your landing page to fit your brand.",
      icon: howitworks2,
      isMain: false,
    },
    {
      title: "Publish & Share",
      description:
        "Launch your page and share it anywhere — on social media, email, or ads.",
      icon: howitworks3,
      isMain: false,
    },
    {
      title: "Capture Leads",
      description:
        "Connect forms, collect emails, and track visitors with built-in analytics and integrations.",
      icon: howitworks4,
      isMain: false,
    },
  ];
  return (
    <div className="mt-24">
      <SectionTitle
        title={"How it works"}
        description={
          "Our platform is packed with all you need to start, run, and grow your business."
        }
      />
      <div className="flex gap-4 flex-wrap justify-center">
        {howItWorks.map((item) => {
          return (
            <div
              className={`flex justify-around shadow-2xl rounded-md flex-col p-4 w-[20rem] gap-2 ${
                item.isMain
                  ? "bg-gradient-to-l from-blue-900 to-blue-600 text-white"
                  : "border border-gray-100 "
              }`}
            >
              <div className="flex gap-2">
                <img src={item.icon} className="h-6 w-auto" />
                <p className="text-md font-semibold">{item.title}</p>
              </div>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Howitworks;
