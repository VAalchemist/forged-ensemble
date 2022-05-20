import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Logo from '../images/board.png'
import {NavItem, LogOut, Ham, Li } from '../components/nav.stlyes'



function Home() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
       <nav className="fixed w-full h-[80px] flex justify-between items-center px-4">
       
       <div>
         <img src={Logo} alt="Logo Image" style={{width:'150px'}}/>
       </div>
      
      <div className=" gap-5 hidden md:flex ">
       <NavItem to="/studio">
            Studio
          </NavItem>
          <NavItem to="/profile">
            Profile
          </NavItem>
          <NavItem to="/contact">
            Contact
          </NavItem>
        <LogOut type="submit">
            Log Out
          </LogOut>
          </div>
    
        {/* hamburger */}
        <Ham onClick= {handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars size={25}/> : <FaTimes size={25} />}
        </Ham>

        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center opacity-[85%]'}>
        <Li className="mb-16 text-4xl">
        <Link onClick={handleClick} to="/studio"smooth={true} duration={500}>
            Studio
          </Link>
          </Li>
          <br/>
        <Li className="mb-16 text-4xl">
        <Link onClick={handleClick} to="/profile"smooth={true} duration={500}>
            Profile
          </Link>
          </Li>
          <br/>
        <Li className="mb-16 text-4xl">
        <Link onClick={handleClick} to="/contact"smooth={true} duration={500}>
            Contact
          </Link>
          </Li>
          <br/>
        <Li className="mb-16 text-4xl">
        <button className="font-bold" type="submit">
            Log out
          </button>
          </Li>
          <br/>
        </ul>
        
        </nav>
    </>
  )
}

export default Home
