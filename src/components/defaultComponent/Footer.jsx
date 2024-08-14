import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import bannerBg from "../../image/bg1.jpg";

export default function Footer() {
  return (
    <footer
      className="text-white py-12"
      style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* About Us Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">আমাদের সম্পর্কে</h3>
              <p className="text-gray-300">
                আমরা আমাদের গ্রাহকদেরকে সর্বোত্তম সেবা প্রদানে প্রতিশ্রুতিবদ্ধ।
                আমাদের লক্ষ্য হলো উচ্চমানের পণ্য এবং ব্যতিক্রমী গ্রাহক সেবা
                প্রদান করা।
              </p>
            </div>

            {/* Contact Us Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">যোগাযোগ করুন</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaMapMarkerAlt className="text-gray-300 mr-2" />
                  <span className="text-gray-300">
                    ১২৩ প্রধান সড়ক, শহর, দেশ
                  </span>
                </li>
                <li className="flex items-center">
                  <FaPhoneAlt className="text-gray-300 mr-2" />
                  <span className="text-gray-300">+৮৮ ১২৩ ৪৫৬ ৭৮৯০</span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="text-gray-300 mr-2" />
                  <span className="text-gray-300">info@yourcompany.com</span>
                </li>
              </ul>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">দ্রুত লিংক</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    হোম
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    আমাদের সম্পর্কে
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    সেবা
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    যোগাযোগ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    ব্লগ
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">আমাদের অনুসরণ করুন</h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="text-2xl" />
                </a>
                <a
                  href="https://twitter.com"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-2xl" />
                </a>
                <a
                  href="https://instagram.com"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-2xl" />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="text-2xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4">নিউজলেটার সাবস্ক্রিপশন</h3>
            <form
              action="#"
              method="POST"
              className="flex flex-col sm:flex-row"
            >
              <input
                type="email"
                name="email"
                placeholder="আপনার ইমেল ঠিকানা"
                className="flex-1 p-3 mb-2 sm:mb-0 rounded-lg border border-yellow-600 bg-[#0f2e2d] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-5 p-2 rounded hover:scale-110 transform transition duration-300 bg-orange-600 ml-3 border border-orange-600 text-white z-10 shadow font-bold"
              >
                সাবস্ক্রাইব
              </button>
            </form>
          </div>

          {/* Legal Links */}
          <div className="border-t border-gray-700 mt-12 pt-4 text-center text-gray-300 text-sm">
            <ul className="flex justify-center space-x-4 mb-4">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  প্রাইভেসি পলিসি
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  পরিষেবা শর্তাবলী
                </a>
              </li>
            </ul>
            <p>
              © {new Date().getFullYear()} আপনার কোম্পানি। সমস্ত অধিকার
              সংরক্ষিত।
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
