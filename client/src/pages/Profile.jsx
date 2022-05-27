import React from 'react';
import Nav from '../pages/Nav';
import Playlist from './Playlist';
import Auth from '../utils/auth';


function Profile() {
  Auth.loggedIn()
  return (
    <>
   <Nav />
   <Playlist />

 </>
)
}

export default Profile
