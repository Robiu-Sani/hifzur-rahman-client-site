import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import image from "../../../image/bgb1.jpg";

export default function ManageBlogCard() {
  const truncateDescription = (description) => {
    return description.length > 100
      ? description.substring(0, 100) + "..."
      : description;
  };

  const handleUpdate = () => {
    Swal.fire({
      title: "Update Blog",
      text: "Are you sure you want to update this blog?",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Yes, update it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform the update action here
        Swal.fire("Updated!", "The blog has been updated.", "success");
      }
    });
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Delete Blog",
      text: "Are you sure you want to delete this blog?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform the delete action here
        Swal.fire("Deleted!", "The blog has been deleted.", "success");
      }
    });
  };

  return (
    <div className="bg-white border-b-[3px] border-b-[#317170] p-4 rounded-lg shadow-md flex-none w-full">
      <img
        src={image}
        alt="Blog Title"
        className="rounded-lg shadow-lg mb-4 w-full"
      />
      <h3 className="text-lg font-bold text-green-900">Blog Title</h3>
      <p className="text-green-700 mb-5">
        {truncateDescription(
          "This is a sample blog description that can be truncated if too long."
        )}
      </p>
      <Link
        to={"/blogs"}
        className="px-5 p-2 rounded hover:scale-110 transform transition duration-300 bg-gradient text-yellow-500 z-10 shadow font-bold"
      >
        Read more...
      </Link>
      <div className="grid mt-5 grid-cols-2 gap-3">
        <button
          onClick={handleUpdate}
          className="px-4 p-1 rounded bg-blue-500 text-white shadow font-bold hover:bg-blue-600 transition duration-300"
        >
          Update
        </button>
        <button
          onClick={handleDelete}
          className="px-4 p-1 rounded bg-red-500 text-white shadow font-bold hover:bg-red-600 transition duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
