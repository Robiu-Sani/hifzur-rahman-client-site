import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSource from "../../customHooks/useAxiousSorce";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { axiosSource } = useAxiosSource();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axiosSource.post("/login", data);

      // Store email in localStorage
      localStorage.setItem("userEmail", data.email);

      // Display success message with SweetAlert2
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You have logged in successfully!",
      });
      navigate("/");

      console.log("Login successful:", response.data);
    } catch (error) {
      // Display error message with SweetAlert2
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.response
          ? error.response.data
          : "An error occurred during login. Please try again.",
      });

      console.error(
        "Login failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#a7c9c7]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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

          <div className="mb-6">
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

          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don`t have an account?{" "}
          <a href="/signup" className="text-teal-500 hover:text-teal-700">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
