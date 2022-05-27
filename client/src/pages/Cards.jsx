import React from 'react';
import Arlo from '../images/Arlo.png'

function Cards() {
    return (
        <>
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
            <img src= {Arlo}/>

        </div>
         {/* <div className="max-w-sm md:w-11/12 flex md:flex-row flex-col justify-around items-center h-100%">
       <section className="border-b-4 border-r-4 border-red-900 rounded-lg bg-white m-1 p-1 flex justify-center items-center ">
         <div className="flex flex-col justify-center items-center">
                  <img className="w-11 md:w-24 md:h-24 bg-gray-200 rounded-full" src={Arlo}/>
           </div>
       </section>

       </div> */}

        </>
    );
}

export default Cards;