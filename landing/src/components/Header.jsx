import React, { useState } from 'react'
import '../styles/Header.css'
import logo from '../assets/Icon.svg'
import list from '../assets/list.svg'
import close from '../assets/close.svg'
export default function Header() {
    const [show,setShow] = useState(false);
    const showsidebar = ()=>{
        setShow(true)
    }

    const hidesidebar = ()=>{
        setShow(false)
    }
  return (
    <div className='header'>
<img src={list} alt="" className='list' onClick={showsidebar}/>
      <div className={`container ${show?'show':'hide'}`}>
        <img src={close} alt="" className='close' onClick={hidesidebar}/>
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
