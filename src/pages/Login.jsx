import React, { useState } from 'react'

const Login = () => {

    const [ currentState, setCurrentState ] = useState('Sign Up');

    const onSubmitHandler = async(event) => {
        event.preventDefault();
    }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-500'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.75px] w-8 bg-gray-800'/>
      </div>
      {currentState === 'Login' ? '' : <input type="text" className='w-full px-3 py-2 border border-gray-800 bg-[#DBE8DC] required rounded-2xl' placeholder='Full name...' /> }
      <input type="email" className='w-full px-3 py-2 border border-gray-800 bg-[#DBE8DC] required rounded-2xl' placeholder='Emailaddress...'/>
      <input type="password" className='w-full px-3 py-2 border border-gray-800 bg-[#DBE8DC] required rounded-2xl' placeholder='Password...'/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer hover:underline hover:text-black'>Forgot your Password ?</p>
        {
          currentState === 'Login' ?
          <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer hover:underline hover:text-black'>Create Account ?</p> :
          <p onClick={() => setCurrentState('Login')} className='cursor-pointer hover:underline hover:text-black'>Login here</p>
        }
      </div>
      <button className='bg-black text-white font-light text-sm my-8 px-8 py-3 hover:bg-slate-100 hover:text-black transition-all hover:border-double border border-black rounded-2xl cursor-pointer'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
      { currentState === 'Login' ? <div className='my-26'></div> : <div className='my-22'></div>}
    </form>
  )
}

export default Login