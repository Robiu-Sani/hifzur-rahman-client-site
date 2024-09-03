import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaImage } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSource from "../../customHooks/useAxiousSorce";

export default function CreateNewsPost() {
  const { register, handleSubmit, reset } = useForm();
  const { axiosSource } = useAxiosSource();

  const onSubmit = async (data) => {
    const currentDateTime = new Date().toLocaleString();
    const formData = {
      imageUrl: data.imageUrl,
      title: data.title,
      description: data.description,
      category: data.category,
      publicationDate: data.publicationDate,
      tags: data.tags,
      date: currentDateTime,
    };

    try {
      await axiosSource.post("/news", formData);
      Swal.fire({
        icon: "success",
        title: "সফল!",
        text: "নিউজ পোস্ট সফলভাবে তৈরি হয়েছে।",
      });
      reset();
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "ওহ!",
        text: "কিছু ভুল হয়েছে!",
      });
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <h2 className="text-2xl font-bold mb-4">নিউজ পোস্ট তৈরি করুন</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Image URL Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ইমেজ URL
          </label>
          <input
            {...register("imageUrl", { required: true })}
            type="url"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="ইমেজ URL লিখুন"
          />
        </div>

        {/* Title Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            শিরোনাম
          </label>
          <input
            {...register("title", { required: true })}
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="শিরোনাম লিখুন"
          />
        </div>

        {/* Description Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            বর্ণনা
          </label>
          <textarea
            {...register("description", { required: true })}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="বর্ণনা লিখুন"
          ></textarea>
        </div>

        {/* Category Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ক্যাটেগরি
          </label>
          <select
            {...register("category", { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">ক্যাটেগরি নির্বাচন করুন</option>
            <option value="politics">রাজনীতি</option>
            <option value="economy">অর্থনীতি</option>
            <option value="technology">প্রযুক্তি</option>
            <option value="sports">খেলাধুলা</option>
            <option value="entertainment">বিনোদন</option>
            <option value="health">স্বাস্থ্য</option>
          </select>
        </div>

        {/* Publication Date Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            প্রকাশনার তারিখ
          </label>
          <input
            {...register("publicationDate", { required: true })}
            type="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Tags Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ট্যাগ
          </label>
          <input
            {...register("tags")}
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="কমা দিয়ে ট্যাগ আলাদা করুন"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex items-center px-6 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <FaImage className="mr-2" />
            পোস্ট তৈরি করুন
          </button>
        </div>
      </form>
    </div>
  );
}
