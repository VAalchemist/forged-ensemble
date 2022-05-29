import React from "react";
import {
  BlueBeatPad,
  PinkBeatPad,
  GreenBeatPad,
  OrangeBeatPad
} from "../components/demo.styles";
import { Howl } from "howler";
import drum from "../drum kit/dewb.wav";
import clap from "../drum kit/clap.wav";
import tom1 from "../drum kit/tom-1.wav";
import tom2 from "../drum kit/tom-2.wav";

function Demo() {
  const Drum = drum;
  const Clap = clap;
  const Tom1 = tom1;
  const Tom2 = tom2;

  const Beats = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  };

  return (
    <div className="fixed w-full h-screen flex flex-wrap justify-around items-center mx-auto mt-28 md:mt-12">
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 bg-gray-600 bg-opacity-75 border-8 p-2 border-gray-800 rounded-xl">
        {/* <SoundBoard> */}
        <BlueBeatPad
          className="h-[8rem] w-[8rem] rounded-[10px]"
          onClick={() => Beats(Tom1)}
        ></BlueBeatPad>
        <OrangeBeatPad
          className="h-[8rem] w-[8rem] rounded-[10px]"
          onClick={() => Beats(Tom2)}
        ></OrangeBeatPad>
        <PinkBeatPad
          className="h-[8rem] w-[8rem] rounded-[10px]"
          onClick={() => Beats(Drum)}
        ></PinkBeatPad>
        <GreenBeatPad
          className="h-[8rem] w-[8rem] rounded-[10px]"
          onClick={() => Beats(Clap)}
        ></GreenBeatPad>
        {/* </SoundBoard> */}
      </div>
    </div>
  );
}

export default Demo;
