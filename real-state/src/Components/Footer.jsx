import React from 'react'

export const Footer = () => {
    console.log("Footer rendered");
    return (
        <footer className='w-full flex flex-col bg-[#262727] text-white py-10 px-30 mt-29  pb-20 max-md:hidden'>
            <div className="footer-header text-[#fff] flex flex-col gap-2 border-b border-gray-500 pb-10 w-full">
                <span className='font-medium text-3xl text-gray-300'>Interested to purchase your home?</span>
                <span className='font-medium text-3xl'>RealState@Contact.com</span>
            </div>
            <div className='w-full flex justify-between pt-10'>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col w-fit'>
                        <span className='font-bold text-xl italic'>REALSTATE</span>
                        <span className='w-[40%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </span>
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
                            <span>About</span>
                            <span>Listing Pages</span>
                            <span>Agent</span>
                            <span>Contact</span>
                            <span>Blog</span>
                            <span>Contact</span>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <span>Resource</span>
                        <div className='flex flex-col gap-2 text-gray-400'>
                            <span>Privacy Policy</span>
                            <span>Terms</span>
                            <span>Licence</span>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}
