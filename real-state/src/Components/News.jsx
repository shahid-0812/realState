import React from 'react'

export const News = () => {
    return (
        <div className="section-4 my-20 justify-center px-30 flex flex-col gap-15 max-md:my-0 max-md:px-10">
            <div className="section-4-header flex justify-between items-center max-md:flex-col max-md:items-start max-md:gap-6">
                <span className='font-medium text-3xl w-[30%] max-md:w-[50%] max-sm:w-full'>Latest News: Property Insights & Inspiration</span>
                <div className='self-end flex gap-4 border-b-1 border-gray-500 pb-3 px-2 text-gray-500 font-medium max-md:self-start'>
                    <span className='transform transition duration-300 hover:text-black hover:scale-110 cursor-pointer'>All Articles</span>
                    <span className='transform transition duration-300 hover:text-black hover:scale-110 cursor-pointer'>Home Inspiration</span>
                    <span className='transform transition duration-300 hover:text-black hover:scale-110 cursor-pointer'>Unique Homes</span>
                    <span className='transform transition duration-300 hover:text-black hover:scale-110 cursor-pointer'>Most Rated</span>
                </div>
            </div>
            <div className="articles w-full  flex justify-center items-center gap-5 max-md:flex-col max-md:items-center ">
                <div className="article flex flex-col gap-3 max-md:items-center">
                    <img src="/images/home/section-4-1.jpg" alt="" />
                    <div className='flex flex-col w-[80%] max-md:w-[70%] max-md:text-center max-sm:w-full max-sm:text-left max-sm:pl-2'>
                        <span className='font-medium text-2xl '>Have the best style for your kitchen: modern & classic</span>
                        <span className='text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha</span>
                    </div>
                </div>
                <div className="article flex flex-col gap-3 max-md:items-center ">
                    <img src="/images/home/section-4-2.jpg" alt="" />
                    <div className='flex flex-col w-[80%] max-md:w-[70%] max-md:text-center  max-sm:w-full max-sm:text-left max-sm:pl-2'>
                        <span className='font-medium text-2xl '>How to buy a house: step to buying  a house
                            for the first time</span>
                        <span className='text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
