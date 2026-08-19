import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const getPages = (current, total) => {
    const pages = [];
    if (total <= 5) {
        for (let i = 1; i <= total; i++) {
            pages.push(i);
        }
    } else {
        if (current <= 3) {
            pages.push(1, 2, 3, '...', total);
        } else if (current >= total - 2) {
            pages.push(1, '...', total - 2, total - 1, total);
        } else {
            pages.push(1, '...', current - 1, current, current + 1, '...', total);
        }
    }
    return pages;
};

const Pagination = ({ handlePage, page, dynamicPage }) => {
    return (
        <div className='mt-10 flex gap-x-2'>
            <button disabled={page === 1} className={`flex justify-center items-center gap-x-2 text-sm text-white px-3 py-1 ${page === 1 ? "bg-red-400" : "bg-red-500"} rounded-md cursor-pointer `} onClick={() => handlePage(page - 1)}><IoIosArrowBack /></button>
            {
                getPages(page, dynamicPage)?.map((item, index)=>{
                    return (
                        <span key={index} className={`${item===page? "font-bold text-red-500": "font-semibold"} cursor-pointer`} onClick={()=>{
                            typeof item==="number" && handlePage(item);
                        }}>{item}</span>
                    )
                })
            }
            <button disabled={page === dynamicPage} className={`flex justify-center items-center gap-x-2 text-sm text-white px-3 py-1 ${page === dynamicPage ? "bg-red-400" : "bg-red-500"} rounded-md cursor-pointer `} onClick={() => handlePage(page + 1)}> <IoIosArrowForward /> </button>

        </div>
    )
}

export default Pagination