import React from 'react'
import { getData } from '../Context/DataContext'
import { Link, useNavigate } from 'react-router-dom';

const Category = () => {
    const { data } = getData();
    const navigate = useNavigate()
    
        const getCategory = (data, property) => {
        let category = data?.map((cateElm) => {
            return cateElm[property]
        }).filter(Boolean);

        return category;
    }

    const allCategory = [...new Set(getCategory(data, "category"))];

    
    return (
        <div className='bg-[#101829]'>
            <div className='max-w-6xl w-full mx-auto py-3 flex justify-around items-center flex-wrap md:gap-x-2 gap-y-4 gap-x-4 px-2'>
                {
                    allCategory?.slice(0,6).map((category, index) => {
                        return (
                            <div key={index}>
                                <button className='bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer' onClick={()=>navigate(`/category/${category}`)}>{category}</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Category