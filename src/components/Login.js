import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
 
const [isSigin , setisSigin] = useState(true) 

const toggle = () => {
    setisSigin(!isSigin)
}

  return (
    <div>
        <Header/> 
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_medium.jpg'
        alt='backgroundimage'/>
        </div>

        {/* Sign IN Sing UP form using toggel feature */}
        <form className= 'bg-black absolute p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white opacity-85'>
            <h1 className='text-3xl p-2 '>{isSigin  ? "Sign In" : "Sign Up"}</h1>
            {!isSigin &&
                <input type='text' placeholder='Email address' className='p-4 my-4 w-full bg-gray-500'/>
                }
            <input type='text' placeholder='Email address' className='p-4 my-4 w-full bg-gray-500'/>
            <input type='password' placeholder='password' className='p-4 my-4 w-full  bg-gray-500'/>
            <button className='p-4 my-4 bg-red-600 w-full rounded-lg'>{isSigin ? "Sign In" : "Sign Up"}</button>
            <p className='py-3 cursor-pointer underline' onClick={toggle}>{isSigin ? "New to Netflix? Sign Up Now" : "Already a user? Sign In"}</p>
        </form>
    </div>
  )
}

export default Login