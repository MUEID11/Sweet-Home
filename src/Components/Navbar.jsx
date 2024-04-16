import { Link, NavLink } from "react-router-dom";
import logo from './../../public/logo.png'
const Navbar = () => {
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
    <div className="bg-gray-50 shadow-sm shadow-blue-100">
      <div className="navbar container mx-auto relative">
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
          <Link to='/' className="btn btn-ghost sm:text-xl font-bold"><img className="sm:w-10 w-6 rounded-full" src={logo} alt="logo"/> Sweet Home</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link to='/login' className="btn btn-primary">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
