import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import image from "../../../image/bg4.png";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "ইসলাম কি?",
      answer:
        "ইসলাম একটি সম্পূর্ণ জীবনব্যবস্থা, যা আল্লাহ প্রদত্ত এবং তাঁর প্রেরিত রাসূল মুহাম্মদ (সা.) এর মাধ্যমে মানুষের কাছে পৌঁছানো হয়েছে।",
    },
    {
      question: "সালাত কেন গুরুত্বপূর্ণ?",
      answer:
        "সালাত (নামাজ) ইসলামের পাঁচটি মূল স্তম্ভের একটি এবং এটি প্রতিদিনের ফরজ ইবাদত, যা মুসলমানদের আল্লাহর সাথে সংযুক্ত রাখে।",
    },
    {
      question: "রোজা রাখার উদ্দেশ্য কী?",
      answer:
        "রোজার মূল উদ্দেশ্য হল আত্মসংযম, ধৈর্য এবং আল্লাহর নৈকট্য লাভ করা। এটি আমাদের পাপ থেকে বিরত রাখতে সাহায্য করে এবং আল্লাহর প্রতি কৃতজ্ঞতা প্রকাশের উপায়।",
    },
    {
      question: "জাকাতের গুরুত্ব কী?",
      answer:
        "জাকাত মুসলিম সমাজের অর্থনৈতিক ভারসাম্য রক্ষা করে এবং দরিদ্র ও অভাবী মানুষের জন্য সহায়তার ব্যবস্থা করে। এটি ধনী মুসলমানদের উপর বাধ্যতামূলক।",
    },
    {
      question: "হজ্জ করার শর্তাবলী কী?",
      answer:
        "হজ্জ ইসলামের পাঁচটি স্তম্ভের একটি এবং এটি মুসলিমদের জন্য বাধ্যতামূলক, যদি তারা শারীরিক ও আর্থিকভাবে সক্ষম হয়। এটি একবার জীবনে সম্পাদন করতে হয়।",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#3171703a] py-10 flex flex-col gap-8 justify-center items-center overflow-hidden relative">
      <img src={image} alt="" className="max-h-[90%] absolute z-0 opacity-40" />
      <h1 className="text-center z-10 text-4xl font-extrabold text-gray-800">
        প্রায় জিজ্ঞাসিত প্রশ্নাবলী
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
