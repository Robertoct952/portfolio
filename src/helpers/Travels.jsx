import React, { useState } from "react";
import Mexico from "../assets/mexico.JPG";
import Temple from "../assets/temple.jpeg";
import Ny from "../assets/ny.jpeg";
import Bull from "../assets/bull.jpeg";
import Tenn from "../assets/nashville.jpeg";

// Add more images as needed
const images = [Mexico, Bull, Temple, Tenn, Ny];

const Travels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <button
        onClick={handlePrevClick}
        className="absolute left-0 text-white p-2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded"
      >
        {"<"}
      </button>

      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="max-w-full max-h-full object-contain"
      />

      <button
        onClick={handleNextClick}
        className="absolute right-0 text-white p-2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded"
      >
        {">"}
      </button>
    </div>
  );
};

export default Travels;
