import React from "react";
import "../styles/Question.css";
import pic from "../assets/pana.png";
export default function Question() {
  return (
    <div className="question">
      <div className="container">
        <div className="ques_img">
          <img src={pic} alt="" />
        </div>

        <div className="ques_info">
          <h1>How to design your site footer like we did?</h1>
          <p>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}
