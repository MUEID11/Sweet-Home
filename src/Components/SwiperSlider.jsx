import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

export default function SwiperSlider() {
  const { data } = useContext(AuthContext);
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-lg"
      >
        {data.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="1000"
              className="hero bg-cover min-h-[350px] sm:min-h-[800px]"
              style={{ backgroundImage: `url(${slide?.image_url})` }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="900"
                className="hero-content text-center text-neutral-content"
              >
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">{slide?.title}</h1>
                  <p className="mb-5">{slide?.description}</p>
                  <Link
                    to="/estates"
                    className="btn bg-blue-500 text-white border-none"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
