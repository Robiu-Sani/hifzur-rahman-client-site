import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useContactsMessages from "../../customHooks/useContactsMessages";
import useAxiosSource from "../../customHooks/useAxiousSorce";

export default function ContactForm() {
  const { refetch } = useContactsMessages();
  const { axiosSource } = useAxiosSource();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const messageData = { ...data, date: new Date().toLocaleDateString() };

    axiosSource
      .post(`/ContactsMessages`, messageData)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you for contacting us. We will get back to you soon.",
          confirmButtonColor: "#3b7777",
        });
        refetch(); // Refetch the contact messages only after the message is sent
        reset(); // Reset the form after successful submission
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again later.",
          confirmButtonColor: "#3b7777",
        });
        console.error("Error sending message:", error);
      });
  };

  return (
    <div className="bg-[#d0dfde] px-2 py-10 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-2/3 lg:w-1/2">
        <h2 className="text-3xl font-bold text-center text-[#3b7777] mb-6">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-[#3b7777] font-bold mb-2">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-[#3b7777] font-bold mb-2">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Email"
            />
            {errors.email && (
              <p className="text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-[#3b7777] font-bold mb-2">
              Subject
            </label>
            <input
              {...register("subject", { required: "Subject is required" })}
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Subject"
            />
            {errors.subject && (
              <p className="text-red-500 mt-1">{errors.subject.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-[#3b7777] font-bold mb-2">
              Message
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="w-full p-2 border border-gray-300 rounded h-32"
              placeholder="Your Message"
            />
            {errors.message && (
              <p className="text-red-500 mt-1">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#3b7777] text-white py-2 px-4 rounded mt-4 hover:bg-[#2c5c5c] transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
