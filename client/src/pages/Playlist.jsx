import React, { useState, useEffect } from "react";
import { song_list } from '../recorded/songs'
import { FiShare } from 'react-icons/fi'
import { BsPlay, BsPauseFill } from 'react-icons/bs'
import { Howl } from 'howler'
import song from '../drum kit/song1.mp3'
import {
    EmailShareButton,
    FacebookShareButton,
    PinterestShareButton,
    TumblrShareButton,
    TwitterShareButton,
    EmailIcon,
    FacebookIcon,
    PinterestIcon,
    TumblrIcon,
    TwitterIcon,
} from "react-share";

const useAudio = () => {
    const [audio] = useState(new Audio(song));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

function Playlist({ song }) {
    const [playing, toggle] = useAudio(song);
;

        const [share, setShare] = useState(false);
        const handleClick = () => setShare(!share);

        const shareUrl = 'https://www.facebook.com/';
        // const song = song_list[0].fileUrl

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
                                    <button className="border-2 border-white rounded-md p-[1px]" onClick={toggle}>{playing ? <BsPauseFill size={25}/> : <BsPlay size={25}/>}
                                    </button>
                                </div>
                                <div className="mt-[.5px] border-2 border-white rounded-md p-[3px]">
                                    <button onClick={handleClick}><FiShare size={20} />
                                    </button>
                                    <div className={
                                        share ? 'border-2 rounded-xl fixed left-[57%] top-[345px] w-[25%] h-[5%] bg-black flex flex-col justify-center items-center  ease-in-out duration-1000 opacity-[90%]' : 'ease-in-out duration-1000 fixed left-[-57%] top-0 w-[100%] h-screen bg-black flex flex-col justify-center items-center opacity-[0]'
                                    }>
                                        <div className=" flex flex-col justify-between w-[75%]">
                                            <FacebookShareButton url={shareUrl}>
                                                <FacebookIcon size={25} />
                                            </FacebookShareButton>
                                            <TwitterShareButton url={shareUrl}>
                                                <TwitterIcon size={25} />
                                            </TwitterShareButton>
                                            <TumblrShareButton url={shareUrl}>
                                                <TumblrIcon size={25} />
                                            </TumblrShareButton>
                                            <PinterestShareButton url={shareUrl}>
                                                <PinterestIcon size={25} />
                                            </PinterestShareButton>
                                            <EmailShareButton url={shareUrl}>
                                                <EmailIcon size={25} />
                                            </EmailShareButton>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
        )
    }

    export default Playlist;