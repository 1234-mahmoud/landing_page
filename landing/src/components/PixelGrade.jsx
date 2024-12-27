import React from "react";
import "../styles/PixelGrade.css";
import pic from "../assets/Frame 35.png";
export default function PixelGrade() {
  return (
    <div className="pixelGrade">
      <div className="container">
        <div className="pix_img">
          <img src={pic} alt="" />
        </div>
        <div className="pixel_info">
          <h1>The unseen of spending three years at Pixelgrade</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eum
            eligendi aliquid autem placeat velit vitae ab alias nulla neque
            soluta mollitia, harum quae iste? Eius nisi nobis vero labore?
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}
