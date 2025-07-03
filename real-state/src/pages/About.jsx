import React from 'react'
import { News } from '../Components/News';
import { Testimony } from '../Components/Testimony';

export const About = () => {
    const aboutData = [
        { number: "500+", text: "Property Listed" },
        { number: "95%", text: "Client Satisfaction" },
        { number: "210+", text: "Agents Listed" },
        { number: "518+", text: "Testimonials" },
    ];
    return (
        <>
            <div className='about-container w-full min-h-screen pt-[80px] flex flex-col items-center gap-20 px-15 py-10 max-md:px-8 max-sm:px-2'>
                <div className="about-header w-[45%] text-center flex flex-col gap-6 max-sm:w-full">
                    <span className='font-medium text-3xl lowercase'>Find Your DreamHome: Where Every Space <span className='text-gray-400'>Tells a Unique Story.</span></span>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </span>
                </div>
                <div className="about-images flex flex-wrap justify-center items-center gap-4">
                    <img src="/images/about/about-1.jpg" alt="" className='max-md:flex-1/2' />
                    <img src="/images/about/about-2.jpg" alt="" className='max-md:flex-1/2' />
                    <img src="/images/about/about-3.jpg" alt="" className='flex-1' />
                </div>
                <span className='font-medium text-4xl lowercase text-center w-[70%]'>Find Your DreamHome: Where Every Space Tells a Unique Story.Find Your DreamHome: Where Every Space Tells a Unique Story. <span className='text-gray-400'> Find Your DreamHome: Where Every Space Tells a Unique Story.</span></span>
            </div>
            <div className="data w-full  bg-gray-300 flex justify-evenly items-center gap-10 mt-10 py-10 max-sm:flex-wrap">

                {aboutData.map((data, index) => (
                    <div key={index} className='flex flex-col w-fit items-center justify-center gap-2'>
                        <span className='text-4xl font-medium'>{data.number}</span>
                        <span>{data.text}</span>
                    </div>
                ))}
            </div>
            <div className="founder px-30 py-20 flex justify-between items-center gap-10 max-md:px-4 max-sm:flex-col max-sm:text-center  max-sm:items-center max-sm:justify-center">
                <div className='flex flex-col gap-8 max-sm:items-center'>
                    <span className='text-4xl font-medium'>Meet The Founder</span>
                    <div className='flex flex-col w-[80%] font-medium'>
                        <div className='flex items-start'>
                            <i class="bi bi-quote text-5xl tracking-tighter leading-none max-sm:hidden"></i>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </span>
                        </div>
                        <span>has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and </span>
                    </div>
                    <div className='flex flex-col mt-5'>
                        <span className='text-3xl font-medium'>David Lam</span>
                        <span className='text-gray-500'>RealState Founder</span>
                    </div>
                </div>
                <img src="/images/about/founder.jpg" alt="" className='h-[450px] max-md:h-[200px]' />
            </div> 
            <News />
            <Testimony />
        </>
    )
}
