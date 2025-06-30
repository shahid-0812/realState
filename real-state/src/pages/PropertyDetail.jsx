import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Testimony } from '../Components/Testimony';

export const PropertyDetail = () => {
    const propertyData = [
        { name: "Indah Villa", price: "$1790", description: "Lorem Ipsum is simply dummy ...", rating: "4.7", img: "/images/home/property-1.jpg" },
        { name: "Indah Villa", price: "$1790", description: "Lorem Ipsum is simply dummy ...", rating: "4.7", img: "/images/home/property-2.jpg" },
        { name: "Indah Villa", price: "$1790", description: "Lorem Ipsum is simply dummy ...", rating: "4.7", img: "/images/home/property-3.jpg" },
        { name: "Indah Villa", price: "$1790", description: "Lorem Ipsum is simply dummy ...", rating: "4.7", img: "/images/home/property-4.jpg" },


    ];
    const facility = [
        { icon: "fa-solid fa-bed", desc: "4 Bedrooms" },
        { icon: "fa-solid fa-house", desc: "Smart Home System" },
        { icon: "fa-solid fa-dumbbell", desc: "Gym" },
        { icon: "fa-solid fa-warehouse", desc: "Garage" },
        { icon: "fa-solid fa-bath", desc: "4 Bathrooms" },
        { icon: "fa-solid fa-maximize", desc: "1.56m2" },
        { icon: "fa-solid fa-swimming-pool", desc: "Pool" },
        { icon: "fa-solid fa-tree", desc: "Garden view" }
    ];

    const navigate = useNavigate();
    return (
        <>
            <div className='property-detail-container px-20 py-15 flex flex-col items-center gap-20 max-md:px-10'>
                <div className="property-detail-header flex justify-between items-center w-full">
                    <div className='flex flex-col gap-2'>
                        <span onClick={() => navigate(-1)} className='cursor-pointer'><i className="bi bi-chevron-left pr-2"></i> Back</span>
                        <span className='font-medium text-2xl'>Indah Villa of Xielam, main street kindae</span>
                        <div className='flex items-center gap-2 text-gray-500'>
                            <span>Italy |</span>
                            <span>Private Villa |</span>
                            <span>4 Bedrooms</span>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <span className='border py-2 px-3 bg-[#fff] rounded-full shadow-sm text-gray-600 border-gray-300'>
                            <i className='bi bi-share'></i>
                        </span>
                        <span className='border py-2 px-3 bg-[#fff] rounded-full shadow-sm text-gray-600 border-gray-300'>
                            <i className='bi bi-bookmark'></i>
                        </span>
                    </div>
                </div>
                <div className="property-images flex flex-wrap gap-2 max-md:flex-col">
                    {/* Left Large Image */}
                    <img src="/images/property-detail/property-detail-1.jpg" className="h-[496px] w-[60%] max-md:w-full object-cover rounded-lg" alt="" />

                    {/* Right Side Small Grid */}
                    <div className="flex flex-wrap gap-2 w-[38%] max-md:w-full items-center">
                        <img src="/images/property-detail/property-detail-2.jpg" className="h-[241px] w-[48%] object-cover rounded-lg" alt="" />
                        <img src="/images/property-detail/property-detail-3.jpg" className="h-[241px] w-[48%] object-cover rounded-lg" alt="" />
                        <img src="/images/property-detail/property-detail-4.jpg" className="h-[241px] w-[48%] object-cover rounded-lg" alt="" />
                        <img src="/images/property-detail/property-detail-5.jpg" className="h-[241px] w-[48%] object-cover rounded-lg" alt="" />
                    </div>
                </div>
                <div className="property-description w-full flex justify-between items-start gap-10 max-md:flex-col">
                    <div className='w-[60%] flex flex-col gap-15 max-md:w-full'>
                        <div className='flex flex-col gap-2'>
                            <span className='font-medium'>Description</span>
                            <span className='text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry ....</span>
                            <span className='font-medium'>Read More</span>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <span className='font-medium text-2xl'>Hosted</span>
                            <div className='flex justify-between items-center'>
                                <div className='flex gap-4'>
                                    <img src="/images/property-detail/agent-detail-1.jpg" alt="" />
                                    <div>
                                        <span className='font-medium'>Zohe Ival</span>
                                        <div className='text-gray-500'>
                                            <span>New York | </span>
                                            <span>2 years Hosting</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <div className='flex gap-2 py-2 px-5 border border-gray-300 rounded-full w-fit'>
                                        <i className='bi bi-envelope'></i>
                                        <span>Mail Agent</span>
                                    </div>
                                    <div className='flex gap-2 py-2 px-5 border border-gray-300 rounded-full w-fit'>
                                        <i className='bi bi-telephone'></i>
                                        <span>Call Agent</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="property-pricing w-[40%] bg-gray-200 px-5 py-5 rounded-2xl flex flex-col gap-4 max-md:w-full">
                        <span className='font-medium text-2xl'>$1790/month</span>
                        <div className='bg-[#fff] flex flex-col gap-8 rounded-2xl px-6 py-5 '>
                            <div className='flex justify-between border-b pb-8'>
                                <div className='flex items-start gap-3 font-medium text-xl'>
                                    <i className='bi bi-calendar4-range'></i>
                                    <div className='flex flex-col gap-1'>
                                        <span className='text-gray-500'>Check In</span>
                                        <span>17/12/2023</span>
                                    </div>
                                </div>
                                <div className='flex items-start gap-3 font-medium text-xl'>
                                    <i className='bi bi-calendar4-range'></i>
                                    <div className='flex flex-col gap-1'>
                                        <span className='text-gray-500'>Check Out</span>
                                        <span>17/12/2023</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex items-start gap-3 font-medium text-xl'>
                                    <i className='bi bi-person'></i>
                                    <div className='flex flex-col gap-1'>
                                        <span className='text-gray-500'>Guest</span>
                                        <span>2 Peoples</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className='bg-black text-[#fff] font-medium py-3 px-4 rounded-full'>Check availability</button>
                    </div>
                </div>
                <div className="property-facilityw-[70%] self-start flex flex-col gap-4">
                    <span className='font-medium'>Facility</span>
                    <div className="facility flex flex-wrap items-center gap-2">

                        {
                            facility.map((item, index) => (
                                <div key={index} className='pr-10'>
                                    <i className={`${item.icon} mr-3`}></i>
                                    <span>{item.desc}</span>
                                </div>
                            ))
                        }



                    </div>
                </div>
                <div className="property-location flex flex-col gap-2">
                    <span className='font-medium'>Location</span>
                    <img src="/images/property-detail/property-location.jpg" alt="" />
                </div>
                <div className="more-property flex flex-col">
                    <span>Explore more Properties</span>
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
            </div>
            <Testimony />
        </>
    )
}
