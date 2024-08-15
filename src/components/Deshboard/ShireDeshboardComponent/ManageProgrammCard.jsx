// import { useState } from "react";
import Swal from "sweetalert2";
import { FaImage, FaCalendarAlt, FaClock } from "react-icons/fa";
import image from "../../../image/bgb1.jpg";

export default function ManageProgrammCard() {
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
        Swal.fire("Deleted!", "Your post has been deleted.", "success");
        // Add delete functionality here
      }
    });
  };

  return (
    <div className="p-2 bg-white shadow-lg rounded-lg border border-gray-200">
      {/* Image Display */}
      <img
        src={image}
        alt="Uploaded"
        className="w-full h-auto max-h-64 object-cover rounded-md shadow-md"
      />

      {/* Title */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-800">
          <FaImage className="inline mr-2 text-indigo-600" />
          <span>this is title</span>
        </h3>
      </div>

      {/* Description */}
      <div className="mb-4">
        <p className="text-gray-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          pariatur quas minima ipsum omnis earum rerum sit excepturi officia
          tenetur.
        </p>
      </div>

      {/* Program Space */}
      <div className="mb-4">
        <p className="text-gray-700">
          <strong>Program Space: </strong>Space name
        </p>
      </div>

      {/* Date and Time */}
      <div className="mb-4">
        <p className="text-gray-700">
          <FaCalendarAlt className="inline mr-2 text-blue-600" />
          <strong>Date: </strong>25/25/25
        </p>
        <div className="w-full flex justify-around items-center gap-1">
          <p className="text-gray-700">
            <FaClock className="inline mr-2 text-green-600" />
            <strong>Start Time: </strong>25:25
          </p>
          <p className="text-gray-700">
            <FaClock className="inline mr-2 text-red-600" />
            <strong>End Time: </strong>25:25
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between">
        <span></span>
        <button
          onClick={handleDelete}
          className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
