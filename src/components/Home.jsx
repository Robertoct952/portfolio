import React from "react";
import Beto from "../assets/beto.jpeg";
import Carousel from "../helpers/Travels";

const Home = () => {
  return (
    <div
      id="home"
      className="h-auto sm:h-screen flex flex-col sm:flex-row scroll-m-16"
    >
      {/* Left Side: Profile Picture, Name, Title, Contact Info, and About Me */}
      <div className="w-full sm:w-1/3 bg-yellow-300 text-black flex flex-col items-center justify-center p-4 h-auto">
        <img className="w-32 h-32 rounded-full mb-4" src={Beto} alt="Profile" />
        <h1 className="text-4xl font-bold text-center">Roberto Torres</h1>
        <p className="text-2xl text-center">Front-end Developer</p>
        <p className="mt-4 text-center">
          Hi, I'm honing my current skills while studying back-end development
          in hopes of becoming a{" "}
          <em className="underline">Full-Stack Engineer</em>. I love to travel
          when I can afford it so here are some photos.
        </p>
      </div>

      {/* Right Side: Carousel */}
      <div className="w-full sm:w-2/3 flex items-center justify-center p-4">
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
