import React from "react";
import Carousel from "../helpers/Certificates.jsx";
import {
  FaJava,
  FaJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiCsharp, SiNextdotjs } from "react-icons/si";

const About = () => {
  const languages = [
    { name: "Java", icon: <FaJava style={{ color: "#007396" }} /> },
    { name: "JavaScript", icon: <FaJs style={{ color: "#F7DF1E" }} /> },
    { name: "Python", icon: <FaPython style={{ color: "#3776AB" }} /> },
    { name: "C#", icon: <SiCsharp style={{ color: "#239120" }} /> },
    { name: "HTML", icon: <FaHtml5 style={{ color: "#E34F26" }} /> },
    { name: "CSS", icon: <FaCss3Alt style={{ color: "#1572B6" }} /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss style={{ color: "#38B2AC" }} />,
    },
    { name: "React", icon: <FaReact style={{ color: "#61DAFB" }} /> },
    { name: "Next.js", icon: <SiNextdotjs style={{ color: "#000000" }} /> },
    { name: "SQL", icon: <FaDatabase style={{ color: "#4479A1" }} /> },
  ];

  return (
    <div className="py-12 bg-yellow-100 scroll-m-16" id="about">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row">
        {/* Left Side - Paragraphs and List */}
        <div className="lg:w-2/3 p-4">
          <h2 className="text-4xl font-extrabold mb-6 text-black">
            My Journey
          </h2>
          <p className="mb-4 text-lg text-black">
            I've studied various web development languages (all listed
            underneath) and excel in front-end development. Currently I am
            practicing with Nextjs and learning about AWS. I wish to study
            back-end development as well so I can own a startup.
          </p>
          <p className="mb-4 text-lg text-black">
            I'm looking for an opportunity to start my career in Web
            Development. I enjoy learning Web Development and hope to master
            everything there is to being a full-stack developer. Ideally, I
            would like a position where I can work front-end while studying the
            back-end.
          </p>
          <div className="grid grid-cols-5 gap-4 text-black pt-5">
            {languages.map((lang, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-4xl mb-2">{lang.icon}</div>
                <div className="text-sm">{lang.name}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Right Side - Carousel */}
        <div className="lg:w-1/3 p-4">
          <div>
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
