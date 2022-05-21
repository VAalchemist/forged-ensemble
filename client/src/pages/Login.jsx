import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import Tunnel from '../images/login.mp4'
import { Background, LoginImg, Zoom } from '../components/login.styles'
import loginimg from '../images/loginImg.png'
import { FaFacebookF, FaGoogle, FaTwitter, FaRegEnvelope } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'


function Login(props) {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }, data] = useMutation(LOGIN, { errorPolicy: 'all' });


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState.email)
    console.log(formState.password)
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },

      });


      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {

      console.log("there is an error " + e);
    }

    console.log("form submitted");
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
      <LoginImg src={loginimg} />


      <main className='flex flex-col items-center justify-center min-h-screen py-2'>
        <div className='flex flex-col items-center w-full px-20 text-center'>
          <Zoom className='border-3 border border-[#EF258A] bg-black bg-opacity-[87%] rounded-2xl shadow-2xl flex w-2/3 max-w-4xl' >
            {/* login */}
            <div className="w-3/5 p-5 text-white rounded-tl-2xl rounded-bl-2xl">
              <div className='text-left font-bold'><span className='text-[#ff006e]'>Forged</span> Ensemble</div>
              <div className='py-10'>
                <h2 className='text-3xl font-bold mb-2'>Sign into your Account</h2>
                <div className='border-2 w-20 border-[#ff006e] inline-block mb-2'></div>
                {/* Social Login */}
                <div className='flex justify-center my-2'>
                  <a href='#' className='border-2 border-[#ff006e] rounded-full p-3 mx-1'><FaFacebookF className='text-sm' /></a>
                  <a href='#' className='border-2 border-[#ff006e] rounded-full p-3 mx-1'><FaTwitter className='text-sm' /></a>
                  <a href='#' className='border-2 border-[#ff006e] rounded-full p-3 mx-1'><FaGoogle className='text-sm' /></a>
                </div>

                <p className='text-white my-3'>or login with email</p>
                <form onSubmit={handleFormSubmit}>
                  <div className='flex flex-col items-center'>

                    <div className='bg-gray-300 w-64 p-2 flex items-center mb-3'>

                      <FaRegEnvelope className='text-gray-500 m-2' />
                      <input type='email' name='email' placeholder='Email' className='bg-gray-300 outline-none text-sm flex-1' onChange={handleChange}></input>
                    </div>
                    <div className='bg-gray-300 w-64 p-2 flex items-center mb-3'>
                      <MdLockOutline className='text-gray-500 m-2' />
                      <input type='password' name='password' placeholder='Password' className='bg-gray-300 outline-none text-sm flex-1' onChange={handleChange}></input>
                    </div>
                    <div className='flex justify-between w-64 mb-5'>
                      <label className='flex items-center text-xs'><input type='checkbox' name='remember' className='mr-2' ></input>Remember Me</label>

                      <a href='#' className='text-xs'>Forgot Password?</a>
                    </div>
                  </div>
                  {/* Sign-In */}
                  {error ? (
                    <div>
                      <p className="error-text">The provided credentials are incorrect</p>
                    </div>
                  ) : null}
                  <button type='submit' className='border-2 border-[#ff006e] text-[#ff006e] rounded-full px-12 py-2 inline-block font-semibold hover:bg-[#ff006e] hover:text-white'>Sign In</button>
                </form>
              </div>

            </div>

            {/* sign up */}
            <div className="w-2/5 bg-[#EF258A] text-white rounded-tr-xl rounded-br-xl py-36 px12">
              <h2 className="text-3xl font-bold mb-2">Welcome to Forged Ensemble!</h2>
              <div className='border-2 w-20 border-white inline-block mb-2'></div>
              <p className="p-10 text-xl font-bold mb-5">Sign up and get started on your musical journey with us.</p>
              <Link to='/signup' className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-gray-500'>Sign Up</Link>
            </div>
          </Zoom>


        </div>
      </main >



    </div >
  )
}

export default Login
