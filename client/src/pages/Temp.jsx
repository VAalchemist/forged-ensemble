import React, { useState, useEffect } from 'react';
import Nav from '../pages/Nav';
import { ADDPIC } from '../utils/mutations';
import Auth from '../utils/auth';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';


function Temp() {
    // Auth.loggedIn()
    const [formState, setFormState] = useState({ fileName: '', file: '' })
    const [addPic, { error }] = useMutation(ADDPIC);
    const id = Auth.getProfile().data._id;
    const { loading, data } = useQuery(QUERY_USER, {variables: {_id: id}});
    const [picState, setPicState] = useState('');

    useEffect(()=>{
        if(data){
            setPicState(data.singleUser.profile_pic)

        }
    
    });


    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(formState.fileName);

        const { fileName, file } = formState
        // console.log(file);


        let formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'upload');
        formData.append('cloud_name', 'duty-call');
        console.log(formData)

        const data = await fetch('https://api.cloudinary.com/v1_1/duty-call/image/upload',{
            method: 'POST',
            body: formData
        })
        .then(response => response.json());
        console.log(data);
        console.log(Auth.getProfile().data._id);

        try {
            const mutationResponse = await addPic({
                variables: { profile_pic: data.url, _id: Auth.getProfile().data._id},
            });
            


        }
        catch (e) {
            console.log(e);

        };

    }

        const handleChange = async (event) => {
            const file = event.target.files[0]
            setFormState({ ...formState, ['file']: file });
        };

        return (
            <>
                <Nav />
                <div className='abosulte h-[25rem] text-white w-full justify-center items-center hidden md:flex'>
                    <form name='img-form' encType='multipart/form-data'onSubmit={handleSubmit}>

                        <input className='text-black' type='text' name='fileName' placeholder='file name'></input>
                        <input type='file' name='file' onChange={handleChange}></input>

                        <button type='submit'>Submit</button>

                    </form>
                    </div>
                    <div className='abosulte h-[25rem] text-white w-full justify-center items-center hidden md:flex'>
                    <img src={picState} className='w-60'></img>
                </div>

            </>
        )
    }


export default Temp