import React, { useState } from "react";
import "./MySlider.css";
import img1 from "../assets/Illustration.png";
import img2 from "../assets/Illustration.png";
import img3 from "../assets/Illustration.png";

export default function MySlider() {
  const [count, setCount] = useState(0);
  const imgs = [img1, img2, img3];
  const extendedImgs = [imgs[imgs.length - 1], ...imgs, imgs[0]];

  const navigateToSlide = (index) => {
    setCount(index);
  };

  return (
    <div className="slider">
      <div className="container">
        <div
          className="slider_img"
          style={{
            transition: "transform .5s ease-in-out",
            transform: `translateX(-${count * 100}%)`,
          }}
        >
          {extendedImgs.map((img, index) => (
            <div key={index} className="img_com">
              <div className="slider_info">
                <h1>Lessons and insights</h1>
                <h1>from 8 years</h1>
                <p>
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <button>Register</button>
              </div>
              <div className="prod_img">
                <img src={img} alt="" />
              </div>
            </div>
          ))}
        </div>

        {/* Bullets */}
        <div className="bullets">
          {imgs.map((_, index) => (
            <span
              key={index}
              className={`bullet ${index === count ? "active" : ""}`}
              onClick={() => navigateToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
