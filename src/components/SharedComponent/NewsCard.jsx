import { FaCalendarAlt, FaTag, FaFolderOpen } from "react-icons/fa";

export default function NewsCard({ news }) {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md max-w-md mx-auto">
      <img
        src={news.imageUrl}
        alt={news.title}
        className="rounded-lg w-full h-48 object-cover mb-4 shadow-sm"
      />
      <h2 className="text-xl font-bold text-gray-800 mb-2">{news.title}</h2>
      <p className="text-gray-600 mb-4">{news.description}</p>

      <div className="flex items-center mb-3">
        <FaFolderOpen className="text-blue-600 mr-2" />
        <span className="text-gray-700">Category: {news.category}</span>
      </div>

      <div className="flex items-center mb-3">
        <FaCalendarAlt className="text-green-600 mr-2" />
        <span className="text-gray-700">Published: {news.publicationDate}</span>
      </div>

      <div className="flex items-center mb-3">
        <FaTag className="text-yellow-600 mr-2" />
        <span className="text-gray-700">Tags: {news.tags}</span>
      </div>

      <hr className="border-gray-300 my-4" />

      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">Date Posted: {news.date}</span>
        <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold py-2 px-4 rounded hover:shadow-lg transition duration-300">
          Read More
        </button>
      </div>
    </div>
  );
}
