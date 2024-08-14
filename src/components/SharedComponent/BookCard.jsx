import React from "react";
import {
  FaDownload,
  FaCalendarAlt,
  FaUserAlt,
  FaShoppingCart,
  FaFileAlt,
} from "react-icons/fa";
import bg from "../../image/bookBg.jpg";
import book from "../../image/book.jpeg";

const Button = ({ icon: Icon, text, className, ...props }) => (
  <a
    {...props}
    className={`inline-flex items-center text-white py-2 px-4 rounded-full shadow-lg transition-all duration-300 ${className}`}
  >
    {Icon && <Icon className="mr-2 text-lg" />} {text}
  </a>
);

export default function BookCard() {
  return (
    <div className="max-w-md mx-auto border-b-[3px] border-b-[#317170] bg-white shadow-lg rounded-lg overflow-hidden">
      <div
        className="relative w-full h-56 flex p-3 justify-center items-center bg-no-repeat bg-cover bg-center transform transition-transform duration-300 hover:scale-105"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <img
          src={book}
          alt="বইয়ের ছবি"
          className="shadow-md h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
          ৳ ৫০০
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-purple-700 transition-colors duration-300">
          বইয়ের নাম
        </h3>
        <p className="text-gray-700 text-sm mb-4">
          এই বইটি বাংলা সাহিত্যের একটি অনন্য সৃষ্টি। এতে রয়েছে নানা ধরনের গল্প
          ও প্রবন্ধ।
        </p>
        <div className="flex justify-between items-center flex-wrap space-y-2 text-gray-600 mb-4">
          <div className="flex items-center space-x-2">
            <FaCalendarAlt className="text-blue-600 text-sm" />
            <p className="text-sm text-blue-600">১০ জানুয়ারি ২০২৪</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaUserAlt className="text-green-600 text-sm" />
            <p className="text-sm text-green-600">বাংলা প্রকাশনী</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaFileAlt className="text-purple-600 text-sm" />
            <p className="text-sm">২০০ পৃষ্ঠা</p>
          </div>
        </div>
        <div className="flex justify-between space-x-4">
          <Button
            icon={FaDownload}
            text="ডাউনলোড করুন"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700"
            href="#"
          />
          <Button
            icon={FaShoppingCart}
            text="বই কিনুন"
            className="bg-green-500 hover:bg-green-600"
            href="#"
          />
        </div>
      </div>
    </div>
  );
}
