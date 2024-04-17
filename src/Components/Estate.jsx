import { FaLocationArrow } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Estate = ({ estate }) => {
  const { id, title, description, image_url, location, price } = estate;
  return (
    <div
    data-aos="fade-right"
    data-aos-duration="1500"
      className="card w-full bg-base-100 shadow-xl image-full"
    >
      <figure>
        <img src={image_url} alt="image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p className="flex items-center font-bold">
          <FaLocationArrow className="mr-4" />
          {location}
        </p>
        <p className="flex items-center font-bold text-green-500">
          <FaDollarSign className="mr-4" />
          {price}
        </p>
        <div className="card-actions justify-end">
          <Link
            to={`/details/${id}`}
            className="btn bg-blue-500 text-white border-none"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
Estate.propTypes = {
  estate: PropTypes.object.isRequired,
}
export default Estate;
