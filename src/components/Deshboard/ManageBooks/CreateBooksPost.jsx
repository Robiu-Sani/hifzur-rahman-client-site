import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { FaBook } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSource from "../../customHooks/useAxiousSorce";
import useBooks from "../../customHooks/useBooks";

export default function CreateBooksPost() {
  const { register, handleSubmit, watch, reset } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const { axiosSource } = useAxiosSource();
  const { refetch } = useBooks();

  const onSubmit = async (data) => {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const amPm = hours >= 12 ? "PM" : "AM";

    // Convert hour to 12-hour format
    hours = hours % 12 || 12; // Convert 0 to 12 for 12 AM

    // Pad minutes with leading zero if needed
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    // Create the formatted time string
    const currentDateTime = `${hours}:${formattedMinutes} ${amPm}`;

    const bookData = {
      ...data,
      date: currentDateTime,
    };

    try {
      await axiosSource.post("/books", bookData);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Book post created successfully.",
      });
      reset();
      refetch();
      setImagePreview(null); // Clear image preview after submit
    } catch (error) {
      console.error("Error creating book post:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  // Use useEffect to update image preview only when the bookImage URL changes
  const imageUrl = watch("bookImage");
  useEffect(() => {
    if (imageUrl) {
      setImagePreview(imageUrl);
    } else {
      setImagePreview(null);
    }
  }, [imageUrl]);

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <h2 className="text-2xl font-bold mb-4">Create Book Post</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Image URL Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Book Image URL
          </label>
          <input
            {...register("bookImage")}
            type="url"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter image URL"
          />
        </div>

        {/* Image Preview */}
        {imagePreview && (
          <div className="mt-4">
            <img
              src={imagePreview}
              alt="Selected"
              className="w-auto h-full max-h-64 object-cover rounded-md shadow-md"
            />
          </div>
        )}

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Book Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Book Name
            </label>
            <input
              {...register("bookName", { required: true })}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter book name"
            />
          </div>

          {/* Book Price Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Book Price
            </label>
            <input
              {...register("price", { required: true })}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter book price"
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* PDF Drive Link Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              PDF Drive Link
            </label>
            <input
              {...register("pdfDriveLink", { required: true })}
              type="url"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter PDF Drive link"
            />
          </div>

          {/* Buy Link Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Buy Link
            </label>
            <input
              {...register("buyLink", { required: true })}
              type="url"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter buy link"
            />
          </div>

          {/* Publisher Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Publisher
            </label>
            <input
              {...register("publisher", { required: true })}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter publisher"
            />
          </div>

          {/* Total Pages Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Total Pages
            </label>
            <input
              {...register("totalPages", { required: true })}
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter total pages"
            />
          </div>
        </div>

        {/* Description Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            {...register("description", { required: true })}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter book description"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex items-center px-6 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <FaBook className="mr-2" />
            Create Book Post
          </button>
        </div>
      </form>
    </div>
  );
}
