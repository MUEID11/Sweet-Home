import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    // Show loading spinner if authentication data is still being fetched
    return (
      <div className="relative flex items-center justify-center">
        <span className="loading loading-spinner text-info loading-md absolute top-50 translate-y-5"></span>
      </div>
    );
  }

  // If user is authenticated, render the children component
  if (user) {
    return children;
  }

  // If user is not authenticated, redirect to login page
  return <Navigate state={location.pathname} to="/login" />;
};

export default PrivateRoute;