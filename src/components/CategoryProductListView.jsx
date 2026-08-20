import React from 'react'
import { FaCartPlus } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../Context/CartContext';

const CategoryProductListView = ({ product }) => {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    return (

        <div className='bg-gray-100 rounded-md flex items-center gap-4 mt-4 w-full p-2'>
            <div className='w-fit h-fit bg-white rounded-md shrink-0 cursor-pointer' onClick={() => navigate(`/products/${product.id}`)}>
                <img src={product.thumbnail} alt={product.thumbnail} className='h-48 w-48 object-cover ' />
            </div>
            <div className='space-y-2'>
                <h1 className='line-clamp-3 overflow-clip sm:text-xl text-lg hover:text-red-400 font-bold w-full'>{product.title}</h1>
                <p className='sm:text-lg text-md flex items-center font-semibold w-full'>$<span className='sm:text-3xl text-2xl'>{product.price}</span><span>({Math.ceil(product.discountPercentage)}% off)</span></p>
                <p className='text-sm w-full'>FREE delivery <span className='font-semibold'>Fri, 18 Aug</span> <br /> Or fastest delivery <span className='font-semibold'>Tommorrow, 25 Aug</span></p>
                <button className='bg-red-500 hover:bg-red-600 transition-all px-3 py-1 rounded-md text-white flex items-center gap-2 cursor-pointer' onClick={()=>addToCart(product)}><FaCartPlus /> Add to card</button>
            </div>
        </div>

    )
}

export default CategoryProductListView