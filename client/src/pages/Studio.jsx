import React from 'react';
import music from "../images/home.mp4";
import { Background } from "../components/login.styles";
import {
  BlueBeatPad,
  PinkBeatPad,
  GreenBeatPad,
  OrangeBeatPad
} from '../components/studio.styles';


function Studio() {
  return (

    <div className=' max-w-screen-lg p-4 mx-auto mt-20 lg:mt-2'>
      <div className='grid grid-cols-4 md:grid-cols-3 gap-4 '>
        <Background autoPlay loop muted  >
          <source src={music} type="video/mp4" />
        </Background>
        
        <BlueBeatPad data-note='C'>C</BlueBeatPad>
        <OrangeBeatPad data-note='Db'>Db</OrangeBeatPad>
        <PinkBeatPad data-note='D'>D</PinkBeatPad>
        <GreenBeatPad data-note='Eb'>E</GreenBeatPad>
        <BlueBeatPad data-note='E'>Eb</BlueBeatPad>
        <OrangeBeatPad data-note='F'>F</OrangeBeatPad>
        <PinkBeatPad data-note='Gb'>Gb</PinkBeatPad>
        <GreenBeatPad data-note='G'>G</GreenBeatPad>
        <BlueBeatPad data-note='Ab'>Ab</BlueBeatPad>
        <OrangeBeatPad data-note='A'>A</OrangeBeatPad>
        <PinkBeatPad data-note='Bb'>Bb</PinkBeatPad>
        <GreenBeatPad data-note='B'>B</GreenBeatPad>

      </div>
  </div>

  )
}

export default Studio
