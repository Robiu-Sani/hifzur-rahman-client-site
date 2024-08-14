import { useForm } from "react-hook-form";

export default function CreateContactAddress() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const currentDateTime = new Date().toLocaleString();
    console.log({ ...data, date: currentDateTime });
    reset();
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <h2 className="text-2xl font-bold mb-4">Create Contact Address</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Address Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <input
            {...register("address", { required: true })}
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter address"
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter email address"
          />
        </div>

        <div className="w-full grid grid-cols-2 gap-5">
          {/* Phone Number Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              {...register("phone", { required: true })}
              type="tel"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter phone number"
            />
          </div>

          {/* Address Type Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address Type
            </label>
            <select
              {...register("addressType", { required: true })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select address type</option>
              <option value="home">Home</option>
              <option value="office">Office</option>
              <option value="community">Community</option>
              <option value="team">Team</option>
            </select>
          </div>
        </div>

        {/* Notes Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Notes
          </label>
          <textarea
            {...register("notes")}
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Add any additional notes here"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex items-center px-6 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Contact
          </button>
        </div>
      </form>
    </div>
  );
}
