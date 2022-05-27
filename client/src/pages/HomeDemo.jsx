import React from "react";
import {
    BlueBeatPad,
    PinkBeatPad,
    GreenBeatPad,
    OrangeBeatPad
  } from "../components/demo.styles"
import { Howl } from "howler";
import jazz from '../loops/jazz_bass.wav'
import synth from '../loops/synth_bass.wav'
import drum from '../drum kit/dewb.wav';
import clap from '../drum kit/clap.wav';


function Demo() {

  const Jazz = (jazz)
  const Synth = (synth)
  const Drum = (drum)
  const Clap = (clap)

  const Beats = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  };

  return (
    <div className="fixed w-full h-screen flex flex-wrap justify-around items-center p-[8rem] mx-auto mt-20 bottom-[2rem]">
      <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
      <BlueBeatPad
        className="h-[8rem] w-[8rem] bg-blue-700 rounded-[10px] p-2"
        onClick={() => Beats(Jazz)}
      > 
      Jazz
      </BlueBeatPad>
      <OrangeBeatPad
        className="h-[8rem] w-[8rem] rounded-[10px]"
        onClick={() => Beats(Synth)}
      >
        Synth
      </OrangeBeatPad>
      <PinkBeatPad
        className="h-[8rem] w-[8rem] rounded-[10px]"
        onClick={() => Beats(Drum)}
      >
        Drum
      </PinkBeatPad>
      <GreenBeatPad
        className="h-[8rem] w-[8rem] rounded-[10px]"
        onClick={() => Beats(Clap)}
      >
        Clap
      </GreenBeatPad>
    </div>
    </div>
  );
}

export default Demo;
