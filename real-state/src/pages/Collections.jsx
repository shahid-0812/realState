import React, { useState } from 'react'
import { Filter } from '../Components/Filter';
import { Link } from 'react-router-dom';
export const Collections = () => {
  const [showFilter, setShowFilter] = useState(false);

  const collectionData = [
    { name: "Indah Villa", price: "$1790", description: "Lorem Ipsum is simply dummy ...", rating: "4.7", img: "/images/home/property-1.jpg" },
    { name: "Indah Villa", price: "$1790", description: "Lorem Ipsum is simply dummy ...", rating: "4.7", img: "/images/home/property-2.jpg" },
    { name: "Indah Villa", price: "$1790", description: "Lorem Ipsum is simply dummy ...", rating: "4.7", img: "/images/home/property-3.jpg" },
    { name: "Indah Villa", price: "$1790", description: "Lorem Ipsum is simply dummy ...", rating: "4.7", img: "/images/home/property-4.jpg" },
    { name: "Indah Villa", price: "$1790", description: "Lorem Ipsum is simply dummy ...", rating: "4.7", img: "/images/home/property-5.jpg" },
    { name: "Indah Villa", price: "$1790", description: "Lorem Ipsum is simply dummy ...", rating: "4.7", img: "/images/home/property-6.jpg" },
    { name: "Indah Villa", price: "$1790", description: "Lorem Ipsum is simply dummy ...", rating: "4.7", img: "/images/home/property-7.jpg" },
    { name: "Indah Villa", price: "$1790", description: "Lorem Ipsum is simply dummy ...", rating: "4.7", img: "/images/home/property-8.jpg" },
    { name: "Indah Villa", price: "$1790", description: "Lorem Ipsum is simply dummy ...", rating: "4.7", img: "/images/home/property-5.jpg" },
    { name: "Indah Villa", price: "$1790", description: "Lorem Ipsum is simply dummy ...", rating: "4.7", img: "/images/home/property-6.jpg" },
    { name: "Indah Villa", price: "$1790", description: "Lorem Ipsum is simply dummy ...", rating: "4.7", img: "/images/home/property-7.jpg" },
    { name: "Indah Villa", price: "$1790", description: "Lorem Ipsum is simply dummy ...", rating: "4.7", img: "/images/home/property-8.jpg" },

  ];
  return (
    <div className='collections-container w-full min-h-screen pt-[80px] flex flex-col gap-20 px-30 py-10 max-md:px-10'>
      <div className="collections-header  flex flex-col gap-6 w-full max-sm:items-center">
        <span className='font-medium text-4xl text-[#14161A] max-sm:text-2xl'>Search properties to rent</span>
        <div className='flex relative items-center gap-4 max-sm:gap-2'>
          <div className='w-full border-2 border-gray-300 px-6 py-2 rounded-full flex gap-3 items-center'>
            <i class="bi bi-geo-alt text-2xl"></i>
            <div className='flex flex-col '>
              <label htmlFor="country">Location</label>
              <input type="text" name="country" className='font-medium focus:outline-0  ' id="country" value="Dubai" />
            </div>
          </div>
          <span className='text-[#FFF48E] bg-[#103D47] px-5 py-4 rounded-full text-2xl cursor-pointer max-sm:px-3 max-sm:py-2' onClick={() => setShowFilter(!showFilter)}><i class="bi bi-filter"></i></span>
          {showFilter && (
            <div className="top-20 right-0 absolute w-fit">
              <Filter />
            </div>
          )}
        </div>
      </div>
      <Link to="/propertydetail" className="collections flex gap-3 flex-wrap justify-center items-start ">
        {collectionData.map((collection, index) => (
          <div key={index} className="flex flex-col gap-2 property-card w-fit h-fit mb-10 bg-ed-500">
            <div className={`w-[247px] h-[238px] bg-yellow-300 bg-cover rounded-xl py-6 px-4 `} style={{ backgroundImage: `url(${collection.img})` }}>
              <span className='bg-[#fff] py-2 px-3 font-medium rounded-[5px]'>{collection.price}/month</span>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='flex justify-between items-center gap-5'>
                <span className='text-xl font-medium'>{collection.name}</span>
                <span><i className="bi bi-star-fill"></i> {collection.rating}</span>
              </div>
              <span>{collection.description}</span>
            </div>
          </div>

        ))}
      </Link>
      <div className="pages">
        <ul className='flex gap-3 justify-center items-center max-sm:flex-wrap'>
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
  )

}