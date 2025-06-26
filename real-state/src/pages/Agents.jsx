import React from 'react'
import { Testimony } from '../Components/Testimony';

export const Agents = () => {
    const agentsData = [
        { name: 'John Thompson', rating: 5.0, properties: 120, img: '/images/home/agent-1.png' },
        { name: 'Samantha Green', rating: 5.0, properties: 108, img: '/images/home/agent-2.png' },
        { name: 'Emily Johnson', rating: 5.0, properties: 105, img: '/images/home/agent-3.png' },
        { name: "Michael O'Neil", rating: 5.0, properties: 91, img: '/images/home/agent-4.png' },
        { name: 'John Thompson', rating: 5.0, properties: 120, img: '/images/home/agent-1.png' },
        { name: 'Samantha Green', rating: 5.0, properties: 108, img: '/images/home/agent-2.png' },
        { name: 'Emily Johnson', rating: 5.0, properties: 105, img: '/images/home/agent-3.png' },
        { name: "Michael O'Neil", rating: 5.0, properties: 91, img: '/images/home/agent-4.png' },
        { name: 'John Thompson', rating: 5.0, properties: 120, img: '/images/home/agent-1.png' },
        { name: 'Samantha Green', rating: 5.0, properties: 108, img: '/images/home/agent-2.png' },
        { name: 'Emily Johnson', rating: 5.0, properties: 105, img: '/images/home/agent-3.png' },
        { name: "Michael O'Neil", rating: 5.0, properties: 91, img: '/images/home/agent-4.png' },
        { name: 'John Thompson', rating: 5.0, properties: 120, img: '/images/home/agent-1.png' },
        { name: 'Samantha Green', rating: 5.0, properties: 108, img: '/images/home/agent-2.png' },
        { name: 'Emily Johnson', rating: 5.0, properties: 105, img: '/images/home/agent-3.png' },
        { name: "Michael O'Neil", rating: 5.0, properties: 91, img: '/images/home/agent-4.png' },
    ];
    return (
        <>|
            <div className='agents-container w-full min-h-screen pt-[80px] flex flex-col gap-20 px-30 py-10'>
                <div className="agents-header flex flex-col gap-6 w-full">
                    <span className='font-medium text-4xl text-[#14161A]'>Search properties to rent</span>
                    <div className='flex items-center gap-4'>
                        <div className='w-full bg-rd-400 border-2 border-gray-300 px-6 py-2 rounded-full flex gap-3 items-center'>
                            <i class="bi bi-geo-alt text-2xl"></i>
                            <div className='flex flex-col '>
                                <label htmlFor="country">Location</label>
                                <input type="text" name="country" className='font-medium focus:outline-0  ' id="country" value="Dubai" />
                            </div>
                        </div>
                        <span className='text-[#FFF48E] bg-[#103D47] px-5 py-4 rounded-full text-2xl'><i class="bi bi-filter"></i></span>
                    </div>
                </div>
                <div className="agents flex gap-3 flex-wrap justify-center items-start ">
                    {agentsData.map((agent, index) => (

                        <div key={index} className="agent-card bg-r=ed-400 w-[24%] px-5 py-5 rounded-2xl border-1 border-gray-300 flex flex-col gap-5">
                            <div className='flex justify-between items-center gap-5'>
                                <img src={agent.img} alt="" />
                                <span>5.0 <i className='bi bi-star-fill text-[#FBBB04]'></i></span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-xl'>{agent.name}</span>
                                <span className="text-gray-400">{agent.properties} properties</span>
                            </div>
                            <span className='w-full border-2 border-gray-300 text-center py-2 px-3 rounded-3xl'>Contact</span>
                        </div>
                    ))}
                </div>
                <div className="pages">
                    <ul className='flex gap-3 justify-center items-center'>
                        <li><i class="bi bi-caret-left text-xl text-gray-500 font-medium hover:bg-[#09242A] hover:text-[#fff] transition duration-300 px-4 py-3 rounded-full cursor-pointer"></i></li>
                        <li className=' text-gray-500 font-medium hover:bg-[#09242A] hover:text-[#fff] transition duration-300 px-6 py-4 rounded-full cursor-pointer'>1</li>
                        <li className=' text-gray-500 font-medium hover:bg-[#09242A] hover:text-[#fff] transition duration-300 px-6 py-4 rounded-full cursor-pointer'>2</li>
                        <li className=' text-gray-500 font-medium hover:bg-[#09242A] hover:text-[#fff] transition duration-300 px-6 py-4 rounded-full cursor-pointer'>3</li>
                        <li className=' text-gray-500 font-medium hover:bg-[#09242A] hover:text-[#fff] transition duration-300 px-6 py-4 rounded-full cursor-pointer'>4</li>
                        <li className=' text-gray-500 font-medium hover:bg-[#09242A] hover:text-[#fff] transition duration-300 px-6 py-4 rounded-full cursor-pointer'>5</li>
                        <li><i class="bi bi-caret-right text-xl text-gray-500 font-medium hover:bg-[#09242A] hover:text-[#fff] transition duration-300 px-4 py-3 rounded-full cursor-pointer "></i></li>

                    </ul>
                </div>
            </div>
            <Testimony />
        </>
    )
}
