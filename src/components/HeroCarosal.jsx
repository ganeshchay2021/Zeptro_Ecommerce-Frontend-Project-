import React, { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImport from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { getData } from '../Context/DataContext';
import Loading from '../assets/Loading4.webm';
import { useNavigate } from 'react-router-dom';

const Slider = SliderImport.default ?? SliderImport;

const HeroCarosal = () => {
  const { data, fetchAllProducts } = getData()

  const navigate = useNavigate();

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
    pauseOnHover: true,
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
  };

  return (
    <section>
      {
        data?.length > 0 ? (<Slider {...settings} className="w-full overflow-hidden">
          {
            data?.sort(() => Math.random() - 0.5).slice(0, 7).map((item) => (
              <div key={item._id} className='bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10'>
                <div className='h-150 flex md:flex-row flex-col-reverse items-center px-5 md:mt-0 mt-10 md:gap-10 gap-5 max-w-6xl mx-auto'>
                  <div className='space-y-4 flex-1'>
                    <p className='text-red-500 text-sm font-semibold font-sans'>Your ultimate destination for style, tech, and living..!</p>
                    <h1 className='md:text-4xl text-3xl text-white max-w-125 line-clamp-3 font-bold uppercase'>{item.title}
                    </h1>
                    <p className='text-gray-300 line-clamp-3 md:max-w-125 w-full pr-7'>{item.description}</p>
                    <button className='bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer md:mt-4 mt-2' onClick={() => navigate(`/products/${item.id}`)}>Shop Now</button>
                  </div>
                  <div  className='flex justify-center items-center flex-1'>
                    <img src={item.thumbnail} alt="Product" className='lg:h-120 md:h-100 sm:h-80 transition-all shrink hover:rotate-2 duration-400 rounded-full shadow-2xl hover:scale-105 bg-white  shadow-red-400 object-center' />
                  </div>
                </div>

              </div>
            ))
          }
        </Slider>) : (<div className='h-screen sm:h-120 flex justify-center items-center'>
          <video autoPlay muted loop>
            <source src={Loading} type='video/webm' />
          </video>
        </div>)
      }
    </section>
  );
};

export default HeroCarosal