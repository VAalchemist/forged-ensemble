import React from "react";
import { HomeD } from "../components/demo.styles";
import { Howl } from "howler";


function Demo() {

  const beat =
    "https://d9olupt5igjta.cloudfront.net/samples/sample_files/134020/a547d3a9c73cd76c18a2b33e32f51c8c8ea89e0c/mp3/_Merged_TET_808_1.mp3";

  const bass_loop =
    "https://d9olupt5igjta.cloudfront.net/samples/sample_files/134307/b3270c762952582aa2e6ed99ee8b42d1768f3cf8/mp3/_house_bass_loop_122_bpm_Dm.mp3";

  const hi_hats =
    "https://d9olupt5igjta.cloudfront.net/samples/sample_files/134248/d834f0d60563a431efb2da3d2d2566d7c0d43e5c/mp3/_Aggresor_Hats_150bpm.mp3";

  const beat_loop =
    "https://d9olupt5igjta.cloudfront.net/samples/sample_files/134220/b5929595af8432be8faf61d8bd13bdbd44a709e1/mp3/_Beat_Loop_Trap_styles_808_Bass_Happy_goods_Tmp_140.mp3";

  const Beats = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  };

  return (
    <div className="fixed w-full h-screen  flex flex-wrap justify-around items-center p-[8rem]">
      <HomeD
        className="h-[8rem] w-[8rem] bg-blue-700 rounded-[10px] p-2"
        onClick={() => Beats(beat)}
      >
        Beat
      </HomeD>
      <HomeD
        className="h-[8rem] w-[8rem] bg-pink-500 rounded-[10px]"
        onClick={() => Beats(bass_loop)}
      >
        Bass loop
      </HomeD>
      <HomeD
        className="h-[8rem] w-[8rem] bg-[#F9EF2B] rounded-[10px]"
        onClick={() => Beats(hi_hats)}
      >
        Hi Hats
      </HomeD>
      <HomeD
        className="h-[8rem] w-[8rem] bg-[#00DE43] rounded-[10px]"
        onClick={() => Beats(beat_loop)}
      >
        Beat loop
      </HomeD>
    </div>
  );
}

export default Demo;
