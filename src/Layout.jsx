import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Display from "./components/Display";
import Footer from "./components/Footer";
import "./index.css";

const Layout = () => {
  return (
    <div className="font-page">
      <Navbar />
      <div className="pt-16">
        <Home />
        <About />
        <Display />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
