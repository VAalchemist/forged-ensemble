import React from 'react';
import Nav from '../pages/Nav';
import Playlist from './Playlist';
import Auth from '../utils/auth';
import { CgProfile } from 'react-icons/cg';


function Profile() {
  Auth.loggedIn()
  return (
    <>
  <Nav />
  <Playlist />

    <input type="file" placeholder="Upload Image"></input>

</>
)
}

export default Profile
