import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  const navItem = (
    <>
      <li>
        <NavLink to={"/"} className="text-gray-700">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/about"} className="text-gray-700">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to={"/blog"} className="text-gray-700">
          Blog
        </NavLink>
      </li>
      <li>
        <details>
          <summary className="text-gray-700">Services</summary>
          <ul className="p-2 bg-gradient rounded">
            <li>
              <NavLink to={"/videos"} className="text-gray-700">
                Videos
              </NavLink>
            </li>
            <li>
              <NavLink to={"/books"} className="text-gray-700">
                Books
              </NavLink>
            </li>
            <li>
              <NavLink to={"/programmes"} className="text-gray-700">
                Programmes
              </NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <NavLink to={"/contact"} className="text-gray-700">
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
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu font-bold menu-horizontal  px-1">{navItem}</ul>
          </div>
          <div className="navbar-end">
            <Link
              to={"/login"}
              className="px-5 p-2 rounded bg-gradient text-yellow-600 shadow font-bold"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
