import React from 'react'
import { getData } from '../Context/DataContext'

const FilterSection = ({ data, search, setSearch, category, setCategory, brand, setBrand, priceRange, setPriceRange, handleCategoryChange, handleBrandChange, handlePage, scrollToTOp}) => {
    const { allCategory, allBrands } = getData();

    const filterBrands = data?.filter((product) => {
        return product.category === category;
    });

    const brandNames = filterBrands
        ?.map((product) => product.brand)
        .filter(Boolean);

    const brandsFilter = ["All", ...new Set(brandNames)];


    return (
        <div className='bg-gray-100 rounded-md p-4 h-max'>
            <input type="text" placeholder='Search...' className='bg-white border p-2 rounded-md border-gray-400' onChange={(e) => setSearch(e.target.value)} value={search} />

            {/* category only data  */}
            <h1 className='sm:mt-5 mt-3 font-semibold sm:text-xl text-lg'>Category</h1>
            <div className='flex flex-col gap-2 mt-3'>
                {
                    allCategory.map((item, index) => {
                        return (
                            <div className='flex gap-2 ' key={index}>
                                <input type="checkbox" name={item} value={item} id={`item-${index}`} checked={item === category} className='bg-white accent-red-600' onChange={handleCategoryChange} onClick={() => {
                                    setBrand("All");
                                    handlePage(1);
                                    item === "All" && (setBrand("All"), setCategory("All"), setSearch(""), setPriceRange([0, 15000]));
                                }} />
                                <label className='cursor-pointer uppercase' htmlFor={`item-${index}`} onClick={() => {
                                    setBrand("All");
                                    handlePage(1);
                                    item === "All" && (setBrand("All"), setCategory("All"), setSearch(""), setPriceRange([0, 15000]));
                                }}>{item}</label>
                            </div>
                        )
                    })
                }
            </div>

            {/* Brands only data  */}
            <h1 className='sm:mt-5 mt-3 font-semibold sm:text-xl text-lg'>Brand</h1>
            <select name="" id="" className='mt-3 bg-white w-full p-2 border-2 border-gray-200 rounded-md focus:outline-none uppercase' value={brand} onChange={handleBrandChange}>
                {
                    brandsFilter.length <= 1 ? (allBrands.map((brandItem, index) => {
                        return (
                            <option value={brandItem} key={index}>{brandItem}</option>

                        );
                    })) : (brandsFilter.map((brandItem, index) => {
                        return (
                            <option value={brandItem} key={index}>{brandItem}</option>

                        );
                    }))
                }
            </select>

            {/* price range  */}
            <h1 className='sm:mt-5 mt-3 font-semibold sm:text-xl text-lg'>Price Range</h1>
            <div className='mt-2 flex flex-col gap-2'>
                <label htmlFor="Price Range">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
                <input type="range" name="" id="" min="0" max="15000" className='text-red-500 bg-white accent-red-600' value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} />
            </div>

            {/* reset button  */}
            <button className='px-4 py-1 bg-red-500 hover:bg-red-600 text-white mt-5 rounded-md transition-all cursor-pointer' onClick={()=>{
                scrollToTOp();
                setBrand("All"); setPriceRange([0, 15000]); setSearch(""); setCategory("All")
            }}>Reset Filters</button>


        </div>
    )
}

export default FilterSection