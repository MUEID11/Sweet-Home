import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

export default function SwiperSlider() {

  const {slider} = useContext(AuthContext)
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
        className="mySwiper"
      >
       {
        slider.map((slide) =>  <SwiperSlide key={slide.id}><img src={slide.image_url} alt="" /></SwiperSlide>)
       }
        
      </Swiper>
    </>
  );
}
