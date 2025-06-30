import React from 'react'
import { Link } from 'react-router-dom'
import { News } from '../Components/News'

export const BlogDetails = () => {
    return (
        <div className='blog-details-container px-30 py-15 flex flex-col items-center gap-20 max-md:px-10'>
            <div className="details-header flex items-start justify-between gap-6 max-md:flex-col">
                {/* Left Side */}
                <div className="flex flex-col gap-4 w-1/2 max-md:w-full">
                    <button className='bg-[#103F49] text-[#FFF48E] rounded-full py-2 px-4 w-fit'>Decoration</button>
                    <span className='font-medium text-4xl leading-snug'>Have the best style for your kitchen: modern & classic</span>
                    <span className='text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha</span>

                    {/* Author Info */}
                    <div className="flex items-center gap-3 mt-4">
                        <img src="/images/blog/blog-detail-1.png" alt="" className="w-10 h-10 rounded-full object-cover" />
                        <div className="flex flex-col">
                            <span className="font-medium">Natali Craig</span>
                            <span className="text-sm text-gray-600  5 w-fit ">Published 14 Jan 2022</span>
                        </div>
                    </div>
                </div>

                {/* Right Side Image */}
                <img src="/images/blog/blog-1-1.jpg" alt="" className="w-1/2 h-[400px] object-cover rounded-xl max-md:w-full" />
            </div>
            <div className="privacy-content flex justify-between items-start gap-10">
                <div className="content-left flex flex-col gap-6   py-6 w-fit max-md:hidden">
                    <span className='font-medium'>Table of contents</span>
                    <div className='text-gray-500 flex flex-col gap-1 border-b border-gray-300 pb-4'>
                        <ul className=' flex flex-col gap-1'>
                            <li>Introduction</li>
                            <li>Software and tools</li>
                            <li>Other resources</li>
                            <li>Conclusion</li>
                        </ul>
                    </div>
                    <div className="social-links flex justify-center items-center gap-3 ">
                        <span className='border py-2 px-3 rounded-xl shadow-sm text-gray-600 border-gray-300'>
                            <i class="bi bi-link-45deg"></i>
                        </span>
                        <span className='border py-2 px-3 rounded-xl shadow-sm text-gray-600 border-gray-300'>
                            <i className='bi bi-twitter'></i>
                        </span>
                        <span className='border py-2 px-3 rounded-xl shadow-sm text-gray-600 border-gray-300'>
                            <i className='bi bi-facebook'></i>
                        </span>
                        <span className='border py-2 px-3 rounded-xl shadow-sm text-gray-600 border-gray-300'>
                            <i className='bi bi-linkedin'></i>
                        </span>
                    </div>
                </div>
                <div className="privacy-right w-[60%] flex flex-col gap-6 max-md:w-full">
                    <span className='border-b border-gray-300 pb-8 text-gray-500    '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
                    </span>
                    <div className='flex flex-col gap-4'>
                        <span className='font-medium text-2xl'>Introduction</span>
                        <div className='flex flex-col gap-4 text-gray-500'>
                            <span>
                                Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
                            </span>
                            <span>
                                Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
                            </span>

                            <img src="/images/blog/blog-detail-2.jpg" alt="" />
                            <span>Image courtesy of Laura Davidson via <Link href="https://unsplash.com/" className='underline'>Unsplash</Link></span>
                            <span className='border-l-3 font-medium text-2xl text-black italic border-black pl-4'>
                                “In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”
                            </span>
                            <span>
                                Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
                            </span>
                            <span>
                                Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
                            </span>
                            <span>
                                Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <span className='font-medium text-2xl'>Software and tools</span>
                        <div className='flex flex-col gap-4 text-gray-500'>
                            <span>
                                Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <span className='font-medium text-2xl'>Other resources</span>
                        <div className='flex flex-col gap-4 text-gray-500'>
                            <span>
                                Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.
                            </span>
                            <ol className='list-decimal pl-5'>
                                <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
                                <li>Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.</li>
                                <li>Suspendisse maecenas ac donec scelerisque diam sed est duis purus.</li>
                            </ol>
                            <img src="/images/blog/blog-detail-3.jpg" alt="" />
                            <span>Image courtesy of Laura Davidson via <Link href="https://unsplash.com/" className='underline'>Unsplash</Link></span>
                            <span>
                                Lectus leo massa amet posuere. Malesuada mattis non convallis quisque. Libero sit et imperdiet bibendum quisque dictum vestibulum in non. Pretium ultricies tempor non est diam. Enim ut enim amet amet integer cursus. Sit ac commodo pretium sed etiam turpis suspendisse at.
                            </span>
                            <span>
                                Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <span className='font-medium text-2xl'>Conclusion</span>
                        <div className='flex flex-col gap-4 text-gray-500'>
                            <span>
                                Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
                            </span>
                            <span>
                                Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.
                            </span>
                            <span>
                                Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor.
                            </span>
                            <span>
                                Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="section-4 flex flex-col gap-15">
                <div className="section-4-header flex justify-between items-center">
                    <span className='font-medium text-3xl w-[30%]'>Latest News: Property Insights & Inspiration</span>
                    <div className='self-end flex gap-4 border-b-1 border-gray-500 pb-3 px-2 text-gray-500 font-medium'>
                        <span>All Articles</span>
                        <span>Home Inspiration</span>
                        <span>Unique Homes</span>
                        <span>Most Rated</span>
                    </div>
                </div>
                <div className="articles w-full  flex justify-center items-start gap-5 max-md:flex-col max-md:items-center">
                    <div className="article flex flex-col gap-3 ">
                        <div style={{ backgroundImage: "url(/images/home/section-4-1.jpg)" }} className='h-[318px] w-[495px] bg-cover'></div>
                        <div className='flex flex-col max-md:w-[70%] '>
                            <span className='font-medium text-2xl '>Have the best style for your kitchen: modern & classic</span>
                            <span className='text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha</span>
                        </div>
                    </div>
                    <div className="article flex flex-col gap-3 ">
                        <div style={{ backgroundImage: "url(/images/home/section-4-2.jpg)" }} className='h-[318px] w-[495px] bg-cover'></div>
                        <div className='flex flex-col max-md:w-[70%] '>
                            <span className='font-medium text-2xl '>How to buy a house: step to buying  a house
                                for the first time</span>
                            <span className='text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha</span>
                        </div>
                    </div>

                </div>
            </div> */}
        </div>
    )
}
