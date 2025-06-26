import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { LoginRight } from '../Components/LoginRight';
import { LoginFooter } from '../Components/LoginFooter';

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='login-container flex px-10 py-5 w-full items-center'>
      <div className="login-left w-1/2 bg-rd-400 flex flex-col h-full gap-20 px-15 mb-10">
        <div className="login-header flex justify-between items-center">
          <span className="font-bold italic text-[1.5rem]">REALSTATE</span>
          <span className='text-gray-600'>Already have an account? <span className='text-[#000]'>SignIn</span></span>
        </div>
        <div className="login-form flex flex-col gap-6 px-4">
          <div className="form-header flex flex-col gap-2">
            <span className='px-3 py-2 border border-gray-700 rounded-2xl w-fit'>
              <i class="bi bi-person text-2xl"></i>
            </span>
            <span className='text-3xl font-medium'>Login</span>
            <span className='text-gray-700'>Enter your details to login</span>
          </div>
          <form action="#" className='flex flex-col gap-5 text-gray-700'>
            <div className='flex flex-col gap-1'>

              <label htmlFor="email">Email address</label>
              <input type="email" name="email" id="email" placeholder='Enter your email' className='border border-gray-400 py-2 px-4 rounded-full focus:outline-gray-400' />
            </div>
            <div className='flex flex-col gap-1'>

              <label htmlFor="password">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full px-4 py-2 rounded-full border border-gray-400 focus:outline-none"
                  placeholder='••••••••••'
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                </button>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm text-gray-800 font-medium self-end hover:underline"
              >
                Forgot Password?
              </Link>

            </div>
            <button type="submit" className='w-full bg-[#103D47] text-[#fff] font-medium text-xl rounded-full py-3.5 '>Login</button>
          </form>
          <div className='flex items-center justify-center gap-5'>
            <div className='h-0.25 w-full bg-gray-300'></div>
            <span className='text-gray-600'>Or</span>
            <div className='h-0.25 w-full bg-gray-300'></div>
          </div>
          <div className='w-full bg-[#fff] border border-gray-300 font-medium rounded-xl flex items-center justify-center gap-4 py-3.5 '>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px" height="25px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" /><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" /><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" /><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" /></svg>
            <span>
              Sign in with Google
            </span>
          </div>
          <div className='w-full bg-[#fff] border border-gray-300 font-medium rounded-xl flex items-center justify-center gap-4 py-3.5 '>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25px" height="25px"><path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z" /></svg>
            <span>
              Sign in with Apple
            </span>
          </div>
        </div>
        <LoginFooter />
      </div>
      <LoginRight />
    </div>
  )
}
