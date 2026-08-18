import React from 'react'
import { getData } from '../Context/DataContext'
import { Link } from 'react-router-dom';

const Category = () => {
    const { allCategory } = getData();

    return (
        <div className='bg-[#101829]'>
            <div className='max-w-6xl w-full mx-auto py-3 flex justify-around items-center'>
                {
                    allCategory?.slice(0,6).map((category, index) => {
                        return (
                            <div key={index}>
                                <button className='bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer'>{category}</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Category