import { GiBookCover } from "react-icons/gi";
import bgb from "../../../image/bgb1.jpg";
import { Link } from "react-router-dom";
import { PiVideoFill } from "react-icons/pi";
import { GrInProgress } from "react-icons/gr";

export default function ServicesShowwithBg() {
  return (
    <div
      className="w-full py-10 flex justify-center flex-col gap-10 items-center bg-center bg-cover bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${bgb})` }}
    >
      <h1 className="text-5xl text-center text-white font-extrabold">
        Services Type
      </h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-2 py-10">
        <div className="w-full p-5 flex flex-col gap-4 justify-center items-center">
          <GiBookCover className="text-5xl text-white" />
          <h1 className="text-center text-2xl font-bold text-white">Books</h1>
          <p className="text-center text-white text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis voluptatem hic laborum excepturi consequuntur magnam
            nam distinctio? Veritatis, perspiciatis et?
          </p>
          <Link
            to={"/books"}
            className="px-5 p-2 rounded hover:scale-110 transform transition duration-300 bg-none bg-[#317170] border-b-[3px] border-r-[2px] border-[#fdfdfd] text-white z-10 shadow font-bold"
          >
            All Books
          </Link>
        </div>
        <div className="w-full p-5 flex flex-col gap-4 justify-center items-center">
          <PiVideoFill className="text-5xl text-white" />
          <h1 className="text-center text-2xl font-bold text-white">Videos</h1>
          <p className="text-center text-white text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis voluptatem hic laborum excepturi consequuntur magnam
            nam distinctio? Veritatis, perspiciatis et?
          </p>
          <Link
            to={"/videos"}
            className="px-5 p-2 rounded hover:scale-110 transform transition duration-300 bg-none bg-[#317170] border-b-[3px] border-r-[2px] border-[#fdfdfd] text-white z-10 shadow font-bold"
          >
            All Videos
          </Link>
        </div>
        <div className="w-full p-5 flex flex-col gap-4 justify-center items-center">
          <GrInProgress className="text-5xl text-white" />
          <h1 className="text-center text-2xl font-bold text-white">
            Programmes
          </h1>
          <p className="text-center text-white text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis voluptatem hic laborum excepturi consequuntur magnam
            nam distinctio? Veritatis, perspiciatis et?
          </p>
          <Link
            to={"/programmes"}
            className="px-5 p-2 rounded hover:scale-110 transform transition duration-300 bg-none bg-[#317170] border-b-[3px] border-r-[2px] border-[#fdfdfd] text-white z-10 shadow font-bold"
          >
            Programmes
          </Link>
        </div>
      </div>
    </div>
  );
}
