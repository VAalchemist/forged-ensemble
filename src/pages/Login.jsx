import React from 'react'
import Tunnel from '../images/login.mp4'
import { Background } from '../components/login.styles'

function Login() {
  return (
    <div>
      <Background autoPlay loop muted>
        <source src={Tunnel} type="video/mp4" />
      </Background>
      
    </div>
  )
}

export default Login
