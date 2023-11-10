import SectionTitle from "../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import slide1 from '../../../src/assets/home/slide1.jpg'
import slide2 from '../../../src/assets/home/slide2.jpg'
import slide3 from '../../../src/assets/home/slide3.jpg'
import slide4 from '../../../src/assets/home/slide4.jpg'
import slide5 from '../../../src/assets/home/slide5.jpg'



const Category = () => {
  return (
    <div className="">
      <SectionTitle subHeading={"From 11:00am to 10:00pm"} heading={"ORDER ONLINE"}></SectionTitle>

      <div className="my-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <p className="text-3xl uppercase -mt-16 text-center text-white">Salads</p>
            <p className="mt-20"></p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <p className="text-3xl uppercase -mt-16 text-center text-white">pizzas</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <p className="text-3xl uppercase -mt-16 text-center text-white">Soups</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <p className="text-3xl uppercase -mt-16 text-center text-white">desserts</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <p className="text-3xl uppercase -mt-16 text-center text-white">Salads</p>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="bg-[url('../../../src/assets/home/chef-service.jpg')] bg-cover p-20 mb-10">
        <div className="text-[#151515] w-3/4 mx-auto bg-white text-center p-20">
            <h1 className="text-5xl mb-2">Bistro Boss</h1>
            <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
