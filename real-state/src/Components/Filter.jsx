import React from 'react'

export const Filter = () => {
    return (
        <div className='filter-container w-[40%] flex flex-col gap-8 bg-[#fff] rounded-2xl px-8 py-8'>
            <div className='flex items-center gap-3'>
                <span className='border-2 border-gray-300 h-fit px-2 py-2.5   rounded-full'>
                    <i class="bi bi-filter bg-yello0 rounded-full px-1.75 border-1 border-black py-1"></i>
                </span>
                <span className='font-medium'>Job Filter</span>
            </div>
            <div className="dates flex flex-col px-4 gap-6">
                <div className='flex flex-col'>
                    <span className='font-medium text-xl'>Date Posted</span>
                    <span className='text-gray-700'>Select your property Posted date</span>
                </div>
                <div className="flex flex-wrap gap-2 w-full max-w-md">
                    <button className="w-[48%] px-4 py-4 rounded-full border text-gray-400 bg-white">Any time</button>
                    <button className="w-[48%] px-4 py-4 rounded-full border text-gray-400 bg-white">Past month</button>
                    <button className="w-[48%] px-4 py-4 rounded-full border text-gray-400 bg-white">Past 24 hours</button>
                    <button className="w-[48%] px-4 py-4 rounded-full border text-gray-400 bg-white">Past week</button>
                </div>
            </div>
            <div className="price-range flex flex-col px-4 gap-6">
                <div className='flex flex-col'>
                    <span className='font-medium text-xl'>Price Range</span>
                    <span className='text-gray-700'>Select your property price range</span>
                </div>

                <input type="range" min="0" max="100" className="custom-range" />

                <div className='flex justify-between'>
                    <span className='bg-[#EBEBEB] text-[#103D47]  px-4 py-1 rounded-2xl font-medium'>$0</span>
                    <span className='bg-[#EBEBEB] text-[#103D47]  px-4 py-1 rounded-2xl font-medium'>Max</span>

                </div>

            </div>
            <div className="bedrooms flex flex-col px-4 gap-6">
                <div className='flex flex-col'>
                    <span className='font-medium text-xl'>Bedrooms</span>
                    <span className='text-gray-700'>Select your property Bedrooms</span>
                </div>
                <div className="flex flex-wrap gap-2 w-full max-w-md">
                    <button className="w-[30%] px-4 py-4 rounded-full border text-gray-400 bg-white">1</button>
                    <button className="w-[30%] px-4 py-4 rounded-full border text-gray-400 bg-white">2</button>
                    <button className="w-[30%] px-4 py-4 rounded-full border text-gray-400 bg-white">3</button>
                    <button className="w-[30%] px-4 py-4 rounded-full border text-gray-400 bg-white">4</button>
                    <button className="w-[30%] px-4 py-4 rounded-full border text-gray-400 bg-white">5</button>
                    <button className="w-[30%] px-4 py-4 rounded-full border text-gray-400 bg-white">More   </button>
                </div>
            </div>
            <div className="type flex flex-col px-4 gap-6">
                <div className='flex flex-col'>
                    <span className='font-medium text-xl'>Type of property</span>
                    <span className='text-gray-700'>Select your property type</span>
                </div>
                <div className="flex flex-wrap gap-2 w-full max-w-md">
                    <button className="w-[48%] px-4 py-4 rounded-full border text-gray-400 bg-white">Any</button>
                    <button className="w-[48%] px-4 py-4 rounded-full border text-gray-400 bg-white">Villas</button>
                    <button className="w-[48%] px-4 py-4 rounded-full border text-gray-400 bg-white">Apartments</button>
                    <button className="w-[48%] px-4 py-4 rounded-full border text-gray-400 bg-white">Townhouses</button>
                    <button className="w-[48%] px-4 py-4 rounded-full border text-gray-400 bg-white">Warehouses</button>
                    <button className="w-[48%] px-4 py-4 rounded-full border text-gray-400 bg-white">Mansions</button>
                </div>
            </div>
            <div className="actions flex justify-between gap-20 items-center px-8">
                <span className='underline'>Clear Filters</span>
                <span className='px-15 py-3 bg-[#103D47] flex-1 text-center rounded-full text-[#fff] font-medium'>Save</span>
            </div>
        </div>
    )
}
