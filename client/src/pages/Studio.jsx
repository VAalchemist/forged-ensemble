import React, { Component } from 'react';
import { Howl, Howler } from 'howler';
import { BeatPad } from '../components/studio.styles';
// import music from "../images/home.mp4";
// import { Background } from "../components/login.styles";

// import {
//   BlueBeatPad,
//   PinkBeatPad,
//   GreenBeatPad,
//   OrangeBeatPad
// } from '../components/studio.styles';
import C from '../notes/C.mp3';
import Db from '../notes/Db.mp3';
import D from '../notes/D.mp3';
import Eb from '../notes/Eb.mp3';
import E from '..//notes/E.mp3';
import F from '..//notes/F.mp3';
import Gb from '../notes/Gb.mp3';
import G from '../notes/G.mp3';
import Ab from '../notes/Ab.mp3';
import A from '../notes/A.mp3';
import Bb from '../notes/Bb.mp3';
import B from '../notes/B.mp3';

const notes = [
  { sound: C, label: 'C' },
  { sound: Db, label: 'Db' },
  { sound: D, label: 'D' },
  { sound: Eb, label: 'Eb'},
  { sound: E, label: 'E' },
  { sound: F, label: 'F' },
  { sound: Gb, label: 'Gb'},
  { sound: G, label: 'G' },
  { sound:Ab, label: 'Ab'},
  { sound: A, label: 'A'},
  { sound: Bb, label: 'Bb'},
  { sound: B, label: 'B'}  
];


class Studio extends Component {
  SoundPlay = (src) => {
    const sound = new Howl({ src })
    
    sound.play();
  };

  RenderNote = () => {
    return notes.map((noteObj, index) => {
      return (
        <BeatPad key={index} onClick={()=> this.SoundPlay(noteObj.sound)}>
          {noteObj.label}
        </BeatPad>
      );
    })
  }

  render() {
    Howler.volume(1.0);
    return <div>
    {this.RenderNote()}
    </div>;
  }
}

export default Studio;
