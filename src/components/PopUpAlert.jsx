import React from 'react'
import { LuMessageCircleHeart } from 'react-icons/lu'

const PopUpAlert = ({ showDialog, handleDialog, scrollToTOp }) => {
    return (
        <>
            {
                showDialog && <div className='h-screen w-screen fixed z-50 top-0 bg-black/5 backdrop-blur-sm flex justify-center items-center'>
                    <div className='h-max space-y-2 px-10 py-5 ring-1 ring-gray-300 rounded-lg bg-linear-to-r from-[#262157] via-[#443e85] items-center mx-2'>
                        <h1 className='md:text-3xl sm:text-2xl text-xl font-bold text-white text-center'>
                            <span className='text-red-500 font-serif'>Swift</span>Bazaar
                        </h1>
                        <div className='flex justify-center items-center'>
                            <LuMessageCircleHeart  className='text-red-500 size-15'/>
                        </div>
                        <p className='text-sm text-gray-300'>Thank you for contacting us..!. <br />We'll reach you out immediately </p>
                        <div className='flex justify-end'>
                            <button className='mt-5 px-4 py-2 text-white bg-red-500 hover:bg-red-600 cursor-pointer transition-all rounded-md' onClick={()=>{
                                handleDialog();
                                 scrollToTOp();
                            }}>cancel</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default PopUpAlert