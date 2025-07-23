import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import Howitworks from "./components/Howitworks";
import Themes from "./components/themes";
import MobileDownload from "./components/MobileDownload";
import Data from "./components/Data";
import Reviews from "./components/Reviews";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="w-full md:w-[90%] px-4 m-auto">
        <Header />
        <Hero />
        <Features />
        <Benefits />
        <Howitworks />
        <Themes />
        <MobileDownload />
        <Data />
      </div>

      <Reviews />
      <Banner />
      <Footer />
    </>
  );
}

export default App;
