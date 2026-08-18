import React, { useEffect, useState } from 'react'
import { getData } from '../Context/DataContext';
import Loading from '../assets/Loading4.webm';
import FilterSection from '../components/FilterSection';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import NoProduct from '../assets/noproduct.jpg';

const Products = () => {
  const { data, fetchAllProducts, rangePrice } = getData();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 15000]);
  const [page, setPage] = useState(1);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    console.log(category);
  }

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  }

  const filteredData = data?.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
    &&
    (category === "All" || item.category === category) &&
    (brand === "All" || item.brand === brand) &&
    item.price >= priceRange[0] && item.price <= priceRange[1]
  );


  const handlePage = (selectedPage) => {
    setPage(selectedPage)
  }

  const dynamicPage = Math.ceil(filteredData?.length / 8);


  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 py-5'>
        {
          data?.length > 0 ? (<div className='flex gap-8'>
            <FilterSection data={data} search={search} setSearch={setSearch} category={category} setCategory={setCategory} brand={brand} setBrand={setBrand} priceRange={priceRange} setPriceRange={setPriceRange} handleCategoryChange={handleCategoryChange}
              handleBrandChange={handleBrandChange} handlePage={handlePage} />
            {
              filteredData.length > 0 ? (<div className='place-items-center'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 content-start'>
                  {
                    filteredData?.slice(page * 8 - 8, page * 8).map((product, index) => {
                      return (
                        <ProductCard key={index} product={product} />
                      )
                    })
                  }
                </div>
                <Pagination handlePage={handlePage} page={page} dynamicPage={dynamicPage} />
              </div>) : (<div className='w-full flex justify-center pt-20'>
                <img src={NoProduct} alt="" className='object-cover md:w-120 md:h-120 sm:h-100 sm:w-100 h-80 w-80' />
              </div>)
            }
          </div>) : (<div className='h-screen sm:h-120 flex justify-center items-center'>
            <video autoPlay muted loop>
              <source src={Loading} type='video/webm' />
            </video>
          </div>)
        }
      </div>

    </section>
  )
}

export default Products