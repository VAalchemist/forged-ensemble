import React, { useState } from 'react';
import Tunnel from '../images/login.mp4'
import { Background, BgImg, Zoom } from '../components/login.styles'
import loginimg from '../images/loginImg.png'
import { FaFacebookF, FaGoogle, FaTwitter, FaRegEnvelope, FaUserAstronaut } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser, { error }, data] = useMutation(ADD_USER,{ errorPolicy: 'all' });


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
          firstName: formState.firstName,
          lastName: formState.lastName,
        },
      });
      console.log(error);
      const token = mutationResponse.data.addUser.token;
      
      Auth.login(token);


    }
    catch (e) {

      console.log("there is an error " + e);
  }

  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };




  return (
    <div>
      <Background autoPlay loop muted>
        <source src={Tunnel} type="video/mp4" />
      </Background>
      <BgImg src={loginimg} />


      <main className='md:flex hidden flex-col items-center justify-center min-h-screen py-2'>
        <div className='flex flex-col items-center w-full px-20 text-center'>
          <Zoom className='border-3 border border-[#00b8ff] bg-black bg-opacity-[87%] rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
            {/* login */}
            <div className="w-3/5 p-5 text-white rounded-tl-2xl rounded-bl-2xl">
              <div className='text-left font-bold'><span className='text-[#00b8ff]'>Forged</span> Ensemble</div>
              <div className='py-10'>
                <h2 className='text-3xl font-bold mb-2'>Sign Up for New Account</h2>
                <div className='border-2 w-20 border-[#00b8ff] inline-block mb-2'></div>
                {/* Social Sign-Up */}
                <div className='flex justify-center my-2'>
                  <a href='/' className='border-2 border-[#00b8ff] rounded-full p-3 mx-1'><FaFacebookF className='text-sm' /></a>
                  <a href='/' className='border-2 border-[#00b8ff] rounded-full p-3 mx-1'><FaTwitter className='text-sm' /></a>
                  <a href='/' className='border-2 border-[#00b8ff] rounded-full p-3 mx-1'><FaGoogle className='text-sm' /></a>
                </div>

                <p className='text-white my-3'>or sign up with email</p>
                <form onSubmit={handleFormSubmit}>
                  <div className='flex flex-col items-center'>
                    <div className='bg-gray-300 w-64 p-2 flex items-center mb-3'>
                      <FaRegEnvelope className='text-gray-500 m-2' />
                      <input type='email' name='email' placeholder='Email' className='bg-gray-300 outline-none text-sm flex-1' onChange={handleChange}></input>
                    </div>
                    <div className='bg-gray-300 w-64 p-2 flex items-center mb-3'>
                      <FaUserAstronaut className='text-gray-500 m-2' />
                      <input type='firstname' name='firstName' placeholder='First Name' className='bg-gray-300 outline-none text-sm flex-1' onChange={handleChange}></input>
                    </div>
                    <div className='bg-gray-300 w-64 p-2 flex items-center mb-3'>
                      <FaUserAstronaut className='text-gray-500 m-2' />
                      <input type='lastname' name='lastName' placeholder='Last Name' className='bg-gray-300 outline-none text-sm flex-1' onChange={handleChange}></input>
                    </div>
                    <div className='bg-gray-300 w-64 p-2 flex items-center mb-3'>
                      <MdLockOutline className='text-gray-500 m-2' />
                      <input type='password' name='password' placeholder='Password' className='bg-gray-300 outline-none text-sm flex-1' onChange={handleChange}></input>
                    </div>
                    <div className='flex justify-center w-64 mb-5'>
                      <p className='flex text-xs'>Click below to start your Journey</p>
                    </div>
                  </div>
                  {/* Sign-In */}
                  {error ? (
                    <div>
                      <p className="error-text">Please enter valid data</p>
                    </div>
                  ) : null}
                  <button type="submit" className='border-2 border-[#00b8ff] text-[#00b8ff] rounded-full px-12 py-2 inline-block font-semibold hover:bg-[#00b8ff] hover:text-white'>Sign Up</button>
                </form>
              </div>

            </div>

            {/* sign up */}
            <div className="w-2/5 bg-[#00b8ff] text-white rounded-tr-xl rounded-br-xl py-36 px12">
              <h2 className="text-3xl font-bold mb-2 ml-[4px] mr-[4px]">Welcome Back to Forged Ensemble!</h2>
              <div className='border-2 w-20 border-white inline-block mb-2'></div>
              <p className="p-10 text-xl font-bold mb-5">Sign-In and continue your musical journey.</p>
              <Link to='/login' className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-gray-500'>Sign In</Link>
            </div>
          </Zoom>
        </div>
      </main>

       {/* mobile view */}
      <main className='flex  md:hidden flex-col items-center justify-center min-h-screen py-2'>
        <Zoom className='border-2 border-[#00b8ff] rounded-xl flex flex-col items-center w-full px-24 m-5 text-center'>
            {/* login */}
            <div className="w-5/5 p-5 text-white rounded-tl-2xl rounded-bl-2xl">
              <div className='font-bold'><span className='text-[#00b8ff]'>Forged</span> Ensemble</div>
              <div className='py-10'>
                <h2 className='text-3xl font-bold mb-2'>Sign Up for New Account</h2>
                <div className='border-2 w-20 border-[#00b8ff] inline-block mb-2'></div>
                {/* Social Login */}
                <div className='flex justify-center my-2'>
                  <a href='/' className='border-2 border-[#00b8ff] rounded-full p-3 mx-1'><FaFacebookF className='text-sm' /></a>
                  <a href='/' className='border-2 border-[#00b8ff] rounded-full p-3 mx-1'><FaTwitter className='text-sm' /></a>
                  <a href='/' className='border-2 border-[#00b8ff] rounded-full p-3 mx-1'><FaGoogle className='text-sm' /></a>
              </div>

                <p className='text-white my-3'>or sign up with email</p> 
                <form onSubmit={handleFormSubmit}>
                <div className='flex flex-col items-center'>
                  <div className='bg-gray-300 w-64 p-2 flex items-center mb-3'>
                    <FaRegEnvelope className='text-gray-500 m-2' />
                    <input type='email' name='email' placeholder='Email' className='bg-gray-300 outline-none text-sm flex-1' onChange={handleChange}></input>
                  </div>
                  <div className='bg-gray-300 w-64 p-2 flex items-center mb-3'>
                    <FaUserAstronaut className='text-gray-500 m-2' />
                    <input type='firstName' name='firstName' placeholder='First Name' className='bg-gray-300 outline-none text-sm flex-1' onChange={handleChange}></input>
                  </div>
                  <div className='bg-gray-300 w-64 p-2 flex items-center mb-3'>
                    <FaUserAstronaut className='text-gray-500 m-2' />
                    <input type='lastName' name='lastName' placeholder='Last Name' className='bg-gray-300 outline-none text-sm flex-1' onChange={handleChange}></input>
                  </div>

                  <div className='bg-gray-300 w-64 p-2 flex items-center mb-3'>
                    <MdLockOutline className='text-gray-500 m-2' />
                    <input type='password' name='password' placeholder='Password' className='bg-gray-300 outline-none text-sm flex-1' onChange={handleChange}></input>
                    </div>
                  <div className='flex p-5'>
                  {error ? (
                    <div>
                      <p className="error-text">Please enter valid data</p>
                    </div>
                  ) : null}
                  <button type="submit" className='border-2 border-[#00b8ff] text-[#00b8ff] rounded-full px-12 py-2 inline-block font-semibold hover:bg-[#00b8ff] hover:text-white'>Sign Up</button>
                  <Link to='/login' className='border-2 border-[#00b8ff] text-[#00b8ff] rounded-full px-12 py-2 inline-block  font-semibold hover:bg-[#00b8ff] hover:text-white'>Sign in</Link>   
                  </div>
                </div>
                </form>
            </div>
        </div>
      </Zoom>
      </main>



    </div>
  )
}
export default Signup
