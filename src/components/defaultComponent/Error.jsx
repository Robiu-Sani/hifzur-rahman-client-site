import {
  FaExclamationTriangle,
  FaHome,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function ErrorPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-30"></div>
      <motion.div
        className="relative bg-white shadow-lg rounded-lg p-8 max-w-lg w-full text-center z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <FaExclamationTriangle className="text-red-600 text-7xl mb-6 animate-pulse" />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Something Went Wrong
        </h1>
        <p className="text-gray-700 mb-6">
          We encountered an error while processing your request. Please try
          again later or contact support if the problem persists.
        </p>
        <div className="flex flex-col items-center mb-6">
          <a
            href="/"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center"
          >
            <FaHome className="mr-2 text-xl" />
            Go Home
          </a>
        </div>
        <div className="flex flex-col items-center">
          <a
            href="mailto:support@example.com"
            className="flex items-center text-blue-500 hover:underline mb-2"
          >
            <FaEnvelope className="mr-2 text-xl" />
            Contact Support
          </a>
          <a
            href="tel:+1234567890"
            className="flex items-center text-blue-500 hover:underline"
          >
            <FaPhoneAlt className="mr-2 text-xl" />
            Call Us
          </a>
        </div>
      </motion.div>
    </div>
  );
}
