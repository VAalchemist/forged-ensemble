import React, { useState } from "react";
import { FiShare } from 'react-icons/fi'
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







function Playlist() {

    const [playlist, setPlaylist] = useState('');

    const [share, setShare] = useState(false);
    const handleClick = (e) => {
        setShare(!share);
        setPlaylist(e.target.getAttribute('id'));
        console.log(e.target.getAttribute('id'));
        console.log(playlist);

    }
    
    const shareUrl = 'https://www.facebook.com/';

    const id = Auth.getProfile().data._id;
    const { data } = useQuery(QUERY_USER_Files, { variables: { userId: id } });
    let files
    if (data) {
        files = data;
        console.log(files)

        return (
            <section className="text-white flex justify-center items-center h-screen w-full">
                    {/* Playlist */}
                {files ? (
                    <div className="profileCon overflow-y-scroll max-h-[600px] border-2 border-white bg-black bg-opacity-[87%] rounded-2xl shadow-2xl flex flex-col w-2/3 max-w-4xl">
                        <div className=" h-10 font-bold text-xl text-center mt-3">
                            <h1>Playlist</h1>
                            <div className='border-2 w-[75%] border-white inline-block mb-2 rounded-xl'></div>
                        </div>

                        {files.getUserFiles.map((file, index) => (
                            <div key={index} className="flex justify-center">

                                <div className="playlistCon border-2 w-[75%] border-white flex m-7 rounded-xl justify-between items-center">
                                    <div className="ml-4 mt-1 mb-1">
                                        <div className="-text">
                                            <h1>{file.fileName}</h1>
                                            <p>by: {file.artist}</p>
                                        </div>
                                    </div>
                                    <div className="shareCon flex flex-row justify-between max-w-sm mr-4">
                                        <div className="mr-2">
                                            <AudioPlayer className=''src={file.url}/>
                                        </div>
                                        <div className=" mt-[.5px] border-2 border-white rounded-md p-[3px] max-h-[30px] max-w-[30px]">
                                            <button  onClick={handleClick}><FiShare id={file._id} size={20} />
                                            </button>
                                            <div className={
                                                share && playlist === file._id ? 'max-w-screen border-2 rounded-xl fixed w-[5%] h-[5%] bg-black flex flex-col justify-center items-center  ease-in-out duration-1000 opacity-[90%]' : 'ease-in-out duration-1000 fixed left-[-57%] top-0 w-[100%] h-screen bg-black flex flex-col justify-center items-center opacity-[0]'
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