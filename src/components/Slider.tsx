import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import car1 from '../assets/img/carousel-1.png'
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function FirstSlider() {
  return (
    <>
      <div className="slider-container h-screen">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="first-slider-item size-full">
              <div className="slider-rof size-full ">
               <div className="size-full flex justify-around items-center flex-row  ">
                <div className="text-white font-bold flex flex-col gap-4 sm:gap-9  justify-center items-start">
                  <h4 className="capitalize">// car servicing //</h4>
                  <h1 className="w-10/12 text-2xl sm:text-3xl lg:text-5xl font-extrabold text-justify">Qualified Car Repair Service Center</h1>
                  <Link to='/' className="capitalize bg-car-red1 transition-all hover:bg-car-red2 px-6 py-3">
                  <div className="flex justify-center items-center gap-3">
                    <span className="font-bold">Learn more</span>
                    <span><FaArrowRight /></span>
                    </div>
                  </Link>
                </div>
                <img src={car1} alt="mercedes" className="size-52 sm:size-60 lg:w-[30rem] lg:h-auto hidden sm:block" />
               </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="second-slider-item size-full "></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default FirstSlider;
