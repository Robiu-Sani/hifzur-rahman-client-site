import { useForm } from "react-hook-form";
import useAxiosSource from "../../customHooks/useAxiousSorce";
import Swal from "sweetalert2";

export default function CreateQuotePost() {
  const { register, handleSubmit, reset } = useForm();
  const { axiosSource } = useAxiosSource();

  const onSubmit = async (data) => {
    const currentDateTime = new Date().toLocaleString();
    const formData = { ...data, date: currentDateTime };
    try {
      await axiosSource.post("/quotes", formData);
      reset();
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Quote post created successfully.",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to create quote post.",
      });
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <h2 className="text-2xl font-bold mb-4">Create Quote Post</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Quote Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Quote
          </label>
          <textarea
            {...register("quote", { required: true })}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter the quote"
          ></textarea>
        </div>

        {/* Speaker Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Speaker
          </label>
          <input
            {...register("speaker", { required: true })}
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter the speaker's name"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex items-center px-6 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Quote
          </button>
        </div>
      </form>
    </div>
  );
}
