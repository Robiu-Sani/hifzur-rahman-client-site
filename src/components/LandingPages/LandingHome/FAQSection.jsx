import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import image from "../../../image/bg4.png";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is PayPath?",
      answer:
        "PayPath is a payment processing service that allows businesses to accept payments online securely and efficiently.",
    },
    {
      question: "How does PayPath handle security?",
      answer:
        "PayPath uses advanced encryption and fraud detection mechanisms to ensure the safety and security of all transactions.",
    },
    {
      question: "Can I use PayPath for mobile payments?",
      answer:
        "Yes, PayPath supports mobile payments, allowing customers to pay directly through their smartphones.",
    },
    {
      question: "What are the fees for using PayPath?",
      answer:
        "PayPath offers competitive pricing with a transparent fee structure, ensuring there are no hidden costs.",
    },
    {
      question: "Does PayPath offer customer support?",
      answer:
        "Yes, PayPath provides 24/7 customer support to assist with any queries or issues that may arise.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#3171703a] py-10 flex flex-col gap-8 justify-center items-center overflow-hidden relative">
      <img src={image} alt="" className="max-h-[90%] absolute z-0 opacity-40" />
      <h1 className="text-center z-10 text-4xl font-extrabold text-gray-800">
        Frequently Asked Questions
      </h1>

      <div className="w-full z-10 max-w-3xl">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#ffffff62] rounded-lg shadow-lg mb-4 transition-transform duration-300 hover:scale-105"
          >
            <div
              className="flex justify-between items-center cursor-pointer p-6"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-bold text-gray-800">
                {faq.question}
              </h3>
              {activeIndex === index ? (
                <FaChevronUp className="text-gray-600" />
              ) : (
                <FaChevronDown className="text-gray-600" />
              )}
            </div>
            {activeIndex === index && (
              <div className="px-6 pb-6">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
