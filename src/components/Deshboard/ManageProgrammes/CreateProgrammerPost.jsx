import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaImage } from "react-icons/fa";
import useAxiosSource from "../../customHooks/useAxiousSorce";
import Swal from "sweetalert2";

export default function CreateProgrammerPost() {
  const { register, handleSubmit, watch, reset } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const { axiosSource } = useAxiosSource();

  const onSubmit = async (data) => {
    const currentDateTime = new Date().toLocaleString();
    const MainData = { ...data, date: currentDateTime };

    try {
      await axiosSource.post("/programms", MainData);
      reset();
      setImagePreview(null); // Clear image preview after submit

      Swal.fire({
        title: "Success!",
        text: "Programmer post created successfully.",
        icon: "success",
        confirmButtonText: "Ok",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: "There was an error creating the post.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  // Watch image file input to update preview
  const imageFile = watch("image");
  if (imageFile && imageFile[0]) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(imageFile[0]);
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <h2 className="text-2xl font-bold mb-4">Create Programmer Post</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload Image
          </label>
          <input
            {...register("image", { required: true })}
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

        {/* Title Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            {...register("title", { required: true })}
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter post title"
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
            placeholder="Enter post description"
          ></textarea>
        </div>

        {/* Program Space Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Program Space
          </label>
          <input
            {...register("programSpace", { required: true })}
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter program space"
          />
        </div>

        {/* Date Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <input
            {...register("date", { required: true })}
            type="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="w-full grid grid-cols-2 gap-5">
          {/* Start Time Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Time
            </label>
            <input
              {...register("startTime", { required: true })}
              type="time"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* End Time Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Time
            </label>
            <input
              {...register("endTime", { required: true })}
              type="time"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex items-center px-6 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <FaImage className="mr-2" />
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
}
