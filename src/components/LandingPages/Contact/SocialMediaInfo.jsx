import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

export default function SocialMediaInfo() {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com",
      icon: <FaFacebookF />,
    },
    { name: "WhatsApp", url: "https://wa.me/", icon: <IoLogoWhatsapp /> },
    { name: "Twitter", url: "https://twitter.com", icon: <FaTwitter /> },
    {
      name: "Instagram",
      url: "https://www.instagram.com",
      icon: <FaInstagram />,
    },
    { name: "YouTube", url: "https://www.youtube.com", icon: <FaYoutube /> },
    { name: "Telegram", url: "https://t.me", icon: <FaTelegramPlane /> },
  ];

  return (
    <div className="bg-[#d0dfde] p-10">
      <h2 className="text-3xl font-bold text-center text-[#3b7777] mb-10">
        Connect With Us
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-lg p-6 w-32 h-32 flex flex-col items-center justify-center transition-transform transform hover:scale-110 hover:shadow-2xl"
          >
            <div className="text-5xl text-[#3b7777] mb-2">{link.icon}</div>
            <span className="text-md font-semibold text-[#3b7777]">
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
