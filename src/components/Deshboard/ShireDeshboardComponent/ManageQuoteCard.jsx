import { FaQuoteLeft, FaTrash, FaQuoteRight } from "react-icons/fa";
import Swal from "sweetalert2";

export default function ManageQuoteCard({
  quote = "This is a sample quote.",
  speaker = "Sample Speaker",
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
        Swal.fire("Deleted!", "Your quote has been deleted.", "success");
        // Add delete functionality here
      }
    });
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-white shadow-lg rounded-lg border border-gray-200">
      {/* Quote Display */}
      <div className="mb-4">
        <blockquote className="text-gray-700 flex   italic text-xl">
          <FaQuoteLeft className="inline mr-2 text-indigo-600" />
          {quote}
          <div className="relative">
            <FaQuoteRight className="inline mr-2 text-indigo-600 absolute bottom-0" />
          </div>
        </blockquote>
      </div>

      {/* Speaker Display */}
      <div className="mb-4">
        <p className="text-gray-700">
          <strong>- {speaker}</strong>
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
