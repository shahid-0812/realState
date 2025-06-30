import React from 'react'
import { Link } from 'react-router-dom';
import { LoginRight } from '../Components/LoginRight';

export const ForgetPassword = () => {
    console.log("Forget Password");
    return (
        <div className='forget-container flex px-10 py-5 w-full items-center'>
            <div className="forget-left w-1/2 bg-rd-400 flex flex-col  h-full gap-40 px-15 mb-10 max-md:w-full">
                <div className="forget-header flex justify-between items-center">
                    <span className="font-bold italic text-[1.5rem]">REALSTATE</span>
                    <span className='text-gray-600'>Already have an account? <span className='text-[#000]'>SignIn</span></span>
                </div>
                <div className="forget-form flex flex-col gap-6 px-4">
                    <div className="form-header flex items-center flex-col gap-2">
                        <span className='px-3 py-2 border border-gray-700 rounded-2xl w-fit'>
                            <i class="bi bi-fingerprint text-2xl"></i>
                        </span>
                        <span className='text-3xl font-medium'>Forget password?</span>
                        <span className='text-gray-700'>No worries, we”ll send you reset instructions.</span>
                    </div>
                    <form action="#" className='flex flex-col gap-5 text-gray-700'>
                        <div className='flex flex-col gap-1'>

                            <label htmlFor="email">Email address</label>
                            <input type="email" name="email" id="email" placeholder='Enter your email' className='border border-gray-400 py-2 px-4 rounded-full focus:outline-gray-400' />
                        </div>
                        <button type="submit" className='w-full bg-[#103D47] text-[#fff] font-medium text-xl rounded-full py-3.5 '>Reset password</button>
                    </form>
                    <Link to="/login" className='flex items-center justify-center gap-5'>
                        <i className="bi bi-arrow-left"></i>
                        <span className='text-gray-600'>Back to login page</span>
                    </Link>
                    
                </div>
                <div className="forget-footer flex items-center justify-between text-gray-600">
                    <span>@RealState 2024, All Rights Reserved</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
            <LoginRight />
        </div>
    )
}
