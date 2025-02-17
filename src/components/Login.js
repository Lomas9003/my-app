import React, { useRef, useState } from 'react'
import Header from './Header'
import { validation } from '../Utils/validation'

const Login = () => {
 
const [isSigin , setisSigin] = useState(true) 

const [errorMessage , seterrorMessage] = useState(null)

const toggle = () => {
    setisSigin(!isSigin)
}

const name = useRef(null)
const email = useRef(null)
const password = useRef(null)

const handelValidation =() => {

    // console.log(email);
    // console.log(password);
    const message = validation(name.current.value,  email.current.value , password.current.value)
    seterrorMessage(message)
    
    
}

  return (
    <div>
        <Header/> 
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_medium.jpg'
        alt='backgroundimage'/>
        </div>

        {/* Sign IN Sing UP form using toggel feature */}
        <form 
        className= 'bg-black absolute p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white opacity-85'
         onSubmit={(e) => e.preventDefault()}>

            <h1 className='text-3xl p-2 '>{isSigin  ? "Sign In" : "Sign Up"}</h1>

                {!isSigin &&
                
                <input
                ref={name}
                type='text' 
                placeholder='Full Name' 
                className='p-4 my-4 w-full bg-gray-500'/>
                }

            <input 
            ref={email}
            type='text' 
            placeholder='Email address' 
            className='p-4 my-4 w-full bg-gray-500'/>

            <input 
            ref={password}
            type='password' 
            placeholder='password'
             className='p-4 my-4 w-full  bg-gray-500'/>

             <p className= 'text-red-400 text-xl'>{errorMessage}</p>

            <button className='p-4 my-4 bg-red-600 w-full rounded-lg'
             onClick={handelValidation}>
                {isSigin ? "Sign In" : "Sign Up"}
                </button>

            <p className='py-3 cursor-pointer underline' 
            onClick={toggle}>
                {isSigin ? "New to Netflix? Sign Up Now" : "Already a user? Sign In"}
                </p>

        </form>
    </div>
  )
}

export default Login