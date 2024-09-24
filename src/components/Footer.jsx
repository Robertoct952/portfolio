import React from "react";
import { FaEnvelope, FaFileAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6" id="contact">
      <div className="container mx-auto px-4 text-center">
        {/* Contact Title with Icon */}
        <div className="flex justify-center items-center mb-4">
          <FaEnvelope className="text-white mr-2" size="24" />
          <h2 className="text-2xl font-bold">Contact</h2>
        </div>

        {/* Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="/resume.docx"
            className="flex items-center space-x-2 text-yellow-300 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFileAlt className="text-yellow-300" />
            <span>Resume</span>
          </a>
          <a
            href="mailto:Robertoct952@gmail.com"
            className="flex items-center space-x-2 text-yellow-300 hover:underline"
          >
            <FaEnvelope className="text-yellow-300" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
