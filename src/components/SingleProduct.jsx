import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../assets/Loading4.webm';
import BreadCrums from './BreadCrums';
import { FaCartPlus } from 'react-icons/fa';
import { useCart } from '../Context/CartContext';

const SingleProduct = () => {
    const params = useParams();

    const [product, setProduct] = useState({});

    const { addToCart, cartItem } = useCart();

    console.log(cartItem);

    const calculateDiscountPrice = () => {
        if (!product?.price) return 0;
        const discounted = product.price - (product.price * (product.discountPercentage / 100));
        return Math.ceil(discounted);
    }

    const fetchSingleProduct = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/${params.id}`);
            setProduct(response.data);
        } catch (error) {
            console.error("Error", error);
        }
    }

    useEffect(() => {
        fetchSingleProduct();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])


    // UI jsx 
    return (
        <section>
            {
                product ? (
                    <div className='max-w-6xl mx-auto px-4 w-full mb-10'>
                        <BreadCrums title={product.title} />
                        <div className='flex gap-x-5 sm:flex-row flex-col'>
                            {/* product image  */}

                            <img src={product.thumbnail} alt={product.images} className='object-cover object-center rounded-2xl sm:w-150 sm:h-150 h-100 w-100' />


                            {/* product details  */}
                            <div className='sm:space-y-8 space-y-4'>
                                <h1 className='text-4xl sm:text-6xl text-gray-800 font-bold'>{product.title}</h1>
                                <p className='text-xl sm:text-2xl text-gray-700 uppercase'><span>{product.brand}</span> / <span>{product.tags?.[0]}</span> / <span>{product.tags?.[1]}</span></p>

                                <div className='flex gap-x-2 '>
                                    <p className='text-lg sm:text-xl font-semibold'><span className='text-red-500'>${calculateDiscountPrice()}</span><span className='line-through text-gray-800 px-4'>${product.price}</span><span className='px-3 py-1 rounded-md bg-red-500 text-white'>{product.discountPercentage}% discount</span></p>
                                </div>

                                <p className='sm:text-md text-sm text-gray-600'>
                                    {product.description}
                                </p>

                                <div className='flex items-center gap-x-4'>
                                    <label htmlFor="" className='sm:text-md text-sm text-gray-600'>Quantity:</label>
                                    <input type="number" min={1} value={1} className='w-20 border border-gray-300 rounded-lg focus:ring-red-500 focus:ring-2 focus:outline-none px-3 py-1' />
                                </div>

                                <div>
                                    <button className='text-xl sm:text-2xl  text-white rounded-md flex justify-center items-center gap-x-2 bg-red-400 hover:bg-red-500 transition-all px-4 py-1.5 cursor-pointer' onClick={() => addToCart(product)}><FaCartPlus /> Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (<div className='h-screen sm:h-120 flex justify-center items-center'>
                    <video autoPlay muted loop>
                        <source src={Loading} type='video/webm' />
                    </video>
                </div>)
            }
        </section>
    )
}

export default SingleProduct