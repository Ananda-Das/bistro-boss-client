import SectionTitle from "../../components/SectionTitle";
import "@smastrom/react-rating/style.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { FaQuoteLeft } from 'react-icons/fa';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const Testimonial = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div>
      <SectionTitle subHeading={"What Our Clients Say"} heading={"TESTIMONIALS"}></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper text-center ">
        {review.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="m-24 flex items-center flex-col space-y-7">
              <div>
                <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              </div>
              <div>
                <FaQuoteLeft className="text-7xl"></FaQuoteLeft>
              </div>
              <div className="space-y-5">
                <p className="text-[#444444] text-xl">{review.details}</p>
                <h1 className="text-[#CD9003] text-3xl">{review.name}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
