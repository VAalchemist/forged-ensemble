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
  const id = Auth.getProfile().data._id;


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
      window.removeEventListener('keydown', beatPad)
    }
  })

  const  handleClickUpload= () =>{
    console.log('upload pressed');
    inputFile.current.click();

  }

  const  handleUpload= async (event) =>{
    console.log('uploaded the image');
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
        console.log(data);

        try {
          const mutationResponse = await addFile({
              variables: { fileName: "my files", url: data.url, userId: Auth.getProfile().data._id},
          });

      }
      catch (e) {
          console.log(e);

      };

  }


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




const Beats = (src) => {
  const sound = new Howl({
    src,
    html5: true,
  });
  sound.play();
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


        <div className='relative flex justify-between items-center'>
          <Record src={record} alt="" />
          <RecordTxt>For keyboard<br /> accessibility,<br /> use the<br /> following keys:<br /> Q W E R A S<br /> D F Z X C V</RecordTxt>
          
          <SoundBoardBtns>

            <Controls><MdFiberManualRecord size={30} /></Controls>
            <Controls><MdStop size={30} /></Controls>
            <Controls><MdPlayArrow size={30} /></Controls>

            <Controls><MdOutlineSave size={30} onClick={handleClickUpload}/><input type='file' ref={inputFile} style={{display:'none'}} id='upload' onChange={handleUpload} accept='.mp3'></input></Controls>



          </SoundBoardBtns>
        </div>

        <SoundBoard>
          <BlueBeatPad id='0' onClick={() => Beats(q)} data-note='Q'></BlueBeatPad>
          <OrangeBeatPad id='1' onClick={() => Beats(w)} data-note='W'></OrangeBeatPad>
          <PinkBeatPad id='2' onClick={() => Beats(e)} data-note='E'></PinkBeatPad>
          <GreenBeatPad id='3' onClick={() => Beats(r)} data-note='R'></GreenBeatPad>
          <BlueBeatPad id='4' onClick={() => Beats(a)} data-note='A'></BlueBeatPad>
          <OrangeBeatPad id='5' onClick={() => Beats(s)} data-note='S'></OrangeBeatPad>
          <PinkBeatPad id='6' onClick={() => Beats(d)} data-note='D'></PinkBeatPad>
          <GreenBeatPad id='7' onClick={() => Beats(f)} data-note='F'></GreenBeatPad>
          <BlueBeatPad id='8' onClick={() => Beats(z)} data-note='Z'></BlueBeatPad>
          <OrangeBeatPad id='9' onClick={() => Beats(x)} data-note='X'></OrangeBeatPad>
          <PinkBeatPad id='10' onClick={() => Beats(c)} data-note='C'></PinkBeatPad>
          <GreenBeatPad id='11' onClick={() => Beats(v)} data-note='V'></GreenBeatPad>
        </SoundBoard>


      </div>
    </div>
  </>
)
}

export default Studio;
