import React from 'react'

export const News = () => {
    return (
        <div className="section-4 my-20  px-30 py-15 flex flex-col gap-15 max-md:my-0 max-md:px-10">
            <div className="section-4-header flex justify-between items-center max-md:flex-col max-md:items-start max-md:gap-6">
                <span className='font-medium text-3xl w-[30%]'>Latest News: Property Insights & Inspiration</span>
                <div className='self-end flex gap-4 border-b-1 border-gray-500 pb-3 px-2 text-gray-500 font-medium max-md:self-start'>
                    <span>All Articles</span>
                    <span>Home Inspiration</span>
                    <span>Unique Homes</span>
                    <span>Most Rated</span>
                </div>
            </div>
            <div className="articles w-full  flex justify-center items-start gap-5 max-md:flex-col max-md:items-center flex-wrap">
                <div className="article flex flex-col gap-3 max-md:items-center">
                    <div style={{ backgroundImage: "url(/images/home/section-4-1.jpg)" }} className='h-[318px] w-[495px] bg-cover'></div>
                    <div className='flex flex-col  max-md:w-[70%] max-md:text-center'>
                        <span className='font-medium text-2xl '>Have the best style for your kitchen: modern & classic</span>
                        <span className='text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha</span>
                    </div>
                </div>
                <div className="article flex flex-col gap-3 max-md:items-center ">
                    <div style={{ backgroundImage: "url(/images/home/section-4-2.jpg)" }} className='h-[318px] w-[495px] bg-cover'></div>
                    <div className='flex flex-col max-md:w-[70%] max-md:text-center '>
                        <span className='font-medium text-2xl '>How to buy a house: step to buying  a house
                            for the first time</span>
                        <span className='text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
