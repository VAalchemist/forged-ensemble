import React from 'react'
import Tunnel from '../images/login.mp4'
import { Background } from '../components/login.styles'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
      <Background autoPlay loop muted>
        <source src={Tunnel} type="video/mp4" />
      </Background>

      
      <main className='flex flex-col items-center justify-center min-h-screen py-2'>
      <div className='flex flex-col items-center w-full px-20 text-center'>
      <div className='bg-gray-700 rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
        {/* login */}
        <div className="w-3/5 p-5 text-white rounded-tl-2xl rounded-bl-2xl">Login Here</div>

        {/* sign up */}
        <div className="w-2/5 bg-gray-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px12">
          <h2 className="text-3xl font-bold mb-2">Welcome to Forged Ensemble!</h2>
          <div className='border-2 w-20 border-white inline-block mb-2'></div>
          <p className="p-10 text-xl font-bold mb-2">Sign up and get started on your musical journey with us.</p>
          <div to='/signup' className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-gray-500'>Sign Up</div>
        </div>
      </div>

      </div>
      </main>



    </div>
  )
}

export default Login
