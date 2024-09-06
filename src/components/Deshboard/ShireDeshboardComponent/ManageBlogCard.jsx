import Swal from "sweetalert2";
import { useState } from "react";
import useAxiosSource from "../../customHooks/useAxiousSorce";

export default function ManageBlogCard({ blog, refetch }) {
  const { axiosSource } = useAxiosSource();
  const [showFullText, setShowFullText] = useState(false);

  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 20) {
      return words.slice(0, 20).join(" ") + "...";
    }
    return description;
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete Blog",
      text: "Are you sure you want to delete this blog?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSource.delete(`/blogs/${id}`).then(() => {
          refetch();
          Swal.fire("Deleted!", "The blog has been deleted.", "success");
        });
      }
    });
  };

  return (
    <div className="bg-white border-b-[3px] border-b-[#317170] p-4 rounded-lg shadow-md flex-none w-full">
      <img
        src={blog.imageUrl}
        alt={blog.title}
        className="rounded-lg shadow-lg mb-4 w-full"
      />
      <h3 className="text-lg font-bold text-green-900">{blog.title}</h3>
      <p className="text-green-700 mb-5">
        {showFullText
          ? blog.description
          : truncateDescription(blog.description)}
        {!showFullText && blog.description.split(" ").length > 20 && (
          <span
            onClick={() => setShowFullText(true)}
            className="text-blue-500 cursor-pointer"
          >
            ...read more
          </span>
        )}
      </p>
      <p className="text-sm text-gray-500 mb-5">Published on: {blog.date}</p>
      <div className="grid mt-5 grid-cols-2 gap-3">
        <span></span>
        <button
          onClick={() => handleDelete(blog._id)}
          className="px-4 p-1 rounded bg-red-500 text-white shadow font-bold hover:bg-red-600 transition duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
