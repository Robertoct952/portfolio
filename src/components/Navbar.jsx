import React, { useState } from "react";
import { FaEnvelope, FaFileAlt, FaChevronDown } from "react-icons/fa";
import Beto from "../assets/beto.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-black p-4 shadow-l fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Portfolio Name */}
        <div className="flex items-center space-x-4">
          <img className="w-10 h-10 rounded-full" src={Beto} alt="Profile" />
          <div className="text-yellow-300 text-xl font-bold">My Portfolio</div>
        </div>

        {/* Navigation Links for Large Screens */}
        <div className="text-white hidden md:flex space-x-4 items-center">
          <a href="#home" className="hover:text-yellow-300">
            Home
          </a>
          <a href="#about" className="hover:text-yellow-300">
            About
          </a>
          <a href="#github" className="hover:text-yellow-300">
            Github
          </a>

          {/* Contact Dropdown */}
          <div className="relative">
            <button
              className="flex items-center hover:text-yellow-300 focus:outline-none"
              onClick={toggleDropdown}
            >
              <span>Contact</span>
              <FaChevronDown className="ml-1" />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10">
                <a
                  href="/resume.docx"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFileAlt className="inline mr-2" />
                  Resume
                </a>
                <a
                  href="mailto:Robertoct952@gmail.com"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                >
                  <FaEnvelope className="inline mr-2" />
                  Email
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-yellow-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black">
          <a
            href="#home"
            className="block text-yellow-300 px-4 py-2 hover:bg-gray-100"
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-yellow-300 px-4 py-2 hover:bg-gray-100"
          >
            About
          </a>
          <a
            href="#github"
            className="block text-yellow-300 px-4 py-2 hover:bg-gray-100"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block text-yellow-300 px-4 py-2 hover:bg-gray-100"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
