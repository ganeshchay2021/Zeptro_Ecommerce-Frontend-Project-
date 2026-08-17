import React, { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImport from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { getData } from '../Context/DataContext';

const Slider = SliderImport.default ?? SliderImport;

const HeroCarosal = () => {
  const { data, fetchAllProducts } = getData()

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`} style={{ zIndex: 3 }}>
        <AiOutlineArrowLeft className='arrows' style={{ ...style, display: "block", borderRadius: "50px", background: "#f53347", color: "white", position: "absolute", padding: "2px", left: "50px" }} />
      </div>
    );
  }

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <AiOutlineArrowRight className='arrows' style={{ ...style, display: "block", borderRadius: "50px", background: "#f53347", color: "white", position: "absolute", padding: "2px", right: "50px" }} />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover:true,
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
  };

  return (
    <section>
      <Slider {...settings} className="w-full overflow-hidden">
        {data?.slice(0, 7).map((item) => (   // here is the problen why
          <div key={item._id} className='bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10'>
            <div className='h-150 flex justify-between items-center px-5 gap-10 max-w-6xl mx-auto'>
              <div className='space-y-4'>
                <p className='text-red-500 text-sm font-semibold font-sans'>Power your dress up with the best product here..!</p>
                <h1 className='text-4xl text-white max-w-125 line-clamp-3 font-bold uppercase'>{item.title}
                </h1>
                <p className='text-gray-300 line-clamp-3 md:max-w-125 pr-7'>{item.description}</p>
                <button className='bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer mt-4'>Shop Now</button>
              </div>
              <div >
                <img src={item.image} alt="Product" className='h-120 w-120 transition-all hover:rotate-2 duration-400 rounded-full shadow-2xl hover:scale-105  shadow-red-400 object-center' />
              </div>
            </div>

          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroCarosal