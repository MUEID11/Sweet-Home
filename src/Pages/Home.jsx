import SwiperSlider from "../Components/SwiperSlider";
import Estates from "./Estates";
import Faq from "./Faq";

const Home = () => {
    return (
        <div className="container mx-auto p-6">
            <SwiperSlider></SwiperSlider>
            <Estates></Estates>
            <Faq></Faq>
        </div>
    );
};

export default Home;