import React from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../Context/CartContext';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const { addToCart, cartItem } = useCart();
    
    console.log(cartItem);

    return (
        <div className='border border-gray-100 rounded-2xl hover:scale-105 cursor-pointer hover:shadow-2xl p-2 transition-all h-max w-full'>
            <img src={product.thumbnail} alt="image" className='bg-gray-300 aspect-square rounded-2xl w-full' onClick={() => navigate(`/products/${product.id}`)} />
            <h1 className='line-clamp-1 p-1 font-bold text-gray-800 sm:text-lg text-md mt-2'>{product.title}</h1>
            <h2 className='mx-1 mb-1 line-clamp-1 font-semibold text-gray-800 sm:text-md text-sm'>{product.brand}</h2>
            <span className='sm:text-lg text-lg text-red-500'>${product.price}</span>
            <button onClick={() => addToCart(product)} className='text-white bg-red-500 hover:bg-red-600 cursor-pointer w-full rounded-md flex p-2 justify-center gap-2 items-center transition-all mt-2'><IoCartOutline className='w-6 h-6' /><span>Add to cart</span></button>
        </div>
    )

}

export default ProductCard