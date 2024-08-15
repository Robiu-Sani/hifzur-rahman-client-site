import { useState } from "react";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa";
import image1 from "../../../image/bgb1.jpg";

export default function ManageImageCard() {
  const [selectedImage, setSelectedImage] = useState(null);
  const imageTitle = "Sample Image Title"; // Update the title as needed
  const imageDate = "August 15, 2024"; // Update the date as needed

  const handleDelete = () => {
    Swal.fire({
      title: "Delete Image",
      text: "Are you sure you want to delete this image?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "The image has been deleted.", "success");
      }
    });
  };

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="relative w-full max-w-sm mx-auto bg-gray-200 rounded-md shadow-md cursor-pointer group">
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <img
          src={image1}
          alt="Gallery"
          className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
          onClick={() => handleImageClick(image1)}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white">
          <h3 className="text-lg font-semibold">{imageTitle}</h3>
          <p className="text-sm">{imageDate}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 px-2 pb-2 mt-4">
        <span></span>
        <button
          onClick={handleDelete}
          className="flex items-center px-4 py-2 bg-red-600 text-white rounded shadow hover:bg-red-700 transition duration-300"
        >
          <FaTrash className="mr-2" /> Delete
        </button>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold mb-2">{imageTitle}</h3>
            <p className="text-gray-500 mb-4">{imageDate}</p>
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-white bg-red-600 rounded-full p-1 hover:bg-red-700"
            >
              &#10005;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
