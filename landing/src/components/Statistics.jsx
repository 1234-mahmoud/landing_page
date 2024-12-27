import React from "react";
import "../styles/Statistics.css";
import icon_1 from "../assets/Icon (4).svg";
import icon_2 from "../assets/Group 2.svg";
import icon_3 from "../assets/Icon (5).svg";
import icon_4 from "../assets/Icon (6).svg";
export default function Statistics() {
    const data=[
        {
            id:1,
            icon:icon_1,
            num:2245341,
            title:'Members',
        },
        {
            id:2,
            icon:icon_2,
            num:46328,
            title:'Clubs',
        },

        {
            id:3,
            icon:icon_3,
            num:828867,
            title:'Event Bookings',
        },

        {
            id:4,
            icon:icon_4,
            num:1926436,
            title:'Payments',
        },
    ]
  return (
    <div className="stat">
      <div className="container">
        <div className="stat_info">
            <h1>Helping a local </h1>
            <h1>business reinvent itself</h1>
            <p>We reached here with our hard work and dedication</p>
        </div>
      <div className="stat_content">
      {
        data.map((d)=>(
            <div className="stat_data" key={d.id}>
            <div className="stat_data_icon">
                <img src={d.icon} alt="" />
            </div>
            <div className="stat_data_nums">
                <span>{new Intl.NumberFormat('en-In',{ maximumSignificantDigits: 3 }).format(d.num)}</span>
                <span>{d.title}</span>
            </div>
            </div>
        ))
      }
      </div>
      </div>
    </div>
  );
}
