import React from 'react'
import { FaBars } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Logo from '../images/board.png'
import {NavItem} from '../components/nav.stlyes'


function Contact() {
  return (
    <>
       <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-black">
       
       <div>
         <img src={Logo} alt="Logo Image" style={{width:'150px'}}/>
       </div>
       <NavItem className="navTop text-white px-2" to="/studio">
            Studio
          </NavItem>
          <NavItem className="navTop text-white px-2" to="/profile">
            Profile
          </NavItem>
          <NavItem className="navTop text-white px-2" to="/contact">
            Contact
          </NavItem>
        <button type="submit" className="text-white">
            Log out
          </button>
       

        {/* hamburger */}
        <div class Name='hidden'>
          <FaBars />
        </div>

        <div className='hidden'>
        <Link className="navTop text-white px-2" to="/studio">
            Studio
          </Link>
          <Link className="navTop text-white px-2" to="/profile">
            Profile
          </Link>
          <Link className="navTop text-white px-2" to="/contact">
            Contact
          </Link>
        <button type="submit" className="text-white">
            Log out
          </button>
        </div>
        </nav>
    </>
  )
}

export default Contact
