import { useState } from "react";
import { ImCross } from "react-icons/im";
import { VscThreeBars } from "react-icons/vsc";
import { Outlet } from "react-router-dom";
import LeftNav from "./DeshboardNav/LeftNav";

export default function DashboardRoot() {
  const [callNav, setCallNav] = useState(false);

  return (
    <div className="w-full h-screen overflow-hidden bg-[#3171703a] relative">
      <div
        className={`w-[270px] h-full overflow-y-auto overflow-x-hidden bg-gradient absolute md:static p-3 transition-all duration-300 ${
          callNav ? "left-0" : "-left-[270px]"
        }`}
      >
        <div className="w-full py-7">
          <h1 className="text-gradient font-bold text-center text-2xl">
            Deshboard
          </h1>
        </div>
        <LeftNav></LeftNav>
      </div>

      {/* Swap Button */}
      <div
        onClick={() => setCallNav(!callNav)} // Use onClick instead of onChange
        className={`absolute flex text-white justify-center top-1  items-center md:hidden w-[40px] h-[40px] rounded-full bg-gradient cursor-pointer ${
          callNav ? "left-[225px]" : "left-2"
        }`}
      >
        {callNav ? (
          <ImCross className="text-white text-xl" />
        ) : (
          <VscThreeBars className="text-white text-2xl" />
        )}
      </div>

      <Outlet />
    </div>
  );
}
