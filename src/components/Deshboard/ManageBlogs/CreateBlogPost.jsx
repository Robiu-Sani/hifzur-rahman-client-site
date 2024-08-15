import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { FaRegImage } from "react-icons/fa";
import useAxiosSource from "../../customHooks/useAxiousSorce";
import Swal from "sweetalert2";

export default function CreateBlogPost() {
  const { register, handleSubmit, watch, reset } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const { axiosSource } = useAxiosSource();

  useEffect(() => {
    const subscription = watch((value) => {
      if (value.image && value.image[0]) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(value.image[0]);
        setImageFile(value.image[0]);
      } else {
        setImagePreview(null);
        setImageFile(null);
      }
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("date", new Date().toLocaleString());
    if (imageFile) formData.append("image", imageFile);

    try {
      const response = await axiosSource.post("/blogs", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
      reset();
      setImagePreview(null);

      Swal.fire({
        title: "Success!",
        text: "Blog post created successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "There was an error creating the blog post.",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error("Error creating blog post:", error);
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <h2 className="text-2xl font-bold mb-4">Create Blog Post</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
        method="POST"
        action="/blogs"
      >
        {/* Title Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            {...register("title", { required: true })}
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter blog title"
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
            placeholder="Enter blog description"
          ></textarea>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload Image
          </label>
          <input
            {...register("image")}
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
