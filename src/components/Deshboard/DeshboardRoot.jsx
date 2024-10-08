import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { VscThreeBars } from "react-icons/vsc";
import { Outlet, useNavigate } from "react-router-dom";
import LeftNav from "./DeshboardNav/LeftNav";
import NavTop from "./DeshboardNav/NavTop";
import { IoLogOut } from "react-icons/io5";
import Swal from "sweetalert2";
import useAxiosSource from "../customHooks/useAxiousSorce";

export default function DashboardRoot() {
  const [callNav, setCallNav] = useState(false);
  const navigate = useNavigate();
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

  // Handle logout with confirmation
  const HandleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("userEmail");
        navigate("/");
        Swal.fire(
          "Logged Out!",
          "You have been logged out successfully.",
          "success"
        );
      }
    });
  };

  // Check if loggedIn is available and the user is an admin
  const isAdmin = loggedIn?.status === "Admin";

  // Fallback for not being an admin or no logged-in data
  if (!loggedIn) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <h1 className="text-blue-600 text-2xl">Loading...</h1>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <h1 className="text-red-600 text-2xl">You are not an Admin</h1>
      </div>
    );
  }

  return (
    <div className="w-full h-screen overflow-hidden bg-[#3171703a] flex relative">
      {/* Left Sidebar */}
      <div
        className={`min-w-[270px] h-full pb-[100px] z-[1000] overflow-x-hidden bg-gradient absolute md:static p-3 transition-all duration-300 ${
          callNav ? "left-0" : "-left-[270px]"
        }`}
      >
        <div className="w-full relative py-7">
          <h1 className="text-gradient font-bold text-center text-2xl">
            Dashboard
          </h1>
        </div>
        <LeftNav />
        <button
          onClick={HandleLogout}
          className="w-[246px] bg-[#003d3d] absolute bottom-2 gap-2 rounded flex justify-center border border-[#cfb46b7e] items-center text-[#cfb56b] font-bold p-2 cursor-pointer"
        >
          <IoLogOut /> Log Out
        </button>
      </div>

      {/* Swap Button */}
      <div
        onClick={() => setCallNav(!callNav)} // Toggle navigation
        className={`absolute flex text-white justify-center top-1 z-[1001] items-center md:hidden w-[40px] h-[40px] rounded-full bg-gradient cursor-pointer ${
          callNav ? "left-[225px]" : "left-2"
        }`}
      >
        {callNav ? (
          <ImCross className="text-white text-xl" />
        ) : (
          <VscThreeBars className="text-white text-2xl" />
        )}
      </div>

      {/* Main Content */}
      <div className="w-full h-screen">
        <NavTop />
        <div className="w-full h-[calc(100vh-80px)] overflow-y-auto">
          <Outlet />
        </div>

        <div className="h-[30px] bg-white flex justify-center items-center">
          <p>© 2024 আপনার কোম্পানি। সমস্ত অধিকার সংরক্ষিত।</p>
        </div>
      </div>
    </div>
  );
}
