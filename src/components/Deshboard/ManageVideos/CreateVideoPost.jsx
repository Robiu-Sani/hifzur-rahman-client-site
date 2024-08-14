import { useForm } from "react-hook-form";
import { FaVideo } from "react-icons/fa";

export default function CreateVideoPost() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const currentDateTime = new Date().toLocaleString();
    console.log({ ...data, date: currentDateTime });
    reset();
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <h2 className="text-2xl font-bold mb-4">Create Video Post</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* YouTube Video Link Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            YouTube Video Link
          </label>
          <input
            {...register("videoLink", { required: true })}
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter YouTube video link"
          />
        </div>

        {/* Title Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            {...register("title", { required: true })}
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter video title"
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
            placeholder="Enter video description"
          ></textarea>
        </div>

        {/* Speaker Name Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Speaker Name
          </label>
          <input
            {...register("speakerName", { required: true })}
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter speaker name"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex items-center px-6 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <FaVideo className="mr-2" />
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
}
