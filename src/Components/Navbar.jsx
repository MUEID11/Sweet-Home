import { Link, NavLink } from "react-router-dom";
import logo from "./../../public/logo.png";
import UseAuth from "../Hooks/UseAuth";
import { Helmet } from "react-helmet";
import "animate.css";
const Navbar = () => {
  const { user, logOutUser } = UseAuth();
  const handleSignOut = () => {
    logOutUser()
      .then((result) => {
        console.log("logged out succsfull", result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/upadteprofile">Upadte Profile</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contacts</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-gray-50 shadow-sm shadow-blue-100 relative">
      <Helmet>
        <title>Sweet Home</title>
      </Helmet>
      <div
        className="navbar container mx-auto"
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-30 p-2 shadow bg-base-100 rounded-box w-52 absolute"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            to="/"
            className="sm:text-xl text-xs font-bold flex items-center"
          >
            <img
              className="sm:w-10 w-4 rounded-full mr-2"
              src={logo}
              alt="logo"
            />{" "}
            Sweet Home
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 absolute z-30"
                >
                  <li>
                    <a className="justify-between">
                      {user?.displayName || "No name found"}
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <Link onClick={handleSignOut} to="/login">
                      Log Out
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <Link
                  onClick={logOutUser}
                  to="/login"
                  className="btn bg-blue-400 text-white"
                >
                  Log Out
                </Link>
              </div>
            </>
          ) : (
            <Link to="/login" className="btn bg-blue-400 text-white">
              Log In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
