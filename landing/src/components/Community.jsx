import React from "react";
import "../styles/Community.css";
import icon1 from "../assets/Icon (1).svg";
import icon2 from "../assets/Icon (2).svg";
import icon3 from "../assets/Icon (3).svg";
export default function Community() {
  const data = [
    {
      id: 1,
      icon: icon1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },

    {
      id: 2,
      icon: icon2,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },

    {
      id: 3,
      icon: icon3,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
  ];
  return (
    <div className="community">
        <h1>Manage your entire community in a single system</h1>
        <p>Who is Nextcent suitable for?</p>
      <div className="container">
        {
            data.map((i)=>(
                <div className="com_info" key={i.id}>
                    <img src={i.icon} alt="" />
                    <h1>{i.title}</h1>
                    <p>{i.description}</p>
                </div>
            ))
        }
      </div>
    </div>
  );
}
