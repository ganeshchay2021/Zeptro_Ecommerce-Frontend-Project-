import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ children }) => {
    const { user } = useUser();
    return (
        <div>
            {
                user ? children : <>
                    <div className='max-w-6xl mx-auto px-4 h-screen w-full flex justify-center items-center'>
                        <div className='text-center space-y-4'>
                            <div>
                                <h1 className='lg:text-5xl md:text-4xl text-3xl font-bold'>
                                    <span className='text-red-500 font-serif'>Swift</span>Bazaar
                                </h1>
                            </div>
                            <div className='space-y-4'>
                                <h1 className='lg:text-3xl md:text-2xl text-xl text-gray-800 font-semibold'>To access cart</h1>
                                <p className='lg:text-xl md:text-lg text-sm text-gray-600'>Please <span className='font-semibold'>sign in</span> your account first</p>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default ProtectedRoute