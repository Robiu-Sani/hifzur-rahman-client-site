import Swal from "sweetalert2";
import { FaImage, FaCalendarAlt, FaClock, FaTrash } from "react-icons/fa";
import useAxiosSource from "../../customHooks/useAxiousSorce";
import useProgramms from "../../customHooks/useProgramms";

export default function ManageProgrammCard({ programm }) {
  const { axiosSource } = useAxiosSource();
  const { refetch } = useProgramms();

  // Function to handle delete confirmation
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSource.delete(`/programms/${id}`).then(() => {
          refetch();
        });
        Swal.fire("Deleted!", "The program has been deleted.", "success");
      }
    });
  };

  return (
    <div className="relative overflow-hidden bg-white shadow-xl rounded-lg border border-gray-200">
      {/* Banner Image */}
      {programm.imageURL ? (
        <div className="relative w-full h-60">
          <img
            src={programm.imageURL}
            alt="Program"
            className="w-full h-full object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-40"></div>
          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-white text-2xl font-bold">
              <FaImage className="inline mr-2 text-indigo-400" />
              {programm.title || "Program Title"}
            </h3>
          </div>
        </div>
      ) : (
        <div className="w-full h-60 bg-gray-200 flex items-center justify-center text-gray-600">
          <FaImage className="text-5xl" />
        </div>
      )}

      {/* Content Section */}
      <div className="p-6">
        {/* Description */}
        <div className="mb-4">
          <p className="text-gray-800 text-base leading-relaxed">
            {programm.description ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis autem vel eum iure."}
          </p>
        </div>

        {/* Program Space */}
        <div className="mb-4 text-gray-800">
          <p className="font-semibold">
            Program Space:{" "}
            <span className="font-normal">
              {programm.programSpace || "Unknown"}
            </span>
          </p>
        </div>

        {/* Date and Time */}
        <div className="mb-4 text-gray-800">
          <p className="flex items-center mb-2">
            <FaCalendarAlt className="mr-2 text-blue-600" />
            <strong>Date: </strong>
            {new Date(programm.date).toLocaleDateString() || "N/A"}
          </p>
          <div className="flex gap-4">
            <p className="flex items-center text-sm">
              <FaClock className="mr-2 text-green-600" />
              <strong>Start Time: </strong>
              {programm.startTime || "N/A"}
            </p>
            <p className="flex items-center text-sm">
              <FaClock className="mr-2 text-red-600" />
              <strong>End Time: </strong>
              {programm.endTime || "N/A"}
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="absolute bottom-0 right-0 p-6">
        <button
          onClick={() => handleDelete(programm._id)}
          className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-150"
        >
          <FaTrash className="mr-2" />
          Delete
        </button>
      </div>
    </div>
  );
}
