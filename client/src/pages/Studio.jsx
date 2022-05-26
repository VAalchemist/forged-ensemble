import { Howl, Howler } from 'howler';
import {BeatPad} from '../components/studio.styles';
import { Component } from 'react';
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


const notes = [
  { sound: Q, label: 'C' },
  { sound: W, label: 'Db' },
  { sound: E, label: 'D' },
  { sound: R, label: 'Eb'},
  { sound: A, label: 'E' },
  { sound: S, label: 'F' },
  { sound: D, label: 'Gb'},
  { sound: F, label: 'G' },
  { sound: Z, label: 'Ab'},
  { sound: X, label: 'A'},
  { sound: C, label: 'Bb'},
  { sound: V, label: 'B'}  
];





function Studio() {
  
  SoundPlay = (src) => {
    const sound = new Howl({ src })
    
    sound.play(notes);
  };

  const [beat, setBeat] = useState('');

  const handleClick = (event) => {
    
  };


  return (
    <div className=' max-w-screen-lg p-4 mx-auto mt-20 lg:mt-2'>
      <div className='grid grid-cols-4 md:grid-cols-3 gap-4 '>
        <Background autoPlay loop muted  >
          <source src={music} type="video/mp4" />
        </Background>
        
        
        <BlueBeatPad id='0' onClick={handleClick} data-note='Q'>Q</BlueBeatPad>
        <OrangeBeatPad  data-note='W'>W</OrangeBeatPad>
        <PinkBeatPad data-note='E'>E</PinkBeatPad>
        <GreenBeatPad data-note='R'>R</GreenBeatPad>
        <BlueBeatPad data-note='A'>A</BlueBeatPad>
        <OrangeBeatPad data-note='S'>S</OrangeBeatPad>
        <PinkBeatPad data-note='D'>D</PinkBeatPad>
        <GreenBeatPad data-note='F'>F</GreenBeatPad>
        <BlueBeatPad data-note='Z'>Z</BlueBeatPad>
        <OrangeBeatPad data-note='X'>X</OrangeBeatPad>
        <PinkBeatPad data-note='C'>C</PinkBeatPad>
        <GreenBeatPad data-note='V'>V</GreenBeatPad>

      </div>
  </div>
  )

}



// class Studio extends Component {
 

//   RenderNote = () => {
//     return notes.map((noteObj, index) => {
//       return (
//         <BeatPad key={index} onClick={()=> this.SoundPlay(noteObj.sound)}>
//           {noteObj.label}
//         </BeatPad>
//       );
//     })
//   }

//   render() {
//     Howler.volume(1.0);
//     return <div>

//         	{this.RenderNote()}
// </div>;
//   }
// }
export default Studio;
