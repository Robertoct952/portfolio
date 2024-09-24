import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cert1 from "../assets/SQLss.png";
import cert2 from "../assets/Pythonss.png";
import cert3 from "../assets/Htmlss.png";
import cert4 from "../assets/Cshss.png";
import cert5 from "../assets/Comss.png";
import cert6 from "../assets/Javass.png";

const Certificates = () => {
  const certificates = [
    { src: cert1, alt: "Certificate 1" },
    { src: cert2, alt: "Certificate 2" },
    { src: cert3, alt: "Certificate 3" },
    { src: cert4, alt: "Certificate 4" },
    { src: cert5, alt: "Certificate 5" },
    { src: cert6, alt: "Certificate 6" },
  ];

  const NextArrow = ({ className, style, onClick }) => {
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = ({ className, style, onClick }) => {
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="py-12 text-yellow-400 w-full">
      <Slider {...settings}>
        {certificates.map((certificate, index) => (
          <div key={index} className="flex items-center justify-center p-2">
            <img
              className="w-full h-auto"
              src={certificate.src}
              alt={certificate.alt}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Certificates;
