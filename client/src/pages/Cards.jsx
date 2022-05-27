import React from "react";
import Arlo from "../images/Arlo.png";
import Justyn from "../images/Justyn.png";
import Kevin from "../images/Kevin.png";
import Char from "../images/Charlene.png";


function Cards() {
  return (
    <>
      {/* <div className="max-w-xs overflow-hidden shadow-lg rounded-t-[150px]"> */}
      <div className="hidden lg:flex fixed bottom-[-10%] h-32 w-screen items-center justify-center opacity-[65%]">
        <div className="w-48 h-[325px] flex justify-between items-center mt-[120px] hover:mt-[-210px] duration-500 bg-[#ff8f00] px-1 rounded-t-[50px] items center">
        
        <div className="text-center justify-between w-full mb-10">
        <p className='mb-10 font-bold'>Edd-Arlo Garcia</p>
            <a href="https://github.com/Eddielo26"> 
            <img src={Arlo}/>
            </a>
          </div>
          
          
        </div>
        <div className="w-48 h-[325px] flex justify-between items-center mt-[120px] hover:mt-[-210px] duration-500 bg-[#9ae7f2] px-1 rounded-t-[50px] items center">
        
          <div className="text-center justify-between w-full mb-10">
           <p className='mb-10 font-bold'>Justyn Subrai</p>
            <a href="https://github.com/JustynSubrai"> 
            <img src={Justyn}/>
            </a>
          </div>
          
          
        </div>
        <div className="w-48 h-[325px] flex justify-between items-center mt-[120px] hover:mt-[-210px] duration-500 bg-[#84f48b] px-1 rounded-t-[50px] items center">
        
        <div className="text-center justify-between w-full mb-10">
        <p className='mb-10 font-bold'>Kevin Castillo</p>
            <a className=""href="https://github.com/kcastil7"> 
            <img src={Kevin}/>
            </a>
          </div>
          
          
        </div>
        <div className="w-48 h-[325px] flex justify-between items-center mt-[120px] hover:mt-[-210px] duration-500 bg-[#FC77EB] px-1 rounded-t-[50px] items center">
        
        <div className="text-center justify-between w-full mb-10">
        <p className='mb-10 font-bold'>Charlene Kim</p>
            <a className=""href="https://github.com/VAalchemist"> 
            <img src={Char}/>
            </a>
          </div>
          
          
        </div>
      </div>
    </>
  );
}

export default Cards;
