import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Details = () => {
  const { data } = useContext(AuthContext);

  const { id } = useParams();
  const [items, setItems] = useState();
  useEffect(() => {
    console.log(data);
    const details = data.find((item) => item?.id === parseInt(id));
    setItems(details);
  }, [id, data]);
  return (
    <div>
      <section>
        <div className="dark:bg-violet-600">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">
              {items?.title}
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">
              {items?.description}
            </p>
            <div className="flex flex-wrap justify-center">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-100 dark:text-gray-900"
              >
                Buy Now
              </button>
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-300 dark:text-gray-50"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
        <img
          src={items?.image_url}
          alt="property"
          className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40"
        />
      </section>
    </div>
  );
};

export default Details;
