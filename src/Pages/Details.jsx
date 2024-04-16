import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaDollarSign, FaLocationDot, FaLocationPin } from "react-icons/fa6";

const Details = () => {
  const { data } = useContext(AuthContext);

  const { id } = useParams();
  const [property, setProperty] = useState();
  console.log(property);
  useEffect(() => {
    const details = data.find((item) => item?.id === parseInt(id));
    setProperty(details);
  }, [id, data]);
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${property?.image_url})` }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="grid sm:grid-cols-2 grid-cols-1 p-4 gap-4 sm:p-20 sm:gap-10 text-white">
        <div className="min-w-md">
          <h1 className="mb-5 text-5xl font-bold">{property?.title}</h1>
          <p className="mb-5">{property?.description}</p>
          <hr className="mb-3" />
          <p className="mb-5 font-medium flex items-center"><FaLocationDot className="mr-4"/> {property?.location}</p>
          <hr className="mb-3" />
          <div className="mb-5 text-lg font-medium">
            Facilities:
            <ul className="flex-cols items-center justify-center">
              {property?.facilities.map((facility, idx) => (
                <li className="list-disc ml-8" key={idx}>{facility}</li>
              ))}
            </ul>
          </div>
          <hr className="mb-3" />
          <p className="mb-5 text-lg font-medium">Property Type: {property?.segment_name}</p>
          <hr className="mb-3" />
          <p className="mb-5 font-bold text-red-400 text-2xl">On {property?.status}</p>
          <p className="mb-5 font-bold text-green-400 text-3xl flex items-center">
            Price: {property?.price} <FaDollarSign className="ml-2"/>
          </p>
          <hr className="mb-3" />
          <button className="btn btn-ghost">Add to wishlist</button>
          <Link to='/estates' className="btn btn-outline btn-info">More estates</Link>
        </div>
        <div>
          <img className="rounded-lg" src={property?.image_url} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Details;
