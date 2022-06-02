import React, { useEffect, useRef } from 'react';
import { Howl, Howler } from 'howler';
import music from "../images/home.mp4";
import { Background } from "../components/login.styles";
import record from '../images/record.jpg';
import Auth from '../utils/auth';
import Nav from '../pages/Nav';
import {
  MdOutlineSave,
  MdStop,
  MdPlayArrow,
  MdFiberManualRecord
} from 'react-icons/md';
import {
  Record,
  RecordTxt,
  Controls,
  SoundBoard,
  SoundBoardBtns,
  BlueBeatPad,
  PinkBeatPad,
  GreenBeatPad,
  OrangeBeatPad,
  
} from '../components/studio.styles';

import { ADDFILE } from '../utils/mutations';
import { useMutation, useQuery } from '@apollo/client';

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
  Auth.loggedIn();

  const inputFile = useRef(null) 
  const [addFile, { error }] = useMutation(ADDFILE);
  const profile = Auth.getProfile().data;
  const id = profile._id;
  const userName = profile.firstName;

  
  const  handleUpload= async (event) => {
    const file = event.target.files[0];
    let formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'upload');
    formData.append('cloud_name', 'duty-call');
    console.log(formData)
    const data = await fetch('https://api.cloudinary.com/v1_1/duty-call/video/upload',{
            method: 'POST',
            body: formData
        })
        .then(response => response.json());

        try {
          const mutationResponse = await addFile({
            variables: { fileName: "my files", url: data.url, userId: id, artist: userName },
          });
        }
      catch (e) {
      console.log(e);
    };
  }

  
const isRecording =   

useEffect(() => {

    function beatPad(event) {
      if (event.defaultPrevented) {
        return; //do nothing if already processed
      }

      console.log(event.key.toLowerCase());

      switch (event.key.toLowerCase()) {
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
          return;
      }

      event.preventDefault();
    }


    window.addEventListener("keydown", beatPad);
    return () => {
      window.removeEventListener("keydown", beatPad)
    }
});
  

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
  
  const sounds = {
    'q': q,
    'w': w,
    'e': e,
    'r': r,
    'a': a,
    's': s,
    'd': d,
    'f': f,
    'z': z,
    'x': x,
    'c': c,
    'v': v

}

  
  const handleRecord = () => {
    console.log('recording...')


    
  }

  const handleStop = () => {
    console.log('stop recording...')
  }

  const handleStart = () => {
    console.log(' play recording...')
  }

  

  function storeBeat() {  
    var results = [];
    for (var i = 0; i < arguments.length; i++) {
        results.push(arguments[i]);
    }
    return results;
}
  
  const spawnSongArr =() => {

  }

  const handlePad = (event) => {
    console.log(event.target.getAttribute('data-note'));
    Beats(sounds[event.target.getAttribute('data-note')]);
}

const Beats = (src) => {
  const sound = new Howl({
    src,
    html5: true,
  });
  sound.play();
  console.log(storeBeat(sounds)); 
};

Howler.volume(0.5);

return (
  <>
    <Nav />
    <div className='flex justify-center items-center w-full h-screen '>
      <div >
        <Background autoPlay loop muted  >
          <source src={music} type="video/mp4" />
        </Background>


        <div className='flex justify-between items-center'>
          <div className='w-full h-44 md:mb-12'>
            <div className='border-4 border-orange-100 border-opacity-0 rounded-full fixed
hover:animate-spin hover:ml-32 hover:duration-1000 p-8 md:p-12 '>
              <Record src={record} alt="" />
            </div>
  
            <RecordTxt>For keyboard<br /> accessibility,<br /> use the<br /> following keys:<br /> Q W E R A S<br /> D F Z X C V</RecordTxt>
          </div>
          
          <div>{spawnSongArr}</div>
          
          <SoundBoardBtns>

            <Controls><MdFiberManualRecord size={25} onClick={handleRecord} /></Controls>
            <Controls><MdStop size={25} onClick={handleStop} /></Controls>
            <Controls><MdPlayArrow size={25} onClick={handleStart} /></Controls>
            <a href ='./upload'>
            <Controls><MdOutlineSave size={25}/></Controls>
            </a>
            {/* <Controls><MdOutlineSave size={30} onClick={handleClickUpload}/><input type='file' ref={inputFile} style={{display:'none'}} id='upload' onChange={handleUpload} accept='.mp3'></input></Controls> */}

          </SoundBoardBtns>
        </div>

        <SoundBoard>
          <BlueBeatPad id='0' onClick={handlePad} data-note='q'></BlueBeatPad>
          <OrangeBeatPad id='1' onClick={handlePad} data-note='w'></OrangeBeatPad>
          <PinkBeatPad id='2' onClick={handlePad} data-note='e'></PinkBeatPad>
          <GreenBeatPad id='3' onClick={handlePad} data-note='r'></GreenBeatPad>
          <BlueBeatPad id='4' onClick={handlePad} data-note='a'></BlueBeatPad>
          <OrangeBeatPad id='5' onClick={handlePad} data-note='s'></OrangeBeatPad>
          <PinkBeatPad id='6' onClick={handlePad} data-note='d'></PinkBeatPad>
          <GreenBeatPad id='7' onClick={handlePad} data-note='f'></GreenBeatPad>
          <BlueBeatPad id='8' onClick={handlePad} data-note='z'></BlueBeatPad>
          <OrangeBeatPad id='9' onClick={handlePad} data-note='x'></OrangeBeatPad>
          <PinkBeatPad id='10' onClick={handlePad} data-note='c'></PinkBeatPad>
          <GreenBeatPad id='11' onClick={handlePad} data-note='v'></GreenBeatPad>
        </SoundBoard>


      </div>
    </div>
  </>
)
}

export default Studio;
