import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
// import images

function FirstSlider() {
  return (
    <>
      <div className="slider-container h-1/2 sm:h-screen">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="first-slider-item size-full">
             {/* <img src={slidbg1} rel="preload" alt="slider-background" /> */}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default FirstSlider;
