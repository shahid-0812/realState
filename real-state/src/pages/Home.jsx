import React from 'react'

export const Home = () => {

    const agentData = [
        { name: 'John Thompson', rating: 5.0, properties: 120, img: '/images/home/agent-1.png' },
        { name: 'Samantha Green', rating: 5.0, properties: 108, img: '/images/home/agent-2.png' },
        { name: 'Emily Johnson', rating: 5.0, properties: 105, img: '/images/home/agent-3.png' },
        { name: "Michael O'Neil", rating: 5.0, properties: 91, img: '/images/home/agent-4.png' },
    ];

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
        <div className='home-container'>
            <div className="hero-section flex items-center justify-center py-10">
                <div className='hero-header flex gap-8 items-center justify-between text-[#fff]'>
                    <div className="hero-text flex flex-col z-10 leading-none ml-20 w-[50%] gap-2">
                        <span>Lorem Ipsum is simply dummy text</span>
                        <div className="main-text flex flex-col font-bold text-[5.5rem]">
                            <span>RealState</span>
                            <span className='transform -translate-x-8'>Property</span>
                            <span>Investments</span>
                        </div>
                        <span className='text-sm'>Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text </span>
                    </div>
                    <div className="hero-form bg-red- self-end mb-4 gap-4 flex flex-col z-10 w-full mr-5">
                        <div className="cur-time flex gap-2 py-2  px-3 items-center justify-center bg-[#fff] rounded-4xl">
                            <span className='px-3 py-2 bg-[#45656E] rounded-4xl'>
                                <i class="bi bi-globe-americas text-[#FFF48E] text-xl"></i>
                            </span>
                            <span className='text-sm'>Your Current Time Now Is</span>
                            <div className='calender bg-red-400 px-3 py-2 flex gap-2 items-center justify-center rounded-4xl'>
                                <i class="bi bi-calendar4-range"></i>
                                <span className='text-sm'>21-04-2025</span>
                            </div>
                        </div>
                        <div className="form text-[#103D47] w-full bg-[#fff] px-5 py-4 rounded-2xl text-[#000] flex flex-col gap-5">
                            <div className='flex flex-col'>
                                <span className='font-bold'>Find a nearby real state</span>
                                <span>Lorem Ipsum is simply dummy text</span>
                            </div>
                            <div className="inputs flex flex-wrap text-sm gap-5">
                                <div className='flex gap-5 border-2 py-1 px-3 border-gray-400 w-[45%] rounded-4xl items-center'>
                                    <i class="bi bi-geo-alt-fill text-xl"></i>
                                    <div className='flex flex-col'>
                                        <span className='text-gray-500'>Location</span>
                                        <span className='font-bold'>Dubai</span>
                                    </div>
                                </div>

                                <div className='flex gap-5 border-2 py-1 px-3 border-gray-400 w-[45%] rounded-4xl items-center'>
                                    <i class="bi bi-buildings text-xl"></i>
                                    <div className='flex flex-col'>
                                        <span className='text-gray-500'>Property Type</span>
                                        <span className='font-bold'>Villa</span>
                                    </div>
                                </div>

                                <div className='flex gap-5 border-2 py-1 px-3 border-gray-400 w-[45%] rounded-4xl items-center'>
                                    <i class="bi bi-wallet2 text-xl"></i>
                                    <div className='flex flex-col'>
                                        <span className='text-gray-500'>Price</span>
                                        <span className='font-bold'>$211,100</span>
                                    </div>
                                </div>

                                <div className='flex gap-5 border-2 py-1 px-3 border-gray-400 w-[45%] rounded-4xl items-center'>
                                    <i class="bi bi-bed text-xl"></i>
                                    <div className='flex flex-col'>
                                        <span className='text-gray-500'>Bedroom</span>
                                        <span className='font-bold'>3-5</span>
                                    </div>
                                </div>
                            </div>
                            <div className="input-btn flex flex-col gap-3">
                                <div className='flex gap-3 py-3 px-5     bg-[#EBEBEB] w-full rounded-2xl items-center'>
                                    <i class="bi bi-geo-alt text-xl"></i>
                                    <span className='text-gray-400'>search places...</span>
                                </div>
                                <span className='w-full bg-[#FFF48E] py-3 px-5 font-bold text-[#103D47] rounded-4xl text-center'>Search nearby</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-1 px-30 flex flex-col gap-20">
                <div className="section-1-text flex justify-between">
                    <div className='flex flex-col gap-3 w-[30%]'>
                        <span className='text-3xl lowercase font-bold text-[#103D47]  '>
                            Find Your Dream
                            Home: Where Every Space&nbsp;
                            <span className='text-gray-400'>
                                Tells a Unique
                                Story.
                            </span>
                        </span>
                        <svg width="24" height="140" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                            <path d="M11 130l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-130h-1v130z" />
                        </svg>
                    </div>
                    <span className='text-gray-500 w-[40%] self-end'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                    </span>
                </div>
                <div className="section-1-1 flex gap-6">
                    <img src="/images/home/section-1-img.jpg" alt="img" className='w-[70%]' />
                    <div className='flex flex-col self-end gap-3 text-gray-500 w-[25%]'>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's s</span>
                        <span className='border-1 w-fit py-2 px-6.5 rounded-4xl'>Learn more</span>
                    </div>
                </div>
            </div>
            <div className="section-2 relative px-30 py-15 my-20 bg-[#14161A] text-[#fff] flex flex-col gap-10 items-center">
                <span className='absolute text-[#fff] text-[14rem] opacity-30 top-18     font-bold italic text-center'>REALSTATE</span>
                <div className='flex flex-col w-[40%] gap-4 z-10 self-start'>
                    <span>Our properties</span>
                    <span className='text-3xl font-medium'>Explore our best properties just for you.</span>
                </div>
                <div className='z-10  '>
                    <img src="/images/home/section-2-img.jpg" alt="" className='rounded-xl' />
                </div>
                <div className='flex justify-between items-start gap-10'>
                    <div className='flex flex-col gap-3 w-[60%]'>
                        <span className='font-medium text-2xl'>Unique villa 6 bedrooms</span>
                        <span className='text-gray-300'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's s</span>
                    </div>
                    <span className='font-bold text-3xl'>$1.249.000</span>
                </div>
            </div>
            <div className="section-3 my-20  px-30  flex flex-col gap-10">
                <div className="section-3-header flex justify-between">
                    <div className='flex flex-col gap-6 w-[15%]'>
                        <span className='font-medium text-3xl'>Check our top agents</span>
                        <span className='px-5 py-3 rounded-4xl border-1 border-gray-700 text-gray-700 text-center font-medium' >Top Agents</span>
                    </div>
                    <span className='lowercase w-[30%] text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. L</span>
                </div>
                <div className="agents flex justify-center items-center gap-5">

                    {agentData.map((agent, index) => (

                        <div key={index} className="agent-card bg-r=ed-400 w-[30%] px-5 py-5 rounded-2xl border-1 border-gray-300 flex flex-col gap-5">
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
            </div>
            <div className="section-3 my-20  px-30 py-15 flex flex-col gap-15">
                <div className="section-3-header flex justify-between">
                    <div className='flex flex-col gap-6 w-[40%]'>
                        <span className="text-3xl font-medium">Explore the best Properties from us for you</span>
                        <span className='text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</span>
                    </div>
                    <span className='px-5 py-3 rounded-4xl border-1 border-gray-700 text-gray-700 text-center font-medium self-end h-fit' >See more Property <i class="bi bi-arrow-up-right"></i></span>
                </div>
                <div className="properties flex gap-3 flex-wrap justify-center items-start">

                    {propertyData.map((property, index) => (
                        <div key={index} className="flex flex-col gap-2 property-card w-fit h-fit mb-10 bg-ed-500">
                            <div className={`w-[247px] h-[238px] bg-yellow-300 bg-cover rounded-xl py-6 px-4`} style={{ backgroundImage: `url(${property.img})` }}>
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
            <div className="section-4 my-20  px-30 py-15 flex flex-col gap-15">
                <div className="section-4-header flex justify-between items-center">
                    <span className='font-medium text-3xl w-[30%]'>Latest News: Property Insights & Inspiration</span>
                    <div className='self-end flex gap-4 border-b-1 border-gray-500 pb-3 px-2 text-gray-500 font-medium'>
                        <span>All Articles</span>
                        <span>Home Inspiration</span>
                        <span>Unique Homes</span>
                        <span>Most Rated</span>
                    </div>
                </div>
                <div className="articles w-full  flex justify-center items-start gap-5">
                    <div className="article flex flex-col gap-3 ">
                        <div style={{ backgroundImage: "url(/images/home/section-4-1.jpg)" }} className='h-[318px] w-[495px] bg-cover'></div>
                        <div className='flex flex-col  '>
                            <span className='font-medium text-2xl '>Have the best style for your kitchen: modern & classic</span>
                            <span className='text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha</span>
                        </div>
                    </div>
                    <div className="article flex flex-col gap-3 ">
                        <div style={{ backgroundImage: "url(/images/home/section-4-2.jpg)" }} className='h-[318px] w-[495px] bg-cover'></div>
                        <div className='flex flex-col  '>
                            <span className='font-medium text-2xl '>How to buy a house: step to buying  a house
                                for the first time</span>
                            <span className='text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="section-5 flex flex-col gap-15   items-center justify-center w-full h-full mb-20">
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
                <div className="section-5-cards flex flex-wrap w-full h-[400px]">
                    <div className="card w-1/4 h-[300px] bg-red-500 bg-cover" style={{ backgroundImage: "url(/images/home/section-5-1.jpg)" }}></div>
                    <div className="card w-1/4 h-[300px] bg-[#103D47] text-[#fff] flex flex-col items-start gap-2 px-6 py-6 font-medium">
                        <div className='flex gap-2 items-center justify-center'>
                            <img src="/images/home/section-5-card.png" alt="" />
                            <span>JHONE LIM</span>
                        </div>
                        <i className="bi bi-quote text-xl"></i>
                        <span className='mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                        <i className="bi bi-quote text-xl"></i>
                    </div>
                    <div className="card w-1/4 h-[300px] bg-red-500 bg-cover" style={{ backgroundImage: "url(/images/home/section-5-3.jpg)" }}></div>
                    <div className="card w-1/4 h-[300px] bg-[#FFF48E]  text-[#103D47] flex flex-col items-start gap-2 px-6 py-6 font-medium">
                        <div className='flex gap-2 items-center justify-center'>
                            <img src="/images/home/section-5-card.png" alt="" />
                            <span>JHONE LIM</span>
                        </div>
                        <i className="bi bi-quote text-xl"></i>
                        <span className='mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                        <i className="bi bi-quote text-xl"></i>
                    </div>
                    <div className="card w-1/4 h-[300px] bg-[#FFF48E] text-[#103D47] flex flex-col items-start gap-2 px-6 py-6 font-medium">
                        <div className='flex gap-2 items-center justify-center'>
                            <img src="/images/home/section-5-card.png" alt="" />
                            <span>JHONE LIM</span>
                        </div>
                        <i className="bi bi-quote text-xl"></i>
                        <span className='mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                        <i className="bi bi-quote text-xl"></i>
                    </div>
                    <div className="card w-1/4 h-[300px] bg-red-500 bg-cover" style={{ backgroundImage: "url(/images/home/section-5-2.jpg)" }}></div>
                    <div className="card w-1/4 h-[300px] bg-[#103D47] text-[#fff] flex flex-col items-start gap-2 px-6 py-6 font-medium">
                        <div className='flex gap-2 items-center justify-center'>
                            <img src="/images/home/section-5-card.png" alt="" />
                            <span>JHONE LIM</span>
                        </div>
                        <i className="bi bi-quote text-xl"></i>
                        <span className='mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                        <i className="bi bi-quote text-xl"></i>
                    </div>
                    <div className="card w-1/4 h-[300px] bg-red-500 bg-cover" style={{ backgroundImage: "url(/images/home/section-5-4.jpg)" }}></div>
                </div>
            </div>
        </div>
    )
}
