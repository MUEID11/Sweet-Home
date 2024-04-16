import { Link } from "react-router-dom";

const Estate = ({estate}) => {
    const {id, title, description, image_url} = estate;
    return (
        <div className="card w-full bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src={image_url}
              alt="image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <Link to={`/details/${id}`} className="btn btn-primary">View Details</Link>
            </div>
          </div>
        </div>
    );
};

export default Estate;