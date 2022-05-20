import React from 'react';
import { Link } from "react-router-dom";
import '../index.css';


function Profile() {
  return (
    <>
    <nav className="navbar navbar-dark bg-black justify-content-end  px-2">
       <Link className="navTop text-white px-2" to="/studio">
         Studio
       </Link>
       <Link className="navTop text-white px-2" to="/profile">
         Profile
       </Link>
       <Link className="navTop text-white px-2" to="/contact">
         Contact
       </Link>
     </nav>

 </>
)
}

export default Profile
