import { motion } from "framer-motion";
import { FaPlay, FaCalendarAlt, FaUserAlt, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

export default function ManageVideoCard() {
  const handleDelete = () => {
    Swal.fire({
      title: "Delete Video",
      text: "Are you sure you want to delete this video?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your video has been deleted.", "success");
      }
    });
  };

  return (
    <motion.div className="bg-gradient-to-r border-b-[3px] border-b-[#317170] from-blue-100 to-purple-100 shadow-xl rounded-lg overflow-hidden mb-6 border border-gray-200">
      <div className="relative group">
        <iframe
          className="w-full h-48 transition-transform duration-300 group-hover:scale-105"
          src="https://www.youtube.com/embed/f66X76RWo38"
          title="ভিডিও ১"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <FaPlay className="absolute top-2 right-2 text-white text-xl bg-black bg-opacity-50 p-2 rounded-full" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">
          🎬 ভিডিও ১
        </h3>
        <div className="w-full flex justify-between items-center pb-2 border-gray-400 border-b mb-3">
          <div className="flex items-center space-x-2 group-hover:text-blue-800 transition-colors duration-300">
            <FaCalendarAlt className="text-blue-600" />
            <p className="text-sm text-gray-700 group-hover:text-blue-800">
              ১০ আগস্ট ২০২৪
            </p>
          </div>
          <div className="flex items-center space-x-2 group-hover:text-purple-800 transition-colors duration-300">
            <FaUserAlt className="text-purple-600" />
            <p className="text-sm text-gray-700 group-hover:text-purple-800">
              জন ডো
            </p>
          </div>
        </div>

        <div className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">
          <marquee>
            এই ভিডিওতে একটি গুরুত্বপূর্ণ বিষয়ে আলোচনা করা হয়েছে। সর্বশেষ আপডেট
            এবং বিশেষজ্ঞ মতামত সম্পর্কে আরও জানতে ভিডিওটি দেখুন।
          </marquee>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <span></span>
          <button
            onClick={handleDelete}
            className="flex items-center px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 transition-colors duration-300"
          >
            <FaTrash className="mr-2" />
            Delete
          </button>
        </div>
      </div>
    </motion.div>
  );
}
