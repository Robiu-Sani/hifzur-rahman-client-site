import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

export default function ManageContactCard({
  address = "123 Main St, Anytown, USA",
  email = "example@example.com",
  phone = "123-456-7890",
  addressType = "Home",
  notes = "Additional notes here.",
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
        Swal.fire(
          "Deleted!",
          "Your contact information has been deleted.",
          "success"
        );
        // Add delete functionality here
      }
    });
  };

  // Function to handle update confirmation
  const handleUpdate = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update this contact information?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Updated!",
          "Your contact information has been updated.",
          "success"
        );
        // Add update functionality here
      }
    });
  };

  return (
    <div className="p-2 bg-white shadow-lg rounded-lg border border-gray-200">
      {/* Address Display */}
      <p className="text-gray-700">
        <strong>Address: </strong>
        {address}
      </p>

      {/* Email Display */}
      <p className="text-gray-700">
        <strong>Email: </strong>
        {email}
      </p>

      {/* Phone Number Display */}
      <p className="text-gray-700">
        <strong>Phone Number: </strong>
        {phone}
      </p>

      {/* Address Type Display */}
      <p className="text-gray-700">
        <strong>Address Type: </strong>
        {addressType}
      </p>

      {/* Notes Display */}
      <p className="text-gray-700">
        <strong>Notes: </strong>
        {notes}
      </p>

      {/* Action Buttons */}
      <div className="flex justify-between mt-3">
        <button
          onClick={handleUpdate}
          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <FaEdit className="mr-2" />
          Update
        </button>
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
