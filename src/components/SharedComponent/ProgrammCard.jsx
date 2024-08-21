// import { useState } from "react";
import { FaImage, FaCalendarAlt, FaClock } from "react-icons/fa";
import image from "../../image/bgb1.jpg";

export default function ProgrammCard() {
  // Function to handle delete confirmation

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
    </div>
  );
}
