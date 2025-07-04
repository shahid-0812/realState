import React from 'react'
import { Testimony } from '../Components/Testimony';

export const Blog = () => {
    const propertyData = [
        { name: "Indah Villa", price: "$1790", description: "Lorem Ipsum is simply dummy ...", rating: "4.7", img: "/images/home/property-1.jpg" },
        { name: "Indah Villa", price: "$1790", description: "Lorem Ipsum is simply dummy ...", rating: "4.7", img: "/images/home/property-2.jpg" },
        { name: "Indah Villa", price: "$1790", description: "Lorem Ipsum is simply dummy ...", rating: "4.7", img: "/images/home/property-3.jpg" },
        { name: "Indah Villa", price: "$1790", description: "Lorem Ipsum is simply dummy ...", rating: "4.7", img: "/images/home/property-4.jpg" },
        { name: "Indah Villa", price: "$1790", description: "Lorem Ipsum is simply dummy ...", rating: "4.7", img: "/images/home/property-5.jpg" },
        { name: "Indah Villa", price: "$1790", description: "Lorem Ipsum is simply dummy ...", rating: "4.7", img: "/images/home/property-6.jpg" },
        { name: "Indah Villa", price: "$1790", description: "Lorem Ipsum is simply dummy ...", rating: "4.7", img: "/images/home/property-7.jpg" },
        { name: "Indah Villa", price: "$1790", description: "Lorem Ipsum is simply dummy ...", rating: "4.7", img: "/images/home/property-8.jpg" },

    ];
    return (
        <>
            <div className='blog-container px-30 py-15 flex flex-col items-center gap-20 max-md:px-10  max-sm:px-8 '>
                <div className="blog-header text-center flex flex-col items-center justify-center gap-4">
                    <div className='flex flex-col items-center gap-4  w-[60%] max-sm:w-full'>
                        <span>• News</span>
                        <span className='font-medium text-4xl'>Stay Updated RealState latest news & insights</span>
                        <span>We understand importance of staying updated with the latest trends and insight in the realState market.</span>
                    </div>
                    <img src="/images/blog/blog-1.jpg" alt="" />
                </div>
                <div className="blog-section-1 flex flex-col gap-8 border-b border-gray-300 pb-10 ">
                    <div className='flex justify-between items-center max-md:flex-col max-md:gap-3 max-md:items-start'>
                        <span className='text-4xl font-medium capitalize w-[40%] max-md:w-[60%] max-sm:w-full'>Today’s Top stories in best realState</span>
                        <span className='w-[40%] self-end max-md:w-full'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
                    </div>
                    <div className='section-1-news flex gap-4 items-stretch max-md:flex-col'>
                        {/* Left Large Card */}
                        <div className='flex-1 relative rounded-xl overflow-hidden flex flex-col gap-4'>
                            <img src="/images/blog/blog-1-1.jpg" className='h-[354px] w-full object-cover rounded-xl' alt="" />
                            <button className='bg-[#103F49] text-[#FFF48E] rounded-full py-2 px-4 absolute top-4 right-4'>Decoration</button>
                            <div >
                                <h2 className='font-semibold text-2xl'>Have the best style for your kitchen: modern & classic</h2>
                                <p className='text-sm text-gray-600 mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>

                        {/* Right Small Card */}
                        <div className='w-[300px] relative rounded-xl overflow-hidden flex flex-col gap-4 max-md:w-full'>
                            <img src="/images/blog/blog-1-2.jpg" className='h-[354px] w-full object-cover rounded-xl max-md:h-full' alt="" />
                            <button className='bg-[#103F49] text-[#FFF48E] rounded-full py-2 px-4 absolute top-4 right-4'>Purchase</button>
                            <div>
                                <h2 className='font-semibold text-2xl'>How to buy a house: step to buying a house</h2>
                                <p className='text-sm text-gray-600 mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="blog-section-2 flex flex-col gap-10">
                    {/* Header */}
                    <div className="blog-section-2-header flex justify-between items-center max-md:flex-col max-md:items-start max-md:gap-4">
                        <span className='font-medium text-3xl w-[30%] max-sm:w-full'>Latest News: Property Insights & Inspiration</span>
                        <div className='self-end flex gap-4 border-b border-gray-500 pb-3 px-2 text-gray-500 font-medium max-md:self-start '>
                            <span>All Articles</span>
                            <span>Home Inspiration</span>
                            <span>Unique Homes</span>
                            <span>Most Rated</span>
                        </div>
                    </div>

                    {/* Articles */}
                    <div className="articles w-full flex justify-center items-start gap-6 flex-wrap">

                        <div className="article flex flex-col gap-3 w-[48%] max-md:w-full">
                            <div className="relative h-[354px] w-full overflow-hidden rounded-xl">
                                <img src="/images/blog/blog-1-1.jpg" className='h-full w-full object-cover' alt="" />
                                <span className="absolute top-4 right-4 bg-[#103F49] text-[#FFF48E] rounded-full px-4 py-1 text-sm">Decoration</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='font-medium text-2xl'>Have the best style for your kitchen: modern & classic</span>
                                <span className='text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha</span>
                            </div>
                        </div>

                        <div className="article flex flex-col gap-3 w-[48%] max-md:w-full">
                            <div className="relative h-[354px] w-full overflow-hidden rounded-xl">
                                <img src="/images/blog/blog-1-2.jpg" className='h-full w-full object-cover' alt="" />
                                <span className="absolute top-4 right-4 bg-[#103F49] text-[#FFF48E] rounded-full px-4 py-1 text-sm">Purchase</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='font-medium text-2xl'>How to buy a house: step to buying a house for the first time</span>
                                <span className='text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha</span>
                            </div>
                        </div>

                        <div className="article flex flex-col gap-3 w-[48%] max-md:w-full">
                            <div className="relative h-[354px] w-full overflow-hidden rounded-xl">
                                <img src="/images/blog/blog-1-3.jpg" className='h-full w-full object-cover' alt="" />
                                <span className="absolute top-4 right-4 bg-[#103F49] text-[#FFF48E] rounded-full px-4 py-1 text-sm">Decoration</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='font-medium text-2xl'>Have the best style for your kitchen: modern & classic</span>
                                <span className='text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha</span>
                            </div>
                        </div>

                        <div className="article flex flex-col gap-3 w-[48%] max-md:w-full">
                            <div className="relative h-[354px] w-full overflow-hidden rounded-xl">
                                <img src="/images/blog/blog-1-4.jpg" className='h-full w-full object-cover' alt="" />
                                <span className="absolute top-4 right-4 bg-[#103F49] text-[#FFF48E] rounded-full px-4 py-1 text-sm">Purchase</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='font-medium text-2xl'>How to buy a house: step to buying a house for the first time</span>
                                <span className='text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="section-3 flex flex-col gap-15">
                    <div className="section-3-header flex justify-between max-sm:flex-col max-sm:gap-4">
                        <div className='flex flex-col gap-6 w-[40%] max-sm:w-full'>
                            <span className="text-3xl font-medium">Explore the best Properties from us for you</span>
                            <span className='text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</span>
                        </div>
                        <span className='px-5 py-3 rounded-4xl border-1 border-gray-700 text-gray-700 text-center font-medium self-end h-fit max-sm:self-start' >See more Property <i class="bi bi-arrow-up-right"></i></span>
                    </div>
                    <div className="properties flex gap-3 flex-wrap justify-center items-start">

                        {propertyData.map((property, index) => (
                            <div key={index} className="flex flex-col gap-2 property-card w-fit h-fit mb-10 bg-ed-500">
                                <div className={`w-[247px] h-[238px] bg-yellow-300 bg-cover rounded-xl py-6 px-4 max-sm:w-[370.5px] max-sm:h-[357px]`} style={{ backgroundImage: `url(${property.img})` }}>
                                    <span className='bg-[#fff] py-2 px-3 font-medium rounded-[5px]'>{property.price}/month</span>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex justify-between items-center gap-5'>
                                        <span className='text-xl font-medium'>{property.name}</span>
                                        <span><i className="bi bi-star-fill"></i> {property.rating}</span>
                                    </div>
                                    <span>{property.description}</span>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
            <Testimony />
        </>
    )
}
