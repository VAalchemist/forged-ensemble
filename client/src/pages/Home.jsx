import React from "react";
import Nav from './Nav'
import Demo from './HomeDemo'
import { Feed } from '../components/home.styles'
import { CgMusicSpeaker, CgMusic } from 'react-icons/cg';


function Home() {
  return (
    <>
    <Nav />
    <Demo />
    <div className='abosulte h-[15rem] text-white w-full justify-center items-center p-2 hidden md:flex'>
      <CgMusic size={15} />
      <CgMusicSpeaker size={40} />
      <Feed>Feed Coming Soon </Feed>
      <CgMusicSpeaker size={40} />
      <CgMusic size={15} />
    <div className='absolute w-[50%] h-14 bg-[#00bdff] z-[-1] opacity-[30%] rounded-[15px]'></div>
    {/* <div className='absolute w-80 h-14 bg-[#70ED66] skew-x-[30deg] z-[-1] mr-[12.5rem] opacity-[45%]'></div> */}
    {/* <div className='absolute w-[50px] h-12 bg-[#E040CA] skew-x-[30deg] z-[-1] ml-[15rem] opacity-[45%]'></div> */}
    {/* <div className='absolute w-[50px] h-12 bg-blue-300 skew-x-[30deg] z-[-1] ml-[25rem] opacity-[45%]'></div> */}
    {/* <div className='absolute w-[50px] h-12 bg-[#32C8E4] skew-x-[30deg] z-[-1] ml-[35rem] opacity-[45%]'></div> */}
    </div>
  
 
    </>
  );
}

export default Home;
