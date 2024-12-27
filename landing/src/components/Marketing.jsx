import React from "react";
import "../styles/Marketing.css";
import pic from "../assets/Right.svg";
export default function Marketing() {
  const data = [
    "Creating Streamlined Safeguarding Processes with OneRen",
    "What are your safeguarding responsibilities and how can you manage them?",
    "Revamping the Membership Model with Triathlon Australia",
  ];
  return (
    <div className="marketing">
      <h1>Caring is the new marketing</h1>
      <p>
        The Nexcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and lot's
        more.​
      </p>
      <div className="container">
        {data.map((d, idx) => (
          <div className="market_car" key={idx}>
            <p>{d}</p>
            <div className="mark_link">
              <a href="">Readmore</a>
              <img src={pic} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
