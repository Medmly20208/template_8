import React from "react";
import phoneMockup from "../assets/phoneMockup.png";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import googleplay from "../assets/googleplay.png";
import appstore from "../assets/appstore.png";
import appgallery from "../assets/appgallery.png";

const MobileDownload = () => {
  return (
    <div className="mt-24 flex p-6 md:p-0 justify-center items-center text-white rounded-4xl bg-blue-600">
      <div>
        <img
          src={phoneMockup}
          alt="phone mockup"
          className="h-[35rem] w-auto hidden md:block"
        />
      </div>
      <div className=" p-2 md:p-0">
        <div className="mb-8">
          <h1 className="text-3xl md:text-6xl font-bold md:w-[30rem] mb-4">
            Download <span className="text-yellow-300">landing page </span>{" "}
            builder
          </h1>
          <p className="text-md md:text-xl font-bold">
            Build, Customize and Launch Your Website in Seconds
          </p>
        </div>
        <div className="flex flex-wrap items-start justify-start gap-2 ">
          <div className="flex ">
            <img src={avatar1} className="h-12 w-auto " alt="avatar" />
            <img
              src={avatar2}
              className="h-12 w-auto translate-x-[-1rem]"
              alt="avatar"
            />
            <img
              src={avatar2}
              className="h-12 w-auto translate-x-[-2rem]"
              alt="avatar"
            />
          </div>
          <p className="w-fit md:w-[20rem] md:ml-[-1rem]">
            Join our growing family of members who have found a better way to
            build stores.
          </p>
        </div>
        <div className="flex gap-4 mt-8 flex-wrap">
          <img src={appstore} alt="app store" className="h-8 md:h-10 w-auto" />
          <img
            src={googleplay}
            alt="google play"
            className="h-8 md:h-10 w-auto"
          />
          <img
            src={appgallery}
            alt="app gallery"
            className="h-8 md:h-10 w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileDownload;
