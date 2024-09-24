import React from "react";
import Data from "../assets/Data.json";
import Comments from "./Comments";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Custom Left Arrow for Carousel
const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="custom-arrow absolute left-[-60px] top-1/2 transform -translate-y-1/2 cursor-pointer bg-customOrange p-3 rounded-full hover:bg-customOrangeLight transition duration-300 ease-in-out shadow-lg"
      onClick={onClick}
    >
      <FaArrowLeft className="text-white text-2xl" />
    </div>
  );
};

// Custom Right Arrow for Carousel
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="custom-arrow absolute right-[-60px] top-1/2 transform -translate-y-1/2 cursor-pointer bg-customOrange p-3 rounded-full hover:bg-customOrangeLight transition duration-300 ease-in-out shadow-lg"
      onClick={onClick}
    >
      <FaArrowRight className="text-white text-2xl" />
    </div>
  );
};

const Section3: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="my-12 py-8 relative text-center">
      {/* Title */}
      <h2 className="text-4xl font-bold mb-6 text-gray-900">
        What Our Users Have To Say
      </h2>

      {/* Carousel for comments */}
      <div className="relative w-full max-w-6xl mx-auto px-4 lg:px-8">
        <Slider {...settings}>
          {Data.listing2.map((c) => (
            <div key={c.id} className="p-4">
              <Comments
                id={c.id}
                name={c.name}
                description={c.description}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Animated Button */}
      <button className="bt-style1 mt-8 animate-bounce mx-auto">
        Get Started
      </button>
    </section>
  );
};

export default Section3;
