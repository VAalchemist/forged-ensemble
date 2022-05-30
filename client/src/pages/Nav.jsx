import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebookSquare,
  FaSoundcloud,
  FaTwitterSquare,
  FaDonate,
  FaSpotify,
  FaEdit
} from "react-icons/fa";
import { Link } from "react-router-dom";
import music from "../images/home.mp4";
import { Background, BgImg } from "../components/login.styles";
import Logo from "../images/board.png";
import { NavItem, LogOut, Ham, Li } from "../components/nav.styles";
import Music from "../images/MainBG.png";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import Mando from '../images/Mando.png';


function Nav() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [image, setImage] = useState(false);
  const handleImage = () => setImage(!image);
  const id = Auth.getProfile().data._id;
  const { loading, data } = useQuery(QUERY_USER, { variables: { _id: id } });
  const [picState, setPicState] = useState("");
  let profilePic = '';

  useEffect(() => {
    if (data) {
      setPicState(data.singleUser.profile_pic);
      profilePic = data.singleUser.profile_pic;
    }
  });

  const handleLogout = () => {
    console.log("log out pressed");
    Auth.logout();
  };

  return (
    <>
      <Background autoPlay loop muted>
        <source src={music} type="video/mp4" />
      </Background>
      <BgImg src={Music} />

      <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 z-10">
        <div className="flex flex-row mt-4">
          <div>
            <a href="/">
              <img src={Logo} alt="mini soundboard" style={{ width: "170px" }} />
            </a>
          </div>
          <div className="flex items-center">
            <button onClick={handleImage}>
            {profilePic === '' ? (<img src={Mando} alt="" className="w-[65px] rounded-full border-2 border-pink-300"/>) : (<img src={picState} alt="" className="w-[65px] rounded-full border-2 border-pink-300"/>) }
              
                {/* src={picState}
                // {error ? (
                //     <div>
                //       <p className="error-text">Please enter valid data</p>
                //     </div>
                //   ) : null} */}

  
            </button>
            {/* <div className="ml-2 py-2 w-20 bg-white rounded-lg "> */}
            <div className={
              image
              ? "ml-2 py-2 w-20 left-[100%] bg-white rounded-lg ease-in-out duration-1000 opacity-[72%]"
              : "bg-white left-[-100%] w-20 ease-in-out duration-1000 rounded-lg ml-2 opacity-[0%]"}>
            <div className="flex row justify-center">
            <p className='block px-2 text-center'>Edit</p>
            <FaEdit className='mt-[3px]' />
            </div>
            </div>
          </div>
        </div>

        <div className=" gap-5 hidden md:flex pr-6">
          <NavItem to="/studio">Studio</NavItem>
          <NavItem to="/profile">Profile</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          {/* connect to logout screen */}
          <LogOut type="submit" onClick={handleLogout}>
            Log Out
          </LogOut>
        </div>

        {/* hamburger */}
        <Ham onClick={handleClick} className="md:hidden  m-2">
          {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
        </Ham>
        {/* mobile menu */}
        <ul
          className={
            nav
              ? "fixed right-0 top-0 w-[100%] h-screen bg-black flex flex-col justify-center items-center  ease-in-out duration-1000 opacity-[90%] md:hidden"
              : "ease-in-out duration-1000 fixed right-[-100%] top-0 w-[100%] h-screen bg-black flex flex-col justify-center items-center opacity-[0]"
          }
        >
          <Li className="mb-16 text-4xl">
            <Link onClick={handleClick} to="/studio" duration={500}>
              Studio
            </Link>
          </Li>
          <br />
          <Li className="mb-16 text-4xl">
            <Link onClick={handleClick} to="/profile" duration={500}>
              Profile
            </Link>
          </Li>
          <br />
          <Li className="mb-16 text-4xl">
            <Link onClick={handleClick} to="/contact" duration={500}>
              Contact
            </Link>
          </Li>
          <br />
          <Li className="mb-16 text-4xl">
            <button className="font-bold" type="submit" onClick={handleLogout}>
              Log Out
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
              Soundcloud <FaSoundcloud size={30} />
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
