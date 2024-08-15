import { Link } from "react-router-dom";
import blogimage from "../../image/bgb1.jpg";

export default function BlogCard() {
  const blog = {
    title: "ব্লগ টাইটেল এক",
    description:
      "সংক্ষিপ্ত বিবরণ, বিস্তারিত জানুন। এটি একটি উদাহরণ বাক্য যা ব্লগের বর্ণনার জন্য ব্যবহৃত হবে। এই ব্লগটি ইসলামের উপর ভিত্তি করে লেখা হয়েছে।",
    thumbnail: blogimage,
  };

  // Function to truncate the description to 20 words
  const truncateDescription = (description) => {
    const words = description.split(" ");
    return words.length > 20
      ? words.slice(0, 20).join(" ") + "..."
      : description;
  };

  return (
    <div className="bg-white border-b-[3px] border-b-[#317170] p-4 rounded-lg shadow-md flex-none w-full">
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
  );
}
