import { FaFacebookF, FaYoutube, FaWhatsapp, FaTelegram } from "react-icons/fa";

const MainVideoSection = () => {
  return (
    <div className="bg-green-50 p-4 rounded-lg shadow-md">
      <div className="text-center">
        <h2 className="text-xl font-bold text-green-900">
          আমার ইসলামিক লেকচার
        </h2>
        <p className="text-green-700">
          শাইখ তাসলিমুর রহমান এর নির্বাচিত ইসলামিক ভিডিও সমূহ
        </p>
      </div>
      <div className="mt-4 flex flex-col items-center">
        <img
          src="https://via.placeholder.com/400x250"
          alt="Main Video"
          className="rounded-lg shadow-lg mb-4"
        />
        <div className="flex space-x-4 text-green-700">
          <FaFacebookF className="cursor-pointer hover:text-green-500" />
          <FaYoutube className="cursor-pointer hover:text-green-500" />
          <FaWhatsapp className="cursor-pointer hover:text-green-500" />
          <FaTelegram className="cursor-pointer hover:text-green-500" />
        </div>
      </div>
    </div>
  );
};

export default MainVideoSection;
