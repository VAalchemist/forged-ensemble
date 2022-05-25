import React from 'react';
import music from "../images/home.mp4";
import { Background } from "../components/login.styles";
import { BeatPad } from '../components/studio.styles';


function Studio() {
  return (

    <div className='max-w-screen-lg p-4 mx-auto'>
      <div className='grid grid-cols-4 md:grid-cols-3 gap-4 '>
        <Background autoPlay loop muted  >
          <source src={music} type="video/mp4" />
        </Background>
        
        <BeatPad data-note='C' className="bg-[#00dfff]">C</BeatPad>
          <div data-note='Db' className=" w-28 sm:w-40 md:w-full h-28 sm:h-36 md:h-60 lg:h-72 shadow-2xl shadow-orange-100 pb-full rounded-xl bg-[#ff8f00]">Db</div>
          <div data-note='D' className=" w-28 sm:w-40 md:w-full h-28 sm:h-36 md:h-60 lg:h-72 shadow-2xl shadow-orange-100 pb-full rounded-xl bg-[#FC77EB]">D</div>
          <div data-note='Eb' className=" w-28 sm:w-40 md:w-full h-28 sm:h-36 md:h-60 lg:h-72 shadow-2xl shadow-orange-100 pb-full rounded-xl bg-[#36EB42]">E</div>
          <div data-note='E' className=" w-28 sm:w-40 md:w-full h-28 sm:h-36 md:h-60 lg:h-72 shadow-2xl shadow-orange-100 pb-full rounded-xl bg-[#00dfff]">Eb</div>
          <div data-note='F' className=" w-28 sm:w-40 md:w-full h-28 sm:h-36 md:h-60 lg:h-72 shadow-2xl shadow-orange-100 pb-full rounded-xl bg-[#ff8f00]">F</div>
          <div data-note='Gb' className=" w-28 sm:w-40 md:w-full h-28 sm:h-36 md:h-60 lg:h-72 shadow-2xl shadow-orange-100 pb-full rounded-xl bg-[#FC77EB]">Gb</div>
          <div data-note='G' className=" w-28 sm:w-40 md:w-full h-28 sm:h-36 md:h-60 lg:h-72 shadow-2xl shadow-orange-100 pb-full rounded-xl bg-[#36EB42]">G</div>
          <div data-note='Ab' className=" w-28 sm:w-40 md:w-full h-28 sm:h-36 md:h-60 lg:h-72 shadow-2xl shadow-orange-100 pb-full rounded-xl bg-[#00dfff]">Ab</div>
          <div data-note='A' className=" w-28 sm:w-40 md:w-full h-28 sm:h-36 md:h-60 lg:h-72 shadow-2xl shadow-orange-100 pb-full rounded-xl bg-[#ff8f00]">A</div>
          <div data-note='Bb' className=" w-28 sm:w-40 md:w-full h-28 sm:h-36 md:h-60 lg:h-72 shadow-2xl shadow-orange-100 pb-full rounded-xl bg-[#FC77EB]">Bb</div>
          <div data-note='B' className=" w-28 sm:w-40 md:w-full h-28 sm:h-36 md:h-60 lg:h-72 shadow-2xl shadow-orange-100 pb-full rounded-xl bg-[#36EB42]">B</div>

      </div>
  </div>

  )
}

export default Studio
