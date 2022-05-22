import React from 'react';
import { Link } from "react-router-dom";
import music from "../images/home.mp4";
import { Background } from "../components/login.styles";

function Studio() {
  return (
    <>
      <Background autoPlay loop muted>
        <source src={music} type="video/mp4" />
      </Background>
      {/* soundboard container */}
      <div className='max-w-screen-lg p-4 mx-auto'>
        <div className='grid grid-cols-4 md:grid-cols-3 gap-4 mt-12'>
          

        <div data-note='C' class="w-full h-full shadow-2xl shadow-orange-100 pb-full rounded-xl bg-[#00dfff]">C</div>
    <div data-note='Db' class="w-full h-28 shadow-2xl shadow-orange-100 pb-full rounded-xl bg-[#ff8f00]">Db</div>
    <div data-note='D' class="w-full h-28 shadow-2xl shadow-orange-100 pb-full rounded-xl bg-[#FC77EB]">D</div>
    <div data-note='E' class="w-full h-28 shadow-2xl shadow-orange-100 pb-full rounded-xl bg-[#36EB42]">E</div>
    <div data-note='Eb' class="w-full h-28 shadow-2xl shadow-orange-100 pb-full rounded-xl bg-[#00dfff]">Eb</div>
    <div data-note='F' class="w-full h-28 shadow-2xl shadow-orange-100 pb-full rounded-xl bg-[#ff8f00]">F</div>
    <div data-note='Gb' class="w-full h-28 shadow-2xl shadow-orange-100 pb-full rounded-xl bg-[#FC77EB]">Gb</div>
    <div data-note='G' class="w-full h-28 shadow-2xl shadow-orange-100 pb-full rounded-xl bg-[#36EB42]">G</div>
    <div data-note='Ab' class="w-full h-28 shadow-2xl shadow-orange-100 pb-full rounded-xl bg-[#00dfff]">Ab</div>
    <div data-note='A' class="w-full h-28 shadow-2xl shadow-orange-100 pb-full rounded-xl bg-[#ff8f00]">A</div>
    <div data-note='Bb' class="w-full h-28 shadow-2xl shadow-orange-100 pb-full rounded-xl bg-[#FC77EB]">Bb</div>
    <div data-note='B' class="w-full h-28 shadow-2xl shadow-orange-100 pb-full rounded-xl bg-[#36EB42]">B</div>
          
          
      </div>
      </div>      
    </>
  )
}

export default Studio
