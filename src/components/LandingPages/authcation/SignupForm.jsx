import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSource from "../../customHooks/useAxiousSorce";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const { axiosSource } = useAxiosSource();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const signupData = { ...data, status: "User" };

    try {
      const response = await axiosSource.post("/signup", signupData);

      localStorage.setItem("userEmail", data.email);

      // Display success message with SweetAlert2
      Swal.fire({
        icon: "success",
        title: "Signup Successful",
        text: "Your account has been created successfully!",
      });
      navigate("/");
      location.reload();
      console.log("Signup successful:", response.data);
    } catch (error) {
      // Display error message with SweetAlert2
      Swal.fire({
        icon: "error",
        title: "Signup Failed",
        text: error.response
          ? error.response.data
          : "An error occurred during signup. Please try again.",
      });

      console.error(
        "Signup failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="min-h-screen pt-12 pb-5 flex items-center justify-center bg-[#a7c9c7]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-teal-500 hover:text-teal-700">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
