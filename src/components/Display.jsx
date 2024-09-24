import React from "react";
import Startup from "../assets/website.png";

const Display = () => {
  return (
    <div id="github" className="py-12 scroll-m-16">
      <div className="block lg:hidden p-8 flex-row justify-center bg-yellow-300 border border-black rounded-lg mx-4 mb-8">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
          My GitHub
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          <span className="block mb-2 text-2xl font-bold text-gray-900">
            View My Project In The Works
          </span>
          This is the front page of a project I've been working on. So far, I've
          only got the front pages developed, but the end goal is to be able to
          host the site on my own. Check out my repository and you'll see my
          work using React Vite and Tailwind CSS. You'll also be able to check
          in and see where I am in learning Nextjs.
        </p>
        <a
          href="https://github.com/Migh7y952"
          className="inline-block text-lg text-white bg-black hover:bg-gray-800 rounded-md py-2 px-4 mr-4 transition duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit My GitHub
        </a>
        <a
          href="https://github.com/Migh7y952?tab=repositories"
          className="inline-block text-lg text-white bg-black hover:bg-gray-800 rounded-md py-2 px-4 transition duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          View My Repositories
        </a>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row">
        {/* Left Side - Image */}
        <div className="lg:w-2/3 px-4 flex items-center justify-center mb-8 lg:mb-0 lg:mr-8">
          <img
            src={Startup}
            alt="Startup"
            className="w-full h-auto object-contain border border-black"
          />
        </div>

        {/* Right Side - Text */}
        <div className="hidden lg:block lg:w-1/3 p-8 flex-col justify-center bg-yellow-300 border border-black rounded-lg">
          <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
            My GitHub
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <span className="block mb-2 text-2xl font-bold text-gray-900">
              View My Project In The Works
            </span>
            This is the front page of a project I've been working on. So far,
            I've only got the front pages developed, but the end goal is to be
            able to host the site on my own. Check out my repository and you'll
            see my work using React Vite and Tailwind CSS. You'll also be able
            to check in and see where I am in learning Nextjs.
          </p>
          <a
            href="https://github.com/Migh7y952"
            className="inline-block text-lg text-white bg-black hover:bg-gray-800 rounded-md py-2 px-4 mb-4 transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit My GitHub
          </a>
          <a
            href="https://github.com/Migh7y952?tab=repositories"
            className="inline-block text-lg text-white bg-black hover:bg-gray-800 rounded-md py-2 px-4 transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            View My Repositories
          </a>
        </div>
      </div>
    </div>
  );
};

export default Display;
