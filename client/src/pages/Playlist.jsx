import React, { useState, useEffect } from "react";
import { song_list } from '../recorded/songs'
import { FiShare } from 'react-icons/fi'
import { BsPlay, BsPauseFill } from 'react-icons/bs'
import { Howl, Howler } from 'howler';
import song from '../drum kit/song1.mp3'
// import AudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-custom-audio-player';




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
import { QUERY_USER_Files } from '../utils/queries';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { SoundBoard } from "../components/studio.styles";

// const useAudio = () => {
//     const [audio] = useState(new Audio());
//     const [playing, setPlaying] = useState(false);

//     const toggle = () => setPlaying(!playing);

//     useEffect(() => {
//         playing ? audio.play() : audio.pause();
//     },
//         [playing]
//     );

//     useEffect(() => {
//         audio.addEventListener('ended', () => setPlaying(false));
//         return () => {
//             audio.removeEventListener('ended', () => setPlaying(false));
//         };
//     }, []);

//     return [playing, toggle];
// };



function Playlist() {



    
    const [share, setShare] = useState(false);
    const handleClick = () => setShare(!share);
    
    const shareUrl = 'https://www.facebook.com/';

    const id = Auth.getProfile().data._id;
    const { data } = useQuery(QUERY_USER_Files, { variables: { userId: id } });
    let files
    if (data) {
        files = data;

        return (
            <section className="text-white flex justify-center items-center h-screen w-full">
                {files ? (
                    <div className="border-2 border-white bg-black bg-opacity-[87%] rounded-2xl shadow-2xl flex flex-col w-2/3 max-w-4xl">
                        <div className="h-10 font-bold text-xl text-center mt-3">
                            <h1>Playlist</h1>
                            <div className='border-2 w-[75%] border-white inline-block mb-2 rounded-xl'></div>
                        </div>

                        {files.getUserFiles.map((file, index) => (
                            <div key={index} className="flex justify-center">


                                <div className="border-2 w-[75%] border-white flex m-7 rounded-xl justify-between items-center">
                                    <div className="ml-4 mt-1 mb-1">
                                        <div className="-text">
                                            <h1>{file.fileName}</h1>
                                            <p>by: {file.artist}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between max-w-sm mr-4">
                                        <div className="mr-2">
                                            <AudioPlayer className=''src={file.url}/>
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
                        ))}
                    </div>

                ) : null}

            </section>
        )
    }
}

export default Playlist;