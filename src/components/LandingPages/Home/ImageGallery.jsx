import { useState } from "react";
import image from "../../../image/bookBg.jpg";

// Sample images with descriptions, replace these with your actual image data
const images = [
  { src: image, description: "ছবির বর্ণনা ১" },
  { src: image, description: "ছবির বর্ণনা ২" },
  { src: image, description: "ছবির বর্ণনা ৩" },
  { src: image, description: "ছবির বর্ণনা ৪" },
  { src: image, description: "ছবির বর্ণনা ৫" },
  { src: image, description: "ছবির বর্ণনা ৬" },
  { src: image, description: "ছবির বর্ণনা ৭" },
  { src: image, description: "ছবির বর্ণনা ৮" },
];

function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    console.log("Image clicked:", image); // Debugging line
    setSelectedImage(image);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container my-10 mx-auto px-2 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        ছবির গ্যালারি
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-center items-center w-full h-60 group"
          >
            <img
              src={img.src}
              alt={`Gallery image ${index + 1}`}
              className="min-w-full h-full mx-auto object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105 cursor-pointer"
            />
            <div
              onClick={() => handleImageClick(img)}
              className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <span className="text-white text-lg font-semibold">দেখুন</span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a
          href="#"
          className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          সব ছবি দেখুন
        </a>
      </div>

      {/* Popup for displaying selected image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white flex flex-col justify-center items-center p-4 rounded-lg shadow-lg relative max-w-sm w-full">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleClosePopup}
            >
              &times;
            </button>
            <img
              src={selectedImage.src}
              alt="Selected"
              className="w-full rounded-lg mb-4"
            />
            <p className="text-gray-700 text-lg">{selectedImage.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
