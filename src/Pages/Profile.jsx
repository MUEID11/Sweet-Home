import { Helmet } from "react-helmet";
import UseAuth from "../Hooks/UseAuth";

const Profile = () => {
  const {user} = UseAuth();

  return (
    <div className="container mx-auto h-full py-8">
      <Helmet><title>{user?.displayName}</title></Helmet>
        <div className="flex flex-col max-w-md p-6 dark:bg-gray-50 dark:text-gray-800 mx-auto space-y-5 border">
      <img
        src={user?.photoURL}
        alt=""
        className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square"
      />
      <div className="space-y-5">
        <h2 className="text-xl font-semibold">Name: {user?.displayName} </h2>
        <span className="block pb-2 text-sm dark:text-gray-600">
          Email: {user?.email}
        </span>
      </div>
    </div>
    </div>
  );
};

export default Profile;
