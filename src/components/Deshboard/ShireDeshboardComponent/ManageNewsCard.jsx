import { FaImage, FaCalendarAlt, FaTags, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import image from "../../../image/bgb1.jpg";

export default function ManageNewsCard({
  title = "Sample News Title",
  description = "Sample news description goes here. It provides a brief overview of the news article.",
  category = "Technology",
  publicationDate = "2024-08-15",
  tags = "news, sample, technology",
  imageSrc = image,
}) {
  // Function to handle delete confirmation
  const handleDelete = () => {
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
        Swal.fire("Deleted!", "Your news post has been deleted.", "success");
        // Add delete functionality here
      }
    });
  };

  return (
    <div className="p-2 bg-white shadow-lg rounded-lg border border-gray-200">
      {/* Image Display */}
      <img
        src={imageSrc}
        alt="News"
        className="w-full h-auto max-h-64 object-cover rounded-md shadow-md"
      />

      {/* Title */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-800">
          <FaImage className="inline mr-2 text-indigo-600" />
          <span>{title}</span>
        </h3>
      </div>

      {/* Description */}
      <div className="mb-4">
        <small className="text-gray-700">{description}</small>
      </div>

      {/* Category */}
      <div className="mb-4">
        <p className="text-gray-700">
          <strong>Category: </strong>
          {category}
        </p>
      </div>

      {/* Publication Date */}
      <div className="mb-4">
        <p className="text-gray-700">
          <FaCalendarAlt className="inline mr-2 text-blue-600" />
          <strong>Publication Date: </strong>
          {publicationDate}
        </p>
      </div>

      {/* Tags */}
      <div className="mb-4">
        <p className="text-gray-700">
          <FaTags className="inline mr-2 text-green-600" />
          <strong>Tags: </strong>
          {tags}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between">
        <span></span>
        <button
          onClick={handleDelete}
          className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          <FaTrash className="mr-2" />
          Delete
        </button>
      </div>
    </div>
  );
}
