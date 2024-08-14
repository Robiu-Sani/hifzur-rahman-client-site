import { Link, NavLink } from "react-router-dom";
import logo from "../../image/logo.png";

export default function NavBar() {
  const navItem = (
    <>
      <li>
        <NavLink to={"/"} className="text-white">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/about"} className="text-white">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to={"/blog"} className="text-white">
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink to={"/news"} className="text-white">
          News
        </NavLink>
      </li>

      <li>
        <details>
          <summary className="text-white">Services</summary>
          <ul className="p-2 bg-gradient rounded">
            <li>
              <NavLink to={"/videos"} className="text-white">
                Videos
              </NavLink>
            </li>
            <li>
              <NavLink to={"/books"} className="text-white">
                Books
              </NavLink>
            </li>
            <li>
              <NavLink to={"/images"} className="text-white">
                Images
              </NavLink>
            </li>
            <li>
              <NavLink to={"/programmes"} className="text-white">
                Programmes
              </NavLink>
            </li>
            <li>
              <NavLink to={"/quote"} className="text-white">
                Quote
              </NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <NavLink to={"/contact"} className="text-white">
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="w-full z-[1000] fixed top-0">
      <div className="container mx-auto">
        <div className="navbar bg-none">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                className="menu  bg-gradient font-bold menu-sm dropdown-content bg-base-100 rounded mt-3 w-52 p-2 shadow"
              >
                {navItem}
              </ul>
            </div>
            <Link to="/">
              <img src={logo} alt="logo" className="h-[30px]" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu font-bold menu-horizontal  px-1">{navItem}</ul>
          </div>
          <div className="navbar-end">
            <Link
              to={"/login"}
              className="px-5 p-2 rounded hover:scale-110 transform transition duration-300 bg-gradient text-yellow-600 shadow font-bold"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
