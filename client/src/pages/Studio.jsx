import { Howl, Howler } from 'howler';
import music from "../images/home.mp4";
import { Background } from "../components/login.styles";
import {
  BlueBeatPad,
  PinkBeatPad,
  GreenBeatPad,
  OrangeBeatPad
} from '../components/studio.styles';

import Q from '../drum kit/bewp.wav';
import W from '../drum kit/boom.wav';
import E from '../drum kit/clap.wav';
import R from '../drum kit/deepkick.wav';
import A from '../drum kit/dewb.wav';
import S from '../drum kit/hihat.wav';
import D from '../drum kit/kick.wav';
import F from '../drum kit/shake.wav';
import Z from '../drum kit/shortclap.wav';
import X from '../drum kit/shortHH.wav';
import C from '../drum kit/shortkick.wav';
import V from '../drum kit/shortshake.wav';




function Studio() {

  const q = (Q);
  const w = (W);
  const e = (E);
  const r = (R);
  const a = (A);
  const s = (S);
  const d = (D);
  const f = (F);
  const z = (Z);
  const x = (X);
  const c = (C);
  const v = (V);
  

  window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; //do nothing if already processed
    }

    console.log(event.key);

    switch (event.key) {
    case "q":
        Beats(q);
      break;
    case "w":
      Beats(w);
      break;
    case "e":
      Beats(e);
      break;
      case "r":
        Beats(r);
        break;
      case "a":
        Beats(a);
        break;
      case "s":
        Beats(s);
        break;
      case "d":
        Beats(d);
        break;
      case "f":
        Beats(f);
        break;
      case "z":
        Beats(z);
        break;
      case "x":
        Beats(x);
        break;
      case "c":
        Beats(c);
        break;
      case "v":
        Beats(v);
        break;
    default:
      return; // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
  }, true);
  




  const Beats = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  };

  Howler.volume(0.5);

  return (
    <div className=' max-w-screen-lg p-4 mx-auto mt-20 lg:mt-2'>
      <div className='grid grid-cols-4 md:grid-cols-3 gap-4 '>
        <Background autoPlay loop muted  >
          <source src={music} type="video/mp4" />
        </Background>
        
        
        <BlueBeatPad id='0' onClick={() => Beats(q)} data-note='Q'>Q</BlueBeatPad>
        <OrangeBeatPad id='1' onClick={() => Beats(w)} data-note='W'>W</OrangeBeatPad>
        <PinkBeatPad id='2' onClick={() => Beats(e)} data-note='E'>E</PinkBeatPad>
        <GreenBeatPad id='3' onClick={() => Beats(r)} data-note='R'>R</GreenBeatPad>
        <BlueBeatPad id='4' onClick={() => Beats(a)} data-note='A'>A</BlueBeatPad>
        <OrangeBeatPad id='5' onClick={() => Beats(s)} data-note='S'>S</OrangeBeatPad>
        <PinkBeatPad id='6' onClick={() => Beats(d)} data-note='D'>D</PinkBeatPad>
        <GreenBeatPad id='7' onClick={() => Beats(f)} data-note='F'>F</GreenBeatPad>
        <BlueBeatPad id='8' onClick={() => Beats(z)} data-note='Z'>Z</BlueBeatPad>
        <OrangeBeatPad id='9' onClick={() => Beats(x)} data-note='X'>X</OrangeBeatPad>
        <PinkBeatPad id='10' onClick={() => Beats(c)} data-note='C'>C</PinkBeatPad>
        <GreenBeatPad id='11' onClick={() => Beats(v)} data-note='V'>V</GreenBeatPad>

      </div>
  </div>
)}

export default Studio;
