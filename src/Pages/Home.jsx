import SwiperSlider from "../Components/SwiperSlider";
import Estates from "./Estates";

const Home = () => {
    return (
        <div className="container mx-auto p-6">
            <SwiperSlider></SwiperSlider>
            <Estates></Estates>
        </div>
    );
};

export default Home;