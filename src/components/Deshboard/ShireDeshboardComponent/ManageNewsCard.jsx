import { FaImage, FaCalendarAlt, FaTags, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSource from "../../customHooks/useAxiousSorce";
import useNews from "../../customHooks/useNews";

export default function ManageNewsCard({ news }) {
  const { axiosSource } = useAxiosSource();
  const { refetch } = useNews();

  // Function to handle delete confirmation
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSource.delete(`/news/${id}`).then(() => refetch());
        Swal.fire("Deleted!", "Your news post has been deleted.", "success");
      }
    });
  };

  return (
    <div className="relative bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden">
      {/* Image Display */}
      <div className="w-full h-48">
        {news.imageUrl ? (
          <img
            src={news.imageUrl}
            alt="News"
            className="w-full h-full object-cover"
          />
        ) : null}
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          <FaImage className="inline mr-2 text-indigo-600" />
          {news.title || "No Title"}
        </h3>

        {/* Description */}
        <p className="text-gray-700 mb-4">
          {news.description || "No description available."}
        </p>

        {/* Category */}
        <p className="text-gray-700 mb-2">
          <FaTags className="inline mr-2 text-green-600" />
          <strong>Category: </strong>
          {news.category || "Uncategorized"}
        </p>

        {/* Publication Date */}
        <p className="text-gray-700 mb-2">
          <FaCalendarAlt className="inline mr-2 text-blue-600" />
          <strong>Publication Date: </strong>
          {new Date(news.publicationDate).toLocaleDateString() || "N/A"}
        </p>

        {/* Tags */}
        <p className="text-gray-700">
          <FaTags className="inline mr-2 text-green-600" />
          <strong>Tags: </strong>
          {news.tags || "No tags available."}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="absolute bottom-4 right-4">
        <button
          onClick={() => handleDelete(news._id)}
          className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-150"
        >
          <FaTrash className="mr-2" />
          Delete
        </button>
      </div>
    </div>
  );
}
