import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddNoteForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    Swal.fire({
      title: "Note Added",
      text: "Your note has been successfully added.",
      icon: "success",
      confirmButtonText: "OK",
    });

    console.log(data);
    reset(); // Reset the form after submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md p-4">
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="time">
          Time:
        </label>
        <input
          type="time"
          id="time"
          {...register("time", { required: true })}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2" htmlFor="note">
          Note:
        </label>
        <textarea
          id="note"
          {...register("note", { required: true })}
          className="w-full p-2 border border-gray-300 rounded"
          rows="4"
          placeholder="Write your note here..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Add Note
      </button>
    </form>
  );
};

export default AddNoteForm;
