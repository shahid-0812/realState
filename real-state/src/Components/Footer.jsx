import React from 'react'
import { Link } from 'react-router-dom';

export const Footer = () => {
    console.log("Footer rendered");
    return (
        <footer className='w-full flex flex-col bg-[#262727] text-white py-10 px-30 pb-20 max-md:px-15'>
            <div className="footer-header text-[#fff] flex flex-col gap-2 border-b border-gray-500 pb-10 w-full">
                <span className='font-medium text-3xl text-gray-300 max-sm:text-2xl'>Interested to purchase your home?</span>
                <span className='font-medium text-3xl max-sm:text-2xl'>RealState@Contact.com</span>
            </div>
            <div className=' flex justify-between pt-10 max-md:gap-15 max-sm:flex-col'>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col w-fit'>
                        <span className='font-bold text-xl italic'>REALSTATE</span>
                        <span className='w-[40%] max-md:w-full'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </span>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <span><i class="bi bi-geo-alt text-xl mr-3"></i> California, United State</span>
                        <span><i class="bi bi-telephone text-xl mr-3"></i> Phone :+1  292-210-239</span>
                    </div>
                </div>
                <div className='flex gap-15'>
                    <div className='flex flex-col gap-4'>
                        <span>Company</span>
                        <div className='flex flex-col gap-2 text-gray-400'>
                            <Link to="/about">About</Link>
                            <Link to="/collections">Listing Pages</Link>
                            <Link to="/agents">Agent</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <span>Resource</span>
                        <div className='flex flex-col gap-2 text-gray-400'>
                            <Link to="/privacy-policy">Privacy Policy</Link>
                            <Link to="/privacy-policy">Terms</Link>
                            <Link to="/privacy-policy">Licence</Link>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}
