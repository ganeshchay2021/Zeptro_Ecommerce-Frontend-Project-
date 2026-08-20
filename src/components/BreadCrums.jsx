import React from 'react'
import Products from '../Pages/Products'
import { useNavigate } from 'react-router-dom'

const BreadCrums = ({title}) => {
    const navigate= useNavigate();
  return (
    <div className='my-10'>
        <h1 className='sm:text-xl text-lg text-gray-700 font-semibold'><span className='cursor-pointer' onClick={()=> navigate('/')}>Home</span> / <span className='cursor-pointer' onClick={()=> navigate('/products')}>Products</span> / <span>{title}</span> </h1>

    </div>
  )
}

export default BreadCrums