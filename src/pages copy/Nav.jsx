import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaDonate,
  FaSpotify,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import music from "../images/home.mp4";
import { Background, BgImg } from "../components/login.styles";
import Logo from "../images/board.png";
import { NavItem, LogOut, Ham, Li } from "../components/nav.stlyes";
import Music from '../images/MainBG.png';

function Nav() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      <Background autoPlay loop muted>
        <source src={music} type="video/mp4" />
      </Background>
      <BgImg src={Music}/>

      <nav className="fixed w-full h-[80px] flex justify-between items-center px-4">
        <div>
          <img src={Logo} alt="Logo Image" style={{ width: "170px" }} />
        </div>

        <div className=" gap-5 hidden md:flex">
          <NavItem to="/studio">Studio</NavItem>
          <NavItem to="/profile">Profile</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          {/* connect to logout screen */}
          <LogOut type="submit">
            <a href="/login">Log Out</a>
          </LogOut>
        </div>

        {/* hamburger */}
        <Ham onClick={handleClick} className="md:hidden z-10 ">
          {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
        </Ham>
        {/* mobile menu */}
        <ul
          className={
            nav ? 'fixed right-0 top-0 w-[100%] h-screen bg-black flex flex-col justify-center items-center  ease-in-out duration-1000 opacity-[90%] md:hidden' : 'ease-in-out duration-1000 fixed right-[-100%] top-0 w-[100%] h-screen bg-black flex flex-col justify-center items-center opacity-[0]'

            // !nav
            //   ? "hidden"
            //   : "absolute top-0 left-0 w-full h-screen  bg-black flex flex-col justify-center items-center opacity-[85%] md:hidden transition duration-300 ease-linear"
              
          }
        >
          <Li className="mb-16 text-4xl">
            <Link
              onClick={handleClick}
              to="/studio"
              duration={500}
            >
              Studio
            </Link>
          </Li>
          <br />
          <Li className="mb-16 text-4xl">
            <Link
              onClick={handleClick}
              to="/profile"
              duration={500}
            >
              Profile
            </Link>
          </Li>
          <br />
          <Li className="mb-16 text-4xl">
            <Link
              onClick={handleClick}
              to="/contact"
              duration={500}
            >
              Contact
            </Link>
          </Li>
          <br />
          <Li className="mb-16 text-4xl">
            <button className="font-bold" type="submit">
              Log out
            </button>
          </Li>
          <br />
        </ul>
      </nav>
      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 opacity-[88%]">
        <ul>
          <li className="w-[160px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#29A74F] px-4 rounded-tr-[10px] rounded-br-[10px]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.spotify.com/us/"
            >
              Spotify <FaSpotify size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 px-4 rounded-tr-[10px] rounded-br-[10px]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] px-4 rounded-tr-[10px] rounded-br-[10px]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.facebook.com/"
            >
              Facebook <FaFacebookSquare size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#33A2B7] px-4 rounded-tr-[10px] rounded-br-[10px]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://twitter.com/i/flow/login"
            >
              Twitter <FaTwitterSquare size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#9050E5] px-4 rounded-tr-[10px] rounded-br-[10px]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Donate <FaDonate size={30} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
