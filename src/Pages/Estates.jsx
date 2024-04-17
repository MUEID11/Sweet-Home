import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Estate from "../Components/Estate";

const Estates = () => {
  const { data } = useContext(AuthContext);
  return (
    <div className="container mx-auto my-16">
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="text-center space-y-5 mb-10"
      >
        <h2 className="text-4xl font-bold">Estates</h2>
        <p className="text-xl font-medium">
          Welcome To The Epitome Of Urban Luxury Living At Sweet Homes, Find A
          Home Sweet Home On This Very Website.
        </p>
      </div>
      <div data-aos="fade-up"
        className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 sm:gap-8 sm:m-0 mx-4"
      >
        {data.map((estate) => (
          <Estate key={estate?.id} estate={estate}></Estate>
        ))}
      </div>
    </div>
  );
};

export default Estates;
