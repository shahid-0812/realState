import React from 'react'

export const Testimony = () => {
    return (
        <div className="section-5 flex flex-col gap-15   items-center justify-center w-full h-full mb-20    ">
            <div className="section-5-header text-center items-center justify-center flex flex-col gap-3">
                <div className='flex flex-col items-center justify-center gap-3'>
                    <span className='bg-[#FFF48E] px-3 py-2 rounded-full text-[#09242A]'>
                        <i class="bi bi-stars"></i>
                    </span>
                    <span className='text-3xl font-medium w-[60%]'>What they say
                        About us</span>
                </div>
                <span className='w-[52%] font-medium'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </span>
            </div>
            <div className="section-5-cards flex flex-wrap w-full h-[400px] max-md:flex-wrap">
                <div className="card w-1/4 max-md:w-1/2 h-[300px] bg-red-500 bg-cover" style={{ backgroundImage: "url(/images/home/section-5-1.jpg)" }}></div>
                <div className="card w-1/4 max-md:w-1/2 h-[300px] bg-[#103D47] text-[#fff] flex flex-col items-start gap-2 px-6 py-6 font-medium">
                    <div className='flex gap-2 items-center justify-center'>
                        <img src="/images/home/section-5-card.png" alt="" />
                        <span>JHONE LIM</span>
                    </div>
                    <i className="bi bi-quote text-xl"></i>
                    <span className='mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                    <i className="bi bi-quote text-xl"></i>
                </div>
                <div className="card w-1/4 max-md:w-1/2 h-[300px] bg-red-500 bg-cover" style={{ backgroundImage: "url(/images/home/section-5-3.jpg)" }}></div>
                <div className="card w-1/4 max-md:w-1/2 h-[300px] bg-[#FFF48E]  text-[#103D47] flex flex-col items-start gap-2 px-6 py-6 font-medium">
                    <div className='flex gap-2 items-center justify-center'>
                        <img src="/images/home/section-5-card.png" alt="" />
                        <span>JHONE LIM</span>
                    </div>
                    <i className="bi bi-quote text-xl"></i>
                    <span className='mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                    <i className="bi bi-quote text-xl"></i>
                </div>
                <div className="card w-1/4 max-md:w-1/2 h-[300px] bg-[#FFF48E] text-[#103D47] flex flex-col items-start gap-2 px-6 py-6 font-medium">
                    <div className='flex gap-2 items-center justify-center'>
                        <img src="/images/home/section-5-card.png" alt="" />
                        <span>JHONE LIM</span>
                    </div>
                    <i className="bi bi-quote text-xl"></i>
                    <span className='mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                    <i className="bi bi-quote text-xl"></i>
                </div>
                <div className="card w-1/4 max-md:w-1/2 h-[300px] bg-red-500 bg-cover" style={{ backgroundImage: "url(/images/home/section-5-2.jpg)" }}></div>
                <div className="card w-1/4 max-md:w-1/2 h-[300px] bg-[#103D47] text-[#fff] flex flex-col items-start gap-2 px-6 py-6 font-medium">
                    <div className='flex gap-2 items-center justify-center'>
                        <img src="/images/home/section-5-card.png" alt="" />
                        <span>JHONE LIM</span>
                    </div>
                    <i className="bi bi-quote text-xl"></i>
                    <span className='mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                    <i className="bi bi-quote text-xl"></i>
                </div>
                <div className="card w-1/4 max-md:w-1/2 h-[300px] bg-red-500 bg-cover" style={{ backgroundImage: "url(/images/home/section-5-4.jpg)" }}></div>
            </div>
        </div>
    )
}
