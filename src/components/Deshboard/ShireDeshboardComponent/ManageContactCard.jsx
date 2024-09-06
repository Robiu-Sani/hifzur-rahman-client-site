import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSource from "../../customHooks/useAxiousSorce";
import useContacts from "../../customHooks/useContacts";

export default function ManageContactCard({ contact }) {
  const { axiosSource } = useAxiosSource();
  const { refetch } = useContacts();

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
        axiosSource.delete(`/contacts/${id}`).then(() => {
          refetch();
          Swal.fire(
            "Deleted!",
            "Your contact information has been deleted.",
            "success"
          );
        });
      }
    });
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg border border-gray-200">
      {/* Address Display */}
      <p className="text-gray-700 mb-2">
        <strong>Address: </strong>
        {contact.address}
      </p>

      {/* Email Display */}
      <p className="text-gray-700 mb-2">
        <strong>Email: </strong>
        {contact.email}
      </p>

      {/* Phone Number Display */}
      <p className="text-gray-700 mb-2">
        <strong>Phone Number: </strong>
        {contact.phone}
      </p>

      {/* Address Type Display */}
      <p className="text-gray-700 mb-2">
        <strong>Address Type: </strong>
        {contact.addressType}
      </p>

      {/* Notes Display */}
      <p className="text-gray-700 mb-4">
        <strong>Notes: </strong>
        {contact.notes}
      </p>

      {/* Action Buttons */}
      <div className="flex justify-end">
        <button
          onClick={() => handleDelete(contact._id)}
          className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          <FaTrash className="mr-2" />
          Delete
        </button>
      </div>
    </div>
  );
}
