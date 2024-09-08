import { useState } from "react";

export default function BlogCard({ blog }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Function to truncate the description to 20 words
  const truncateDescription = (description) => {
    const words = description.split(" ");
    return words.length > 20
      ? words.slice(0, 20).join(" ") + "..."
      : description;
  };

  // Function to toggle the full description
  const handleReadMoreClick = () => {
    setShowFullDescription(!showFullDescription);
  };

  const descriptionWords = blog.description.split(" ");

  return (
    <div className="bg-white border-b-[3px] border-b-[#317170] p-4 rounded-lg shadow-md flex-none w-full">
      <img
        src={blog.imageUrl}
        alt={blog.title}
        className="rounded-lg shadow-lg mb-4 w-full"
      />
      <h3 className="text-lg font-bold text-green-900">{blog.title}</h3>
      <p className="text-green-700 mb-5">
        {showFullDescription
          ? blog.description
          : truncateDescription(blog.description)}
      </p>
      <p className="text-sm text-gray-500 mb-3">Published on: {blog.date}</p>

      {/* Conditionally show the "Read more" button if the description has more than 20 words */}
      {descriptionWords.length > 20 && (
        <button
          onClick={handleReadMoreClick}
          className="px-5 p-2 rounded hover:scale-110 transform transition duration-300 bg-gradient text-yellow-500 z-10 shadow font-bold"
        >
          {showFullDescription ? "Show less" : "Read more..."}
        </button>
      )}
    </div>
  );
}
