import React, { useState } from "react";
import Nav from './Nav'
import { Feed } from '../components/home.styles'


function Home() {
  return (
    <>
    <Nav />
    <div className='absolute text-white w-full h-screen flex justify-center items-center p-4'>
      <Feed>Feed Coming Soon</Feed>
    </div>
      
    </>
  );
}

export default Home;
