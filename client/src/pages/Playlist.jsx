import React, { useContext } from "react";
import { song_list } from '../recorded/songs'
import { FiShare } from 'react-icons/fi'
import { BsPlay } from 'react-icons/bs'

function Playlist() {
    return (
        <section className="text-white flex justify-center items-center h-screen w-full">
            <div className="border-2 border-white bg-black bg-opacity-[87%] rounded-2xl shadow-2xl flex flex-col w-2/3 max-w-4xl">
                <div className="h-10 font-bold text-xl text-center mt-3">
                    <h1>Playlist</h1>
                    <div className='border-2 w-[75%] border-white inline-block mb-2 rounded-xl'></div>
                </div>
                <div className="flex justify-center">
                    <div className="border-2 w-[75%] border-white flex m-7 rounded-xl justify-between items-center">
                        <div className="ml-4 mt-1 mb-1">
                            <div className="-text">
                                <h1>{song_list[0].title}</h1>
                                <p>by: {song_list[0].artist}</p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between max-w-sm mr-4">
                            <div className="mr-2">
                                <div className="border-2 border-white rounded-md p-[1px]">
                                    <BsPlay size={25} />
                                </div>
                            </div>
                            <div className="mt-[.5px] border-2 border-white rounded-md p-[3px]">
                                <FiShare size={20} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Playlist;