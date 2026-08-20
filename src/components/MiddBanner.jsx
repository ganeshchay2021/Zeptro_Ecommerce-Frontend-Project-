import React from 'react'
import MidBanner from '../assets/midbanner.jpg'
import { useNavigate } from 'react-router-dom'

const MiddBanner = () => {
    const navigate = useNavigate();
    return (
        <section className='bg-gray-100 md:py-24 py-12'>
            <div className='md:mx-0 mx-4 rounded-md'>
                <div className=' relative max-w-7xl rounded-2xl mx-auto pt-28 h-130 md:h-140 bg-center bg-contain md:bg-no-repeat' style={{ backgroundImage: `url(${MidBanner})`, backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
                    <div className='absolute bg-black/40 inset-0 rounded-2xl bg-opacity-50 flex items-center justify-center'>
                        <div className='text-center text-white px-4'>
                            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-bold'>Discover Everything, All in One Place</h1>
                            <p className='text-lg md:text-xl mb-6'>Shop the latest tech, fashion, home essentials, and more with unbeatable prices.</p>
                            <button className='bg-red-500 hover:bg-red-600 text-white font-semibold cursor-pointer transition-all duration-300 rounded-lg px-4 py-2 md:px-6 md:py-3' onClick={() => navigate('/products')}>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MiddBanner