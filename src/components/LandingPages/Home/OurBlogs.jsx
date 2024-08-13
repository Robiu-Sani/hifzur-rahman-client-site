import { useState } from "react";
import image from "../../../image/bookBg.jpg";

const blogs = [
  {
    title: "প্রথম ব্লগ পোস্ট",
    image: image,
    description:
      "এটি প্রথম ব্লগ পোস্টের একটি সংক্ষিপ্ত বর্ণনা। এতে বিশ শব্দের চেয়ে বেশি বর্ণনা রয়েছে যা ব্লগ কার্ড কম্পোনেন্টে 'Read More' ফাংশনালিটি প্রদর্শন করতে সাহায্য করে।",
    link: "#",
  },
  {
    title: "দ্বিতীয় ব্লগ পোস্ট",
    image: image,
    description:
      "এটি দ্বিতীয় ব্লগ পোস্টের একটি সংক্ষিপ্ত বর্ণনা। এটি বিশ শব্দের চেয়ে বেশি লম্বা, যা 'Read More' বোতামের শর্তাধীন রেন্ডারিং প্রদর্শন করে।",
    link: "#",
  },
  {
    title: "তৃতীয় ব্লগ পোস্ট",
    image: image,
    description:
      "এটি তৃতীয় ব্লগ পোস্টের একটি সংক্ষিপ্ত বর্ণনা। এটি ফিচারটি প্রদর্শন করতে বিশ শব্দের চেয়ে বেশি লম্বা।",
    link: "#",
  },
];

const OurBlogs = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleReadMore = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const getExcerpt = (text, maxWords) => {
    const words = text.split(" ");
    return words.length > maxWords
      ? words.slice(0, maxWords).join(" ") + "..."
      : text;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl text-center font-bold text-gray-900 mb-6">
        আমাদের সর্বশেষ ব্লগসমূহ
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white border-b-[3px] border-b-blue-500 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {expandedIndex === index
                  ? blog.description
                  : getExcerpt(blog.description, 20)}
              </p>
              {blog.description.split(" ").length > 20 && (
                <button
                  onClick={() => toggleReadMore(index)}
                  className="text-blue-500 hover:underline focus:outline-none"
                >
                  {expandedIndex === index
                    ? "সংক্ষিপ্ত দেখুন"
                    : "বিস্তারিত পড়ুন"}
                </button>
              )}
              <div className="mt-4">
                <a href={blog.link} className="text-blue-500 hover:underline">
                  ব্লগে যান
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a
          href="#"
          className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          সব ব্লগ দেখুন
        </a>
      </div>
    </div>
  );
};

export default OurBlogs;
