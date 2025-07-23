import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import { useState } from "react";

const Reviews = () => {
  const [index, setIndex] = useState(0);

  const landingPageReviews = [
    {
      name: "Sophie L.",
      role: "Marketing Lead, Bloomly",
      review:
        "I built our product launch page in under an hour. The drag-and-drop editor is super intuitive and saved us a ton of dev time.",
      rating: 5,
      avatar: avatar1,
    },
    {
      name: "James K.",
      role: "Founder, StartupCore",
      review:
        "We used to rely on expensive freelancers — now I build our landing pages in-house. It's fast, clean, and converts better than ever.",
      rating: 5,
      avatar: avatar2,
    },
    {
      name: "Rania M.",
      role: "E-commerce Strategist",
      review:
        "Being able to publish mobile-optimized pages with built-in analytics changed how we run campaigns. Everything just works.",
      rating: 4.5,
      avatar: avatar2,
    },
  ];

  const nextReview = () => {
    if (index == 2) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prevReview = () => {
    if (index == 0) {
      setIndex(2);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="bg-gray-100 flex justify-between gap-12 items-center p-4 md:px-12 md:py-24">
      <FaArrowLeft
        onClick={prevReview}
        className="w-16 md:w-8 h-auto text-blue-600 cursor-pointer"
      />
      <div className="flex justify-center gap-8 items-center flex-col w-[50rem]">
        <h1 className="text-3xl font-bold text-center">
          {landingPageReviews[index].review}
        </h1>
        <div className="flex justify-center items-center flex-col gap-1">
          <img src={landingPageReviews[index].avatar} />
          <p className="font-bold text-lg">{landingPageReviews[index].name}</p>
          <p>{landingPageReviews[index].role}</p>
        </div>
      </div>
      <FaArrowRight
        onClick={nextReview}
        className="w-16 md:w-8 h-auto text-blue-600  cursor-pointer"
      />
    </div>
  );
};

export default Reviews;
