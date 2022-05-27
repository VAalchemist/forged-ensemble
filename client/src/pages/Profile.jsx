import React from 'react';
import Nav from '../pages/Nav';
import Auth from '../utils/auth';


function Profile() {
  Auth.loggedIn()
  return (
    <>
   <Nav />

 </>
)
}

export default Profile
