import React from "react";
import Arlo from "../images/Arlo.png";
import Justyn from "../images/Justyn.png";
import Kevin from "../images/Kevin.png";
import Char from "../images/Charlene.png";


function Cards() {
  return (
    <>
      <div className="hidden lg:flex fixed bottom-[-10%] h-32 min-h-10 w-screen items-center justify-center opacity-[65%] contact-card mb-2">
        <div className="w-48 h-[315px] flex justify-between items-center mt-[120px] hover:mt-[-220px] duration-500 bg-[#ff8f00] px-1 rounded-t-[50px] items center md:h-[20rem]">
        
        <div className="text-center justify-between w-full mb-14">
        <p className='mb-5 font-bold'>Edd-Arlo Garcia</p>
            <a href="https://github.com/Eddielo26" target="_blank"
          rel="noreferrer"> 
            <img className= "mb-3" src={Arlo} alt="avatar img"/>
            </a>
          </div>
          
          
        </div>
        <div className="w-48 h-[315px] flex justify-between items-center mt-[120px] hover:mt-[-220px] duration-500 bg-[#9ae7f2] px-1 rounded-t-[50px] items center md:h-[20rem]">
        
          <div className="text-center justify-between w-full mb-14">
          <p className='mb-5 font-bold'>Justyn Subrai</p>
            <a href="https://github.com/JustynSubrai" target="_blank"
          rel="noreferrer"> 
            <img className= "mb-3" src={Justyn} alt="avatar img"/>
            </a>
          </div>
          
          
        </div>
        <div className="w-48 h-[315px] flex justify-between items-center mt-[120px] hover:mt-[-220px] duration-500 bg-[#84f48b] px-1 rounded-t-[50px] items center md:h-[20rem]">
        
        <div className="text-center justify-between w-full mb-14">
        <p className='mb-5 font-bold'>Kevin Castillo</p>
            <a className=""href="https://github.com/kcastil7" target="_blank"
          rel="noreferrer"> 
            <img className= "mb-3" src={Kevin} alt="avatar img"/>
            </a>
          </div>
          
          
        </div>
        <div className="w-48 h-[315px] flex justify-between items-center mt-[120px] hover:mt-[-220px] duration-500 bg-[#FC77EB] px-1 rounded-t-[50px] items center m">
        
        <div className="text-center justify-between w-full mb-14">
        <p className='mb-5 font-bold'>Charlene Kim</p>
            <a className=""href="https://github.com/VAalchemist" target="_blank"
          rel="noreferrer"> 
            <img className= "mb-3" src={Char} alt="avatar img"/>
            </a>
          </div>
          
          
        </div>
      </div>
    </>
  );
}

export default Cards;
