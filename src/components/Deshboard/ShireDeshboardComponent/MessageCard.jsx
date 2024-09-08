import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSource from "../../customHooks/useAxiousSorce";

const MessageCard = ({ messages, refetch }) => {
  const { axiosSource } = useAxiosSource();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this message? This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSource
          .delete(`/ContactsMessages/${id}`)
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Deleted!",
              text: "The message has been deleted.",
              confirmButtonColor: "#3085d6",
            });
            refetch();
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong. Please try again later.",
              confirmButtonColor: "#3085d6",
            });
            console.error("Error deleting message:", error);
          });
      }
    });
  };

  return (
    <div className="w-full rounded overflow-hidden shadow-lg p-6 relative bg-white">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-1">
          {messages.name}
        </h2>
        <p className="text-sm">
          <span className="bg-blue-100 text-blue-800 py-1 px-2 rounded-full">
            {messages.date}
          </span>
        </p>
      </div>
      <div className="mb-6">
        <p className="text-gray-700 mb-2">
          <strong>Email:</strong> {messages.email}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Subject:</strong> {messages.subject}
        </p>
      </div>
      <div className="p-4 bg-gray-50 rounded shadow-sm">
        <p className="text-gray-700">
          <strong>Message:</strong> {messages.message}
        </p>
      </div>
      <div className="absolute top-3 right-3">
        <FaTrash
          className="text-red-500 text-xl cursor-pointer"
          onClick={() => handleDelete(messages._id)}
        />
      </div>
    </div>
  );
};

export default MessageCard;
