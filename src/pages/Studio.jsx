import React from 'react';
import { Link } from "react-router-dom";
import music from "../images/home.mp4";
import { Background } from "../components/login.styles";

function Studio() {
  return (
    <header className=''>
      <Background autoPlay loop muted>
        <source src={music} type="video/mp4" />
      </Background>
      <div className='flex justify-center items-center h-screen'>
        <div className='bg-white w-[500px] h-[500px]'>
        <div data-note='C' className='bg-[#00dfff]'></div>
        <div data-note='Db' className='bg-[#00dfff]'></div>
        <div data-note='D' className='bg-[#00dfff]'></div>
        <div data-note='E' className='bg-[#ff8f00]'></div>
        <div data-note='Eb' className='bg-[#ff8f00]'></div>
        <div data-note='F' className='bg-[#ff8f00]'></div>
        <div data-note='Gb' className='bg-[#FC77EB]'></div>
        <div data-note='G' className='bg-[#FC77EB]'></div>
        <div data-note='Ab' className='bg-[#FC77EB]'></div>
        <div data-note='A' className='bg-[#36EB42]'></div>
        <div data-note='Bb' className='bg-[#36EB42]'></div>
        <div data-note='B' className='bg-[#36EB42]'></div>
      </div>
      </div>      
    </header>
  )
}

export default Studio
