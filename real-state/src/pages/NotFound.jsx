import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <div className='notfound-container flex flex-col items-center justify-center min-h-screen gap-10 px-20 py-5'>
            <div className='flex '>
                <span className='text-[6rem] font-medium text-gray-300'>4</span>
                <span className='bg-[#f8f8f8] text-gray-800 font-medium  text-[6rem] shadow-lg px-6 rounded-3xl transform -translate-y-15'>0</span>
                <span className='text-[6rem] font-medium text-gray-300'>4</span>
            </div>
            <div className='flex flex-col text-center gap-2'>
                <span className='font-medium text-4xl text-gray-700'>Page Not Found</span>
                <span>Sorry, we can’t find the page you’re looking for .</span>
            </div>
            <Link to="/" className='bg-[#103D47] text-[#FFF48E] px-20 py-2 rounded-full font-medium hover:bg-[#09242A] transition duration-300'>
                Back to Home
            </Link >
        </div>
    )
}
