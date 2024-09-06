import { FaQuoteLeft, FaTrash, FaQuoteRight } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSource from "../../customHooks/useAxiousSorce";
import useQuote from "../../customHooks/useQuote";

export default function ManageQuoteCard({ quote }) {
  const { axiosSource } = useAxiosSource();
  const { refetch } = useQuote();

  // Function to handle delete confirmation
  const handleDelete = (id) => {
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
        axiosSource.delete(`/quotes/${id}`).then(() => {
          refetch();
          Swal.fire("Deleted!", "Your quote has been deleted.", "success");
        });
      }
    });
  };

  return (
    <div className="p-4 flex justify-center items-center flex-col sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-white shadow-lg rounded-lg border border-gray-200">
      {/* Quote Display */}
      <div className="mb-4">
        <blockquote className="text-gray-700 flex italic text-xl relative">
          <FaQuoteLeft className="inline mr-2 text-indigo-600" />
          <span>{quote.quote}</span>
          <FaQuoteRight className="absolute right-0 bottom-0 text-indigo-600" />
        </blockquote>
      </div>

      {/* Speaker Display */}
      <div className="mb-4">
        <p className="text-gray-700">
          <strong>- {quote.speaker}</strong>
        </p>
      </div>

      {/* Date Display */}
      <div className="mb-4">
        <p className="text-gray-500">
          <strong>Date: </strong>
          {quote.date}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex w-full justify-end">
        <button
          onClick={() => handleDelete(quote._id)}
          className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          <FaTrash className="mr-2" />
          Delete
        </button>
      </div>
    </div>
  );
}
