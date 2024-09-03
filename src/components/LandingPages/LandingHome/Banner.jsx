import bannerBg from "../../../image/bg1.jpg";
import Bg1 from "../../../image/bg7.png";
import Bg2 from "../../../image/bg2.png";
import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";

export default function Banner() {
  return (
    <div
      className="w-full min-h-screen pt-[60px] bg-center overflow-hidden flex justify-center items-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 gap-2">
        <div className="w-full flex justify-center relative items-center pb-10">
          <img src={Bg1} alt="" className="w-[80%] absolute" />
          <div className="w-full z-10 text-center mb-10">
            <h1 className="text-gradient text-[30px] md:text-[50px] font-extrabold">
              আসসালামু আলাইকুম!
            </h1>
            <h1 className="text-gradient text-[45px] my-5 md:text-[85px] font-extrabold">
              ড. হিফজুর রহমান
            </h1>
            <p className="text-gradient text-xl font-semibold">
              ইসলামের জ্ঞান প্রচার এবং শিক্ষার মান উন্নয়নের জন্য আমি কাজ করে
              যাচ্ছি। মানবতার কল্যাণে এবং নৈতিক মূল্যবোধ বিকাশে আমি নিবেদিত।
            </p>
            <div className="w-full my-5 flex justify-center items-center gap-5">
              <Link
                to={"/videos"}
                className="px-5 p-2 border border-yellow-600 h-[40px] flex justify-center items-center gap-3 rounded bg-gradient text-yellow-600 shadow font-bold"
              >
                আমাদের সেবা নিন
              </Link>
              <Link
                to={"/contact"}
                className="px-5 p-2 border border-yellow-600 h-[40px] flex justify-center items-center gap-3 rounded bg-gradient text-yellow-600 shadow font-bold"
              >
                আমাদের সাথে যোগাযোগ করুন
                <MdArrowRightAlt className="text-4xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center relative items-end">
          <img
            src={Bg2}
            alt=""
            className="w-[60%] absolute UpDownAnimation bottom-[20%]"
          />
        </div>
      </div>
    </div>
  );
}
