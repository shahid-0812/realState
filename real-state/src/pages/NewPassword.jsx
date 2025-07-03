import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { LoginRight } from '../Components/LoginRight';
import { LoginFooter } from '../Components/LoginFooter';

export const NewPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className='newPassword-container flex px-10 py-5 w-full items-center max-sm:px-5'>
            <div className="newPassword-left w-1/2 bg-rd-400 flex flex-col h-full gap-30 px-15 mb-10 max-md:w-full max-sm:px-5">
                <div className="newPassword-header flex justify-between items-center max-sm:flex-col max-sm:text-center">
                    <span className="font-bold italic text-[1.5rem]">REALSTATE</span>
                    <span className='text-gray-600'>Already have an account? <span className='text-[#000]'>SignIn</span></span>
                </div>
                <div className="newPassword-form flex flex-col gap-6 px-4">
                    <div className="form-header flex flex-col items-center gap-2 max-sm:text-center">
                        <span className='px-3 py-2 border border-gray-700 rounded-2xl w-fit'>
                            <i class="bi bi-fingerprint text-2xl"></i>
                        </span>
                        <span className='text-3xl font-medium'>Set new password?</span>
                        <span className='text-gray-700'>Must be at least 8 characters</span>
                    </div>
                    <form action="#" className='flex flex-col gap-5 text-gray-700'>
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
                        </div>
                        <div className='flex gap-2 w-full'>
                            <div className='h-1 flex-1 bg-gray-300 rounded-full'></div>
                            <div className='h-1 flex-1 bg-gray-300 rounded-full'></div>
                            <div className='h-1 flex-1 bg-gray-300 rounded-full'></div>
                            <div className='h-1 flex-1 bg-gray-300 rounded-full'></div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="password">Confirm Password</label>
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
                        </div>
                        <button type="submit" className='w-full bg-[#103D47] text-[#fff] font-medium text-xl rounded-full py-3.5 cursor-pointer hover:bg-[#376069] transition duration-300'>Reset password</button>
                    </form>
                    <Link to="/login" className='flex items-center justify-center gap-5'>
                        <i className="bi bi-arrow-left"></i>
                        <span className='text-gray-600'>Back to login page</span>
                    </Link>
                </div>
                <LoginFooter />
            </div>
            <LoginRight />

        </div>
    )
}
