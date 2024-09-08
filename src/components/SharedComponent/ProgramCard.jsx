import { FaCalendarAlt, FaClock } from "react-icons/fa";

export default function ProgramCard({ program }) {
  return (
    <div className="bg-[#ffffff81] border border-gray-300 p-6 rounded-lg shadow-lg w-full mx-auto">
      <img
        src={program.imageURL}
        alt={program.title}
        className="rounded-lg shadow-md w-full mb-4"
      />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{program.title}</h2>
      <p className="text-gray-700 mb-4">{program.description}</p>

      <hr className="border-gray-300 my-4" />

      <div className="flex items-center mb-2">
        <FaCalendarAlt className="text-green-600 mr-2" />
        <span className="text-gray-600">
          Program Space: {program.programSpace}
        </span>
      </div>

      <div className="flex items-center mb-2">
        <FaCalendarAlt className="text-green-600 mr-2" />
        <span className="text-gray-600">Date: {program.date}</span>
      </div>

      <div className="flex items-center mb-2">
        <FaClock className="text-blue-600 mr-2" />
        <span className="text-gray-600">Start Time: {program.startTime}</span>
      </div>

      <div className="flex items-center mb-2">
        <FaClock className="text-blue-600 mr-2" />
        <span className="text-gray-600">End Time: {program.endTime}</span>
      </div>

      <hr className="border-gray-300 my-4" />

      <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded hover:shadow-lg transition duration-300">
        View Program Details
      </button>
    </div>
  );
}
