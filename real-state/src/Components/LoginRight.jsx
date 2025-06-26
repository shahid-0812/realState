import React from 'react'
import { useNavigate } from 'react-router-dom'


export const LoginRight = () => {
    const navigate = useNavigate();
    return (
        <div className="login-right w-1/2 flex flex-col items-center relative">
            <img src="/images/login.jpg" alt="" />
            <button onClick={() => navigate('/')} className='bg-[#fff] px-5 text-center py-2 rounded-full cursor-pointer absolute top-5 right-5' >Go to website</button>
            <div className='flex flex-col gap-3 w-[80%] absolute bottom-10 text-[#fff]'>
                <span className=' text-[1.2rem] italic font-semibold'>
                    " Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world.”
                </span>
                <div className='flex items-center justify-between'>
                    <span>Franklin D. Roosevelt</span>
                    <div className='flex items-center gap-3'>
                        <i className="bi bi-arrow-left"></i>
                        <i className="bi bi-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
