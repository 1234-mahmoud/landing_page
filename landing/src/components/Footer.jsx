import React from "react";
import "../styles/Footer.css";
import logo from "../assets/footer_icon.svg";
import social_1 from "../assets/Social_1.svg";
import social_2 from "../assets/Social_2.svg";
import social_3 from "../assets/Social_3.svg";
import social_4 from "../assets/Social_4.svg";
import send from "../assets/send.svg";
export default function Footer() {
  const social = [social_1, social_2, social_3, social_4];
  const company = ["About us", "Blog", "Contact us", "Pricing", "Testimonials"];
  const support = [
    "Help center",
    "Terms of service",
    "Legal",
    "Privacy policy",
    "Status",
  ];
  return (
    <div className="footer">
      <h1>Pellentesque suscipit fringilla libero eu.</h1>
      <button>Learn More </button>
      <div className="container">
        <div className="footer_contact">
          <div className="footer_logo">
            
            <h1><img src={logo} alt="" /> Nexcent</h1>
          </div>
          <p>copyright &copy;{new Date().getFullYear()}Nexcent ltd.</p>
          <p>All rights reserved</p>
          <div className="footer_social_links">
            {social.map((s, idx) => (
              <a href="" key={idx}>
                <img src={s} alt="" />
              </a>
            ))}
          </div>
        </div>
        <div className="footer_info">
        <div className="footer_com">
          <h3>Company</h3>
          {company.map((c, idx) => (
            <a href="" key={idx}>
              {c}
            </a>
          ))}
        </div>
        <div className="footer_sup">
          <h3>support</h3>
          {support.map((s, idx) => (
            <a href="" key={idx}>
              {s}
            </a>
          ))}
        </div>
        <div className="footer_mail">
          <h3>Stay up to date</h3>
          <div className="input_mail">
            <input type="email" name="" id="" placeholder="enter your email"/>
            <img src={send} alt="" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
