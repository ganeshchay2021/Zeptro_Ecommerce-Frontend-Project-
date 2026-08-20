import React, { useEffect, useState } from 'react'
import { getData } from '../Context/DataContext';
import Loading from '../assets/Loading4.webm';
import FilterSection from '../components/FilterSection';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import NoProduct from '../assets/noproduct.jpg';
import MobileFilter from '../components/MobileFilter';

const Products = () => {
  const { data, fetchAllProducts, rangePrice } = getData();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 15000]);
  const [page, setPage] = useState(1);
  const [openFilter, setOpenFilter] = useState(false);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
    setOpenFilter(false);
    console.log(category);
  }

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setOpenFilter(false)
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  function scrollToTOp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <section>
      <div className='max-w-6xl mx-auto sm:px-4 px-2 py-5'>
        <MobileFilter openFilter={openFilter} setOpenFilter={setOpenFilter} data={data} search={search} setSearch={setSearch} category={category} setCategory={setCategory} brand={brand} setBrand={setBrand} priceRange={priceRange} setPriceRange={setPriceRange} handleCategoryChange={handleCategoryChange}
          handleBrandChange={handleBrandChange} handlePage={handlePage} scrollToTOp={scrollToTOp} />
        {
          data?.length > 0 ? (<div className='flex gap-8'>
            <FilterSection data={data} search={search} setSearch={setSearch} category={category} setCategory={setCategory} brand={brand} setBrand={setBrand} priceRange={priceRange} setPriceRange={setPriceRange} handleCategoryChange={handleCategoryChange}
              handleBrandChange={handleBrandChange} handlePage={handlePage} scrollToTOp={scrollToTOp} />


            {
              filteredData.length > 0 ? (<div className='place-items-center w-full'>
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 content-start w-full'>
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