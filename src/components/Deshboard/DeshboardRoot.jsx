import { useState } from "react";
import { ImCross } from "react-icons/im";
import { VscThreeBars } from "react-icons/vsc";
import { Outlet } from "react-router-dom";
import LeftNav from "./DeshboardNav/LeftNav";
import NavTop from "./DeshboardNav/NavTop";
import { IoLogOut } from "react-icons/io5";

export default function DashboardRoot() {
  const [callNav, setCallNav] = useState(false);

  return (
    <div className="w-full h-screen overflow-hidden bg-[#3171703a] flex relative">
      <div
        className={`min-w-[270px] h-full pb-[100px] z-[1000] overflow-x-hidden bg-gradient absolute md:static p-3 transition-all duration-300 ${
          callNav ? "left-0" : "-left-[270px]"
        }`}
      >
        <div className="w-full relative py-7">
          <h1 className="text-gradient font-bold text-center text-2xl">
            Deshboard
          </h1>
        </div>
        <LeftNav></LeftNav>
        <button className="w-[246px] bg-[#003d3d] absolute bottom-2 gap-2 rounded flex justify-center border border-[#cfb46b7e] items-center text-[#cfb56b] font-bold p-2 cursor-pointer">
          <IoLogOut /> Log Out
        </button>
      </div>

      {/* Swap Button */}
      <div
        onClick={() => setCallNav(!callNav)} // Use onClick instead of onChange
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
      <div className="w-full h-screen">
        <NavTop></NavTop>
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
