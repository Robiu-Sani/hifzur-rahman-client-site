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
        আমাদের সেবা
      </h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-2 py-10">
        <div className="w-full p-5 flex flex-col gap-4 justify-center items-center">
          <GiBookCover className="text-5xl text-white" />
          <h1 className="text-center text-2xl font-bold text-white">বই</h1>
          <p className="text-center text-white text-xl">
            আমাদের বই বিভাগে আপনি বিভিন্ন ধরণের বই পাবেন যা আপনার জ্ঞান ও বিনোদন
            বৃদ্ধিতে সাহায্য করবে। এখানে বিভিন্ন ধরনের বই যেমন কল্পবিজ্ঞান,
            ইতিহাস, ও আত্মসাহিত্য উপলব্ধ।
          </p>
          <Link
            to={"/books"}
            className="px-5 p-2 rounded hover:scale-110 transform transition duration-300 bg-none bg-[#317170] border-b-[3px] border-r-[2px] border-[#fdfdfd] text-white z-10 shadow font-bold"
          >
            সমস্ত বই
          </Link>
        </div>
        <div className="w-full p-5 flex flex-col gap-4 justify-center items-center">
          <PiVideoFill className="text-5xl text-white" />
          <h1 className="text-center text-2xl font-bold text-white">ভিডিও</h1>
          <p className="text-center text-white text-xl">
            আমাদের ভিডিও বিভাগে আপনি বিভিন্ন শিক্ষামূলক ও বিনোদনমূলক ভিডিও খুঁজে
            পাবেন। এখানে আপনি বিভিন্ন টিউটোরিয়াল, প্রোগ্রাম এবং প্রাসঙ্গিক
            বিষয়বস্তু দেখতে পারবেন।
          </p>
          <Link
            to={"/videos"}
            className="px-5 p-2 rounded hover:scale-110 transform transition duration-300 bg-none bg-[#317170] border-b-[3px] border-r-[2px] border-[#fdfdfd] text-white z-10 shadow font-bold"
          >
            সমস্ত ভিডিও
          </Link>
        </div>
        <div className="w-full p-5 flex flex-col gap-4 justify-center items-center">
          <GrInProgress className="text-5xl text-white" />
          <h1 className="text-center text-2xl font-bold text-white">
            প্রোগ্রাম
          </h1>
          <p className="text-center text-white text-xl">
            আমাদের প্রোগ্রাম বিভাগে বিভিন্ন প্রকারের কার্যক্রম ও ইভেন্টসের তথ্য
            পাবেন যা আপনার পেশাগত ও ব্যক্তিগত উন্নয়নে সাহায্য করবে। নতুন
            প্রোগ্রাম সম্পর্কে জানতে এখানে ক্লিক করুন।
          </p>
          <Link
            to={"/programmes"}
            className="px-5 p-2 rounded hover:scale-110 transform transition duration-300 bg-none bg-[#317170] border-b-[3px] border-r-[2px] border-[#fdfdfd] text-white z-10 shadow font-bold"
          >
            প্রোগ্রামসমূহ
          </Link>
        </div>
      </div>
    </div>
  );
}
