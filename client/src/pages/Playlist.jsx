import React, {useContext} from "react";
import { song_list } from '../recorded/songs'
import { FaGooglePlay, FaRegShareSquare } from 'react-icons/fa'

let Playlist = () => ( 
    <div className="text-white w-full h-screen flex justify-center items-center p-4">
    <ul className=''>
        {song_list.map((song, index) => (
            <li className="songContainer">
            <span classname="">{song.title}</span>
            <span classname="">{song.name}</span>
            <div>
            <FaGooglePlay /> 
            </div>
            <div>
            <FaRegShareSquare size={18}/>
            </div>
        
            
            </li>
        ))}
    </ul>
</div>
)

export default Playlist;