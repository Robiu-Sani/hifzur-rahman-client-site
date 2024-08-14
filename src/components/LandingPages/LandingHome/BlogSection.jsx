import image from "../../../image/bg7.png";
import { Link } from "react-router-dom";
import blogimage from "../../../image/bgb1.jpg";

export default function BlogSection() {
  const blogs = [
    {
      title: "ব্লগ টাইটেল এক",
      description:
        "সংক্ষিপ্ত বিবরণ, বিস্তারিত জানুন। এটি একটি উদাহরণ বাক্য যা ব্লগের বর্ণনার জন্য ব্যবহৃত হবে। এই ব্লগটি ইসলামের উপর ভিত্তি করে লেখা হয়েছে।",
      thumbnail: blogimage,
    },
    {
      title: "ব্লগ টাইটেল দুই",
      description:
        "সংক্ষিপ্ত বিবরণ, বিস্তারিত জানুন। এটি একটি উদাহরণ বাক্য যা ব্লগের বর্ণনার জন্য ব্যবহৃত হবে। এই ব্লগটি ইসলামের উপর ভিত্তি করে লেখা হয়েছে।",
      thumbnail: blogimage,
    },
    {
      title: "ব্লগ টাইটেল তিন",
      description:
        "সংক্ষিপ্ত বিবরণ, বিস্তারিত জানুন। এটি একটি উদাহরণ বাক্য যা ব্লগের বর্ণনার জন্য ব্যবহৃত হবে। এই ব্লগটি ইসলামের উপর ভিত্তি করে লেখা হয়েছে।",
      thumbnail: blogimage,
    },
  ];

  // Function to truncate the description to 20 words
  const truncateDescription = (description) => {
    const words = description.split(" ");
    return words.length > 20
      ? words.slice(0, 20).join(" ") + "..."
      : description;
  };

  return (
    <div className="w-full bg-[#3171703a] py-10 flex flex-col gap-8 justify-center items-center overflow-hidden relative">
      <img src={image} alt="" className="max-h-[90%] absolute z-0 opacity-40" />
      <h1 className="text-center z-10 text-4xl font-extrabold text-gray-800">
        Blogs
      </h1>
      <p className="text-xl text-center -mt-4 text-gray-600">
        Here you can See Islamic Book writen by Dr.Hifzur Rahman.
      </p>
      <div className="container mx-auto  z-10 px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white border-b-[3px] border-b-[#317170] p-4 rounded-lg shadow-md flex-none w-full"
          >
            <img
              src={blog.thumbnail}
              alt={blog.title}
              className="rounded-lg shadow-lg mb-4 w-full"
            />
            <h3 className="text-lg font-bold text-green-900">{blog.title}</h3>
            <p className="text-green-700 mb-5">
              {truncateDescription(blog.description)}
            </p>
            <Link
              to={"/blogs"}
              className="px-5 p-2 rounded hover:scale-110 mt-5 transform transition duration-300 bg-gradient text-yellow-500 z-10 shadow font-bold"
            >
              Read more...
            </Link>
          </div>
        ))}
      </div>
      <Link
        to={"/blogs"}
        className="px-5 p-2 rounded hover:scale-110 transform transition duration-300 bg-gradient text-yellow-500 z-10 shadow font-bold"
      >
        See All Blogs
      </Link>
    </div>
  );
}
