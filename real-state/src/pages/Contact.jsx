import React from 'react'

export const Contact = () => {
  return (
    <div className='contact-container w-full min-h-screen pt-[80px] flex justify-center items-center gap-20 px-30 py-10'>
      <div className='contact-left w-1/2 flex flex-col gap-10'>
        <div className='flex flex-col w-[7  0%] gap-3'>
          <span className='font-medium text-3xl'>Chat to our team</span>
          <span className='text-gray-500'>Need help with something? want a demo? Get in touch with our friendly team and we”ll get in touch within 1 hour.</span>
        </div>
        <form action="#" className='flex flex-col gap-4'>
          <div className='flex flex-col gap-1'>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder='Your name' required className='border-1 border-gray-400 rounded-full px-4 py-2' />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder='your@company.co' required className='border-1 border-gray-400 rounded-full px-4 py-2' />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="number">Phone Number</label>
            <input type="text" id="number" name="number" placeholder='+1(555)000-0000' required className='border-1 border-gray-400 rounded-full px-4 py-2' />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="message">How can we help?</label>
            <textarea name="message" id="message" className='border border-gray-400 rounded-2xl px-4 py-2 h-[100px]'></textarea>

            {/*  /> */}
          </div>
        </form>
        <div className="form-btns flex flex-col gap-4">
          <span className='font-medium text-xl'>Im a...</span>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-3 border border-gray-800 h-[100p] w-full rounded-2xl px-4 py-4'>
              <span className='px-4 py-3 border rounded-xl border-gray-400 h-fit'>
                <i className='bi bi-person text-xl'></i>
              </span>
              <div className='flex flex-col justify-center items-start gap2'>
                <span className='font-medium'>Buyer</span>
                <span className='text-gray-500'>Someone who wants to buy a property</span>
              </div>
            </div>
            <div className='flex items-center gap-3 border border-gray-800 h-[100p] w-full rounded-2xl px-4 py-4'>
              <span className='px-4 py-3 border rounded-xl border-gray-400 h-fit'>
                <i className='bi bi-houses text-xl'></i>
              </span>
              <div className='flex flex-col justify-center items-start gap2'>
                <span className='font-medium'>Seller</span>
                <span className='text-gray-500'>Someone who wants to list a property</span>
              </div>
            </div>
          </div>
        </div>
      </div >
      <div className="contact-right">
        <img src="/images/contact/contact-hero.jpg" className='h-auto' alt="" />
      </div>
    </div >
  )
}
