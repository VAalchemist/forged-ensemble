import React, { useState } from 'react';
import Nav from './Nav';
import Auth from '../utils/auth';
import { useMutation} from '@apollo/client';
import { ADDFILE } from '../utils/mutations';
import { useNavigate } from "react-router-dom";
import { LogOut } from "../components/nav.styles";




function Upload() {
    // Auth.loggedIn()


    const navigate = useNavigate();
    const [fileState,setFileState] = useState('');
    const [fileNameState,setFileNameState] = useState('');
    const [addFile, { error }] = useMutation(ADDFILE);

    const user = Auth.getProfile().data;
    const id = user._id;
    const artist = user.firstName;



        const handleChange = async (event) => {
            const file = event.target.files[0]
            setFileState(file);

        };
        const handleNameChange = (event) => {
            const { name, value } = event.target;
            setFileNameState({...fileNameState, [name]:value})

        }

        const handleFormSubmit = async (event) => {
            event.preventDefault();
            let formData = new FormData();
            console.log(fileState);
            console.log(fileNameState.fileName);
            formData.append('file', fileState);
            formData.append('upload_preset', 'upload');
            formData.append('cloud_name', 'duty-call');
            const data = await fetch('https://api.cloudinary.com/v1_1/duty-call/video/upload',{
                method: 'POST',
                body: formData
            })
            .then(response => response.json());
    
            try {
                const mutationResponse = await addFile({
                    variables: { fileName: fileNameState.fileName, url: data.url, userId: id, artist: artist},
                });
                navigate("/profile");
    
            }
            catch (e) {
                console.log(e);
            };    
        



        }

        return (
            <>
                <Nav />
                    <div className='w-full h-screen flex justify-center items-center p-4 text-white'>
                    <form name='img-form' encType='multipart/form-data' onSubmit={handleFormSubmit}>

                        <input className='flex flex-col max-w-[600px] w-full z-[1] placeholder-white p-4 rounded-[10px] bg-[#290185] text-white opacity-[85%] mb-4' type='text' name='fileName' placeholder='file name' onChange={handleNameChange}></input>
                        <input className="placeholder-white p-4 rounded-[10px] bg-[#290185] text-white opacity-[85%] flex justify-center mb-4" type='file' name='file' onChange={handleChange} accept='.mp3'></input>

                        <LogOut class="flex"type='submit'>Submit</LogOut>

                    </form>
                    </div>
                    <div className='absolute h-[25rem] text-white w-full justify-center items-center hidden md:flex'>

                </div>

            </>
        )
    }


export default Upload