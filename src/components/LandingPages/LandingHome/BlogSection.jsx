import image from "../../../image/bg7.png";
import { Link } from "react-router-dom";
import BlogCard from "../../SharedComponent/BlogCard";
import useBlogs from "../../customHooks/useBlogs";

export default function BlogSection() {
  const { blogs } = useBlogs();
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
        {blogs.slice(0, 3).map((blog, idx) => (
          <BlogCard key={idx} blog={blog}></BlogCard>
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
