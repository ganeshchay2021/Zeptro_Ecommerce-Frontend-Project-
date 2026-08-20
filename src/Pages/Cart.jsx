import React, { useState } from 'react'
import { useCart } from '../Context/CartContext'
import { FaDeleteLeft } from 'react-icons/fa6';
import { IoIosAdd } from 'react-icons/io';
import { FiMinus } from 'react-icons/fi';
import { MdDeleteForever, MdDeliveryDining } from 'react-icons/md';
import { LuNotebook, LuNotebookText } from 'react-icons/lu';
import { GiShoppingBag } from 'react-icons/gi';
import { useUser } from '@clerk/clerk-react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { BsCart } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Cart = ({ location, getLocation }) => {
  const { cartItem, updatedItemQuantity, deleteItem } = useCart();
  const { user } = useUser();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const totalPrice = cartItem.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  const grandTotal = totalPrice + 5;

  const handleDetectLocation = async () => {
    setIsLoading(true);
    try {
      await getLocation();
    } catch (error) {
      console.error(error);
    }
    setTimeout(async () => {
      setIsLoading(false);
    }, 1500)
  }

  return (
    <section>
      <div className='max-w-6xl w-full mx-auto px-4 md:py-10 py-5 h-full'>
        {
          cartItem.length > 0 ? (<div>
            {/* heading */}
            <h1 className='sm:text-2xl text-xl font-bold'>My Cart({cartItem.length})</h1>

            <div className='md:mt-10 mt-5'>
              {/* cart products list  */}
              {
                cartItem?.map((cart) => {
                  return (
                    <div key={cart.id} className='mb-5'>
                      <div className='bg-gray-100 rounded-lg py-3 px-5 flex justify-between items-center md:flex-row flex-col gap-y-2'>

                        <div className='flex gap-4 items-center w-full'>
                          <img src={cart.thumbnail} alt={cart.title} className='w-20 h-20 rounded-lg' />
                          <div className='w-75'>
                            <h1 className='line-clamp-3 font-medium overflow-clip text-gray-800'>{cart.title}</h1>
                            <h1 className='text-gray-600'>{cart.category}</h1>
                            <h1 className='text-red-500'>${cart.price}</h1>
                          </div>
                        </div>

                        <div className='flex md:gap-x-40 items-center gap-x-20 justify-end w-full'>
                          <div className='flex items-center gap-4'>
                            <button className='bg-red-500 h-7 w-7 flex justify-center items-center rounded-full text-2xl text-white cursor-pointer' onClick={() => updatedItemQuantity(cartItem, cart.id, "decrease")}><FiMinus /></button>

                            <span>{cart.quantity}</span>

                            <button className='bg-red-500 h-7 w-7 flex justify-center items-center rounded-full text-2xl text-white cursor-pointer' onClick={() => updatedItemQuantity(cartItem, cart.id, "increase")}><IoIosAdd /></button>
                          </div>


                          <div className='w-fit p-2 rounded-full hover:shadow-2xl bg-white/60' onClick={() => deleteItem(cart.id)}>
                            <MdDeleteForever className='text-red-500 text-2xl cursor-pointer' />
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }

              {/* delivery and use details  */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-7 md:gap-x-20 gap-y-5'>
                <div className='bg-gray-100 sm:p-7 p-4 rounded-md space-y-2'>
                  <h1 className='font-bold text-xl text-gray-800 '>Delivery Info</h1>
                  <div className='flex space-y-1 flex-col'>
                    <label htmlFor="">Full Name</label>
                    <input type="text" placeholder='Enter your name' value={user?.fullName} className='transition-all p-2 rounded-md bg-white/60 border border-gray-300 outline-none focus:border-red-500 focus:shadow-sm focus:shadow-red-200' />
                  </div>
                  <div className='flex space-y-1 flex-col'>
                    <label htmlFor="">Address</label>
                    <input type="text" placeholder='Enter your address' value={location?.city_district} className='transition-all  p-2 rounded-md bg-white/60 border border-gray-300 outline-none focus:border-red-500 focus:shadow-sm focus:shadow-red-200' />
                  </div>

                  <div className='flex w-full items-center gap-x-5 gap-y-2 flex-col lg:flex-row'>
                    <div className='flex space-y-1 flex-col w-full'>
                      <label htmlFor="">State</label>
                      <input type="text" placeholder='Enter your state' value={location?.state} className=' transition-all w-full p-2 rounded-md bg-white/60 border border-gray-300 outline-none focus:border-red-500 focus:shadow-sm focus:shadow-red-200' />
                    </div>

                    <div className='flex space-y-1 flex-col w-full'>
                      <label htmlFor="">Postal Code</label>
                      <input type="text" placeholder='Enter your postal code' value={location?.postcode} className=' transition-all  w-full p-2 rounded-md bg-white/60 border border-gray-300 outline-none focus:border-red-500 focus:shadow-sm focus:shadow-red-200' />
                    </div>

                  </div>

                  <div className='flex w-full items-center gap-x-5 gap-y-2 flex-col lg:flex-row'>
                    <div className='flex space-y-1 flex-col w-full'>
                      <label htmlFor="">Country</label>
                      <input type="text" placeholder='Enter your Country' value={location?.country} className='transition-all w-full p-2 rounded-md bg-white/60 border border-gray-300 outline-none focus:border-red-500 focus:shadow-sm focus:shadow-red-200' />
                    </div>

                    <div className='flex space-y-1 flex-col w-full'>
                      <label htmlFor="">Phone no</label>
                      <input type="text" placeholder='Enter your phone no' className='transition-all w-full p-2 rounded-md bg-white/60 border border-gray-300 outline-none focus:border-red-500 focus:shadow-sm focus:shadow-red-200' />
                    </div>
                  </div>

                  <button className='bg-red-500 rounded-md px-3 py-1 cursor-pointer mt-3 text-white'>Submit</button>

                  <div className='space-y-2 mt-5 flex justify-center items-center flex-col w-full'>
                    <h1 className='text-gray-600 tracking-wider text-sm'>-----OR-----</h1>
                    <button className='bg-red-500 rounded-md px-3 py-1 cursor-pointer text-white' onClick={handleDetectLocation}>
                      {isLoading ? <AiOutlineLoading3Quarters className="animate-spin text-2xl" /> : "Detect Location"}
                    </button>
                  </div>
                </div>


                {/* Billing and Delivery info section  */}
                <div className='bg-gray-100 rounded-md sm:p-7 p-4 space-y-2 h-max'>
                  <h1 className='font-bold text-xl text-gray-800 '>Bill Details</h1>

                  <div className='flex justify-between items-center'>
                    <h1 className='flex gap-x-1 text-gray-700 items-center'><span><LuNotebookText /></span>Items total</h1>
                    <p className='text-gray-800'>${totalPrice.toFixed(2)}</p>
                  </div>

                  <div className='flex justify-between items-center'>
                    <h1 className='flex gap-x-1 text-gray-700 items-center'><span><MdDeliveryDining /></span>Delivery Charge</h1>
                    <p > <span className='line-through text-gray-800'>$25</span> <span className='texx-red-400'>Free</span></p>
                  </div>

                  <div className='flex justify-between items-center'>
                    <h1 className='flex gap-x-1 text-gray-700 items-center'><span><GiShoppingBag /></span>Handling Charge</h1>
                    <p className='text-red-400'>$5</p>
                  </div>

                  <hr className='text-gray-400' />

                  <div className='flex justify-between items-center'>
                    <h1 className='text-gray-800 items-center font-bold text-lg '>Grand total </h1>
                    <p className='text-gray-800 items-center font-bold text-lg'>${grandTotal.toFixed(2)}</p>
                  </div>

                  <div className='mt-5 space-y-3 w-full'>
                    <p className='text-gray-700'>Apply Promo Code</p>
                    <div className='flex items-center gap-x-2'>
                      <input type="text" placeholder='Enter Code' className='transition-all w-full px-2 py-1 rounded-md bg-white/60 border border-gray-300 outline-none focus:border-red-500 focus:shadow-sm focus:shadow-red-200' />
                      <button className='bg-gray-100 rounded-md px-3 py-1 cursor-pointer text-gray-800 border border-gray-300'>Apply</button>
                    </div>
                    <button className='bg-red-500 rounded-md px-3 py-1 cursor-pointer text-white w-full'>Proceed to checkout</button>
                  </div>

                </div>
              </div>
            </div>
          </div>) : (<div className='max-w-6xl w-full px-4 h-screen flex justify-center items-center'>
            <div className='p-5 place-items-center space-y-3'>
              <BsCart className='text-7xl rotate-24 text-red-400' />
              <h1 className='text-lg sm:text-xl font-bold text-gray-800'>Your cart is empty!</h1>
              <p className='text-sm text-center text-gray-600'>Look like you haven't added anythings to your cart yet</p>
              <div className='flex justify-center'>
                <button className='bg-red-500 hover:bg-red-600 transition-all self-center px-3 py-1 rounded-md text-white cursor-pointer mt-10' onClick={() => navigate('/products')}>Start Shopping</button>
              </div>
            </div>
          </div>)
        }
      </div>
    </section>
  )
}

export default Cart