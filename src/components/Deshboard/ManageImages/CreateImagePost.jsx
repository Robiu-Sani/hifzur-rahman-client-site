import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { FaRegImage } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSource from "../../customHooks/useAxiousSorce";
import useImages from "../../customHooks/useImage";

export default function CreateImagePost() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const { axiosSource } = useAxiosSource();
  const { refetch } = useImages();

  useEffect(() => {
    const subscription = watch((value) => {
      if (value.imageURL) {
        setImagePreview(value.imageURL);
      } else {
        setImagePreview(null);
      }
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = async (data) => {
    const currentDateTime = new Date().toLocaleString();
    const finalData = { ...data, date: currentDateTime };

    try {
      await axiosSource.post("/images", finalData);
      refetch();

      // Show success message
      Swal.fire({
        title: "Success!",
        text: "Image post created successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });

      reset();
      setImagePreview(null); // Clear image preview after submit
    } catch (error) {
      // Show error message
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: "There was an error creating the image post.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <h2 className="text-2xl font-bold mb-4">Create Image Post</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            {...register("title", { required: "Title is required" })}
            type="text"
            className={`w-full px-3 py-2 border ${
              errors.title ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            placeholder="Enter image title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Description Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            rows="4"
            className={`w-full px-3 py-2 border ${
              errors.description ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            placeholder="Enter image description"
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Image URL Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Image URL
          </label>
          <input
            {...register("imageURL", { required: "Image URL is required" })}
            type="url"
            className={`w-full px-3 py-2 border ${
              errors.imageURL ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            placeholder="Enter image URL"
          />
          {errors.imageURL && (
            <p className="text-red-500 text-sm mt-1">
              {errors.imageURL.message}
            </p>
          )}
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

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex items-center px-6 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <FaRegImage className="mr-2" />
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
}
