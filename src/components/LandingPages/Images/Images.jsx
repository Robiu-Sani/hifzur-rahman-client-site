import PageBanner from "../../SharedComponent/PageBanner";
import { useState } from "react";
import useImages from "../../customHooks/useImage";

export default function Images() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { images } = useImages();

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="">
      <PageBanner Title="All Images" />
      <div className="w-full bg-[#3171703a] py-10 flex flex-col gap-8 justify-center items-center overflow-hidden relative">
        <h1 className="text-center z-10 text-4xl font-extrabold text-gray-800">
          Images
        </h1>
        <p className="text-xl text-center -mt-4 text-gray-600">
          Here you can See Islamic Book writen by Dr.Hifzur Rahman.
        </p>
        <div className="container mx-auto px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 z-10">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => handleImageClick(img)}
              className="relative flex flex-col justify-center items-center w-full h-60 group cursor-pointer"
            >
              <img
                src={img.imageURL}
                alt={`Gallery image ${index + 1}`}
                className="min-w-full h-full mx-auto object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">দেখুন</span>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-20">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full relative">
              <img
                src={selectedImage.imageURL}
                alt="Selected"
                className="w-full h-auto rounded-lg mb-4"
              />
              <p className="text-gray-800 mb-4">{selectedImage.title}</p>
              <small className="text-gray-800 mb-4">
                {selectedImage.description}
              </small>
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
    </div>
  );
}
