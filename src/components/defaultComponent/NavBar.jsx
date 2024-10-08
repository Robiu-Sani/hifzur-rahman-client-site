import { Link, NavLink } from "react-router-dom";
import logo from "../../image/logo.png";
import { useEffect, useState } from "react";
import useAxiosSource from "../customHooks/useAxiousSorce";
import { IoMdLogOut } from "react-icons/io";
import Swal from "sweetalert2";

export default function NavBar() {
  const [loggedIn, setLoggedIn] = useState(null);
  const { axiosSource } = useAxiosSource();
  const email = localStorage.getItem("userEmail");

  useEffect(() => {
    if (email) {
      axiosSource
        .get(`/users/${email}`)
        .then((res) => {
          if (res.data) {
            setLoggedIn(res.data);
          }
        })
        .catch((err) => {
          console.error("Error fetching user data:", err);
        });
    } else {
      console.log("User not logged in");
    }
  }, [email, axiosSource]);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("userEmail");
        setLoggedIn(null);
        Swal.fire(
          "Logged Out",
          "You have been successfully logged out.",
          "success"
        );
      }
    });
  };

  const navItem = (
    <>
      <li>
        <NavLink to={"/"} className="text-[#0fb4b4] text-xl">
          হোম
        </NavLink>
      </li>
      <li>
        <NavLink to={"/about"} className="text-[#0fb4b4] text-xl">
          আমার সম্পর্কে
        </NavLink>
      </li>
      <li>
        <NavLink to={"/blog"} className="text-[#0fb4b4] text-xl">
          ব্লগ
        </NavLink>
      </li>
      <li>
        <NavLink to={"/news"} className="text-[#0fb4b4] text-xl">
          সংবাদ
        </NavLink>
      </li>
      <li>
        <details>
          <summary className="text-[#0fb4b4] text-xl">সেবা সমূহ</summary>
          <ul className="p-2 bg-gradient rounded">
            <li>
              <NavLink to={"/videos"} className="text-[#0fb4b4] text-xl">
                ভিডিও
              </NavLink>
            </li>
            <li>
              <NavLink to={"/books"} className="text-[#0fb4b4] text-xl">
                বই
              </NavLink>
            </li>
            <li>
              <NavLink to={"/images"} className="text-[#0fb4b4] text-xl">
                ছবি
              </NavLink>
            </li>
            <li>
              <NavLink to={"/programmes"} className="text-[#0fb4b4] text-xl">
                প্রোগ্রাম
              </NavLink>
            </li>
            <li>
              <NavLink to={"/quote"} className="text-[#0fb4b4] text-xl">
                উক্তি
              </NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <NavLink to={"/contact"} className="text-[#0fb4b4] text-xl">
          যোগাযোগ
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="w-full z-[1000] fixed top-0">
      <div className="container mx-auto">
        <div className="navbar">
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
                className="menu bg-gradient font-bold menu-sm dropdown-content rounded mt-3 w-52 p-2 shadow"
              >
                {navItem}
              </ul>
            </div>
            <Link to="/">
              <img src={logo} alt="লোগো" className="h-[80px]" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu font-bold menu-horizontal px-1">{navItem}</ul>
          </div>
          <div className="navbar-end">
            {loggedIn ? (
              loggedIn.status === "Admin" ? (
                <Link
                  to={"/deshboard"}
                  className="px-5 p-2 rounded hover:scale-110 transform transition duration-300 bg-gradient text-yellow-600 shadow font-bold"
                >
                  Dashboard
                </Link>
              ) : (
                <div className="flex justify-center items-center gap-3">
                  <small>{loggedIn.name}</small>
                  <button
                    onClick={handleLogout}
                    className="px-5 p-2 rounded hover:scale-110 transform transition duration-300 bg-gradient text-yellow-600 shadow font-bold"
                  >
                    <IoMdLogOut />
                  </button>
                </div>
              )
            ) : (
              <Link
                to={"/login"}
                className="px-5 p-2 rounded hover:scale-110 transform transition duration-300 bg-gradient text-yellow-600 shadow font-bold"
              >
                লগইন
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
