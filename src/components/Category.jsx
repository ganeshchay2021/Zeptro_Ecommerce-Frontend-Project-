import React from 'react'
import { getData } from '../Context/DataContext'
import { Link } from 'react-router-dom';

const Category = () => {
    const { data } = getData();

    const getCategory = (data, property) => {
        let category = data?.map((cateElm) => {
            return cateElm[property]
        });

        return category;
    }

    const allCategory = [...new Set(getCategory(data, "category"))];
    console.log(allCategory);

    return (
        <div className='bg-[#101829]'>
            <div className='max-w-6xl w-full mx-auto py-3 flex justify-around items-center'>
                {
                    allCategory?.map((category, index) => {
                        return (
                            <div>
                                <button className='bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer '>{category}</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Category