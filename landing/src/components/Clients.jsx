import React from 'react'
import '../styles/Clients.css'
import logo1 from '../assets/Logo1.svg';
import logo2 from '../assets/Logo2.svg';
import logo3 from '../assets/Logo3.svg';
import logo4 from '../assets/Logo4.svg';
import logo5 from '../assets/Logo5.svg';
import logo6 from '../assets/Logo6.svg';
import logo7 from '../assets/Logo7.svg';
export default function Clients() {
    const imgs = [logo1,logo2,logo3,logo4,logo5,logo6,logo7]
  return (
    <div className='clients'>
      <div className="container">
        <h1>Our Clients</h1>
        <p>We have been working with some Fortune 500+ clients</p>
       <div className="clients_logo">
       {imgs.map((i)=>(
            <img src={i} alt="" key={i}/>
        ))}
       </div>
      </div>
    </div>
  )
}
