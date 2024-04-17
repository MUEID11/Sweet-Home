import { useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { user, updateUserProfile } = UseAuth();
  const { email, displayName, photoURL } = user;
  console.log(email, displayName, photoURL, user);
  const [currentUser, setCurrentUser] = useState({
    email,
    displayName,
    photoURL,
  });
  const handleUpdateProfile = (e) => {
    e.preventDefault()
    updateUserProfile(currentUser.displayName, currentUser.photoURL);
    toast.success("Profile updated successfully!");
  }
  return (
    <div className="py-12 dark:text-gray-800">
      <Helmet><title>{displayName}</title></Helmet>
      <section className="p-6 dark:text-gray-800">
        <form
          noValidate=""
          className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50"
        >
          <h2 className="w-full text-3xl font-bold leading-tight">
            Update your porfle
          </h2>
          <div>
            <label htmlFor="name" className="block mb-1 ml-1">
              Name
            </label>
            <input
              onChange={(e) => setCurrentUser({ ...currentUser, displayName: e.target.value })}
              value={currentUser.displayName}
              id="name"
              type="text"
              placeholder="Your name"
              required=""
              className="border lock w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 ml-1">
              Email
            </label>
            <input
            onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
              value={currentUser.email}
              id="email"
              type="email"
              disabled
              placeholder="Your email"
              required=""
              className="border block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="photo" className="block mb-1 ml-1">
              Photo URL
            </label>
            <input
            onChange={(e) => setCurrentUser({ ...currentUser, photoURL: e.target.value })}
              value={currentUser.photoURL}
              id="photo"
              name="photo"
              type="text"
              placeholder="photo URL"
              className="border block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
            ></input>
          </div>
          <div>
            <button
            onClick={handleUpdateProfile}
              type="submit"
              className="w-full bg-blue-400 px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-600 focus:dark:ring-violet-600 hover:dark:ring-violet-600 dark:text-gray-50"
            >
              Update
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateProfile;
