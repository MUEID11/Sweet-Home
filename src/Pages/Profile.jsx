const Profile = () => {
  return (
    <div className="container mx-auto h-[calc(100vh-350px)]">
        <div className="flex flex-col max-w-md p-6 dark:bg-gray-50 dark:text-gray-800 mx-auto space-y-5">
      <img
        src="https://source.unsplash.com/200x200/?portrait?2"
        alt=""
        className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square"
      />
      <div className="space-y-5">
        <h2 className="text-xl font-semibold">Name: </h2>
        <span className="block pb-2 text-sm dark:text-gray-600">
          Email: 
        </span>
      </div>
    </div>
    </div>
  );
};

export default Profile;
