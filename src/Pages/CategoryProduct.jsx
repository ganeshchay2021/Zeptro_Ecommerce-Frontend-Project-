import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../assets/Loading4.webm';
import { ChevronLeft } from 'lucide-react';
import CategoryProductListView from '../components/CategoryProductListView';

const CategoryProduct = () => {
  const param = useParams();
  const [categoryProduct, setCategoryProduct] = useState([]);
  const navigate=useNavigate();


  const fetchCategoryProducts = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/category/${param.category}`);
      setCategoryProduct(response.data.products);
    } catch (error) {
      console.log("Error", error);
    }
  }

  useEffect(() => {
    fetchCategoryProducts();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section >
      <div className='max-w-6xl mx-auto sm:my-10 my-5 px-4'>
        {
          categoryProduct.length > 0 ? (
            <div>
              <button onClick={()=>navigate('/')} className='flex items-center gap-2 cursor-pointer bg-gray-800 text-white rounded-md px-3 py-1'>
                <ChevronLeft /> Back
              </button>
              {
                categoryProduct?.map((product, index) => {
                  return (<CategoryProductListView key={index} product={product} />)
                })
              }
            </div>
          ) : (<div className='h-screen sm:h-120 flex justify-center items-center'>
            <video autoPlay muted loop>
              <source src={Loading} type='video/webm' />
            </video>
          </div>)
        }
      </div>
    </section>
  )
}

export default CategoryProduct