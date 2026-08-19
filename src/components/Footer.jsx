import React from 'react'
import { FaFacebook, FaPinterest, FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'

const Footer = () => {
    return (
        <>
            <section className='bg-[#101828] py-8'>
                <div className='max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 px-4'>
                    <div className='text-gray-200'>
                        <h1 className='text-2xl text-red-500 font-semibold mb-2'>SwiftBazaar</h1>
                        <p className='mb-2 text-sm'>Upgrade your lifestyle with cutting-edge gadgets,<br /> smart devices, and home essentials.</p>
                        <div className='grid grid-cols-1 text-sm'>
                            <span>Kathmandu-30, Bagmati Pradesh, Mahakabi Marg</span>
                            <span>Email: support@swiftBazaar.com</span>
                            <span>Phone: (+977) 9814914914</span>
                        </div>
                    </div>

                    <div className=' text-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-15 gap-y-6'>
                        <div className='space-y-2'>
                            <h1 className='text-xl font-semibold'>Customer Service</h1>
                            <p className='text-sm cursor-pointer hover:translate-x-1 hover:text-red-600 duration-200'>Contact Us</p>
                            <p className='text-sm cursor-pointer hover:translate-x-1 hover:text-red-600 duration-200'>Shipping & Returns</p>
                            <p className='text-sm cursor-pointer hover:translate-x-1 hover:text-red-600 duration-200'>FAQs</p>
                            <p className='text-sm cursor-pointer hover:translate-x-1 hover:text-red-600 duration-200'>Order Tracking</p>
                            <p className='text-sm cursor-pointer hover:translate-x-1 hover:text-red-600 duration-200'>Size Guide</p>
                        </div>
                        <div className='space-y-2 text-gray-200'>
                            <h1 className='text-xl font-semibold'>Follow Us</h1>
                            <div className='flex gap-x-4'>
                                <FaFacebook className='hover:text-red-500 hover:shadow-2xl hover:shadow-gray-950 hover:scale-150 hover:cursor-pointer transition-all' />
                                <FaInstagram className='hover:text-red-500 hover:shadow-2xl hover:shadow-gray-950 hover:scale-150 hover:cursor-pointer transition-all' />
                                <FaTwitter className='hover:text-red-500 hover:shadow-2xl hover:shadow-gray-950 hover:scale-150 hover:cursor-pointer transition-all' />
                                <FaPinterest className='hover:text-red-500 hover:shadow-2xl hover:shadow-gray-950 hover:scale-150 hover:cursor-pointer transition-all' />
                            </div>
                        </div>

                    </div>

                    <div className='space-y-3 text-gray-200 lg:pl-15'>
                        <h1 className='text-xl font-semibold'>Stay in the Loop</h1>
                        <p className='text-sm'>Subscribe to get special offers, free giveaways, and more</p>
                        <div className='rounded-md bg-white flex items-center overflow-clip'>
                            <input type="email" placeholder='Emal Address' className='w-full text-black text-lg focus:outline-hidden pl-4' />
                            <button className='py-2 px-6 bg-red-600 hover:bg-red-700 duration-300 cursor-pointer'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>
            <hr className='text-gray-600' style={{ height: '0.5px' }} />
            <section className='py-4 bg-[#101828]'>
                <div className='pb-4 mx-auto flex justify-center items-center text-gray-200'>
                    <p className='text-sm'>© 2026 <span className='text-red-500'>SwiftBazaar</span>. All rights reserved</p>
                </div>
            </section>
        </>
    )
}

export default Footer