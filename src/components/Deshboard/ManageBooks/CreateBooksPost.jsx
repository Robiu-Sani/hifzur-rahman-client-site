import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaBook } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSource from "../../customHooks/useAxiousSorce";

export default function CreateBooksPost() {
  const { register, handleSubmit, watch, reset } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const { axiosSource } = useAxiosSource();

  const onSubmit = async (data) => {
    const currentDateTime = new Date().toLocaleString();
    const formData = new FormData();
    formData.append("bookImage", data.bookImage[0]);
    formData.append("bookName", data.bookName);
    formData.append("description", data.description);
    formData.append("pdfDriveLink", data.pdfDriveLink);
    formData.append("buyLink", data.buyLink);
    formData.append("publisher", data.publisher);
    formData.append("totalPages", data.totalPages);
    formData.append("date", currentDateTime);

    try {
      await axiosSource.post("/books", formData);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Book post created successfully.",
      });
      reset();
      setImagePreview(null); // Clear image preview after submit
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  // Watch image file input to update preview
  const imageFile = watch("bookImage");
  if (imageFile && imageFile[0]) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(imageFile[0]);
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <h2 className="text-2xl font-bold mb-4">Create Book Post</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload Book Image
          </label>
          <input
            {...register("bookImage", { required: true })}
            type="file"
            accept="image/*"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Image Preview */}
        {imagePreview && (
          <div className="mt-4">
            <img
              src={imagePreview}
              alt="Selected"
              className="w-full h-auto max-h-64 object-cover rounded-md shadow-md"
            />
          </div>
        )}

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
