import React from 'react'
import '../styles/Header.css'
import logo from '../assets/Icon.svg'
export default function Header() {
  return (
    <div className='header'>
      <div className="container">
        <div className="h_logo">
            <img src={logo} alt="" />
            <h1>Nexcent</h1>
        </div>
        <div className="h_links">
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Features</a>
                </li>
                <li>
                    <a href="">Services</a>
                </li>
                <li>
                    <a href="">Product</a>
                </li>
                <li>
                    <a href="">Testimonials</a>
                </li>
                <li>
                    <a href="">FAQ</a>
                </li>
            </ul>
        </div>
        <div className="h_btns">
            <button>Login</button>
            <button>Sign Up</button>
        </div>
      </div>
    </div>
  )
}
