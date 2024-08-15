import { Link } from "react-router-dom";
import image from "../../../image/bg5.png";
import person from "../../../image/h2.jpeg";

export default function AboutSection() {
  return (
    <div className="w-full bg-[#3171703a] py-10 flex flex-col gap-8 justify-center items-center overflow-hidden relative">
      <img src={image} alt="" className="max-h-[90%] absolute z-0 opacity-30" />
      <div className="container mx-auto px-2 z-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="w-full">
          <div className="max-w-full rounded-full p-7  overflow-hidden  border-[2px] border-[#317170]">
            <img
              src={person}
              alt="dr:hifzur rahman"
              className="rounded-full z-10"
            />
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-7">
          <h1 className="text-3xl">ড. মো: হেফজুর রহমান </h1>
          <p className="text-justify">
            ড. মো: হেফজুর রহমান কুমিল্লা জেলার দেবিদ্বার থানাধীন জয়পুর গ্রামে
            ১৯৭২ সালে ২রা মার্চ মাতুলালয়ে জন্মগ্রহন করেন। নয় ভাই বোনদের মধ্যে
            তিনি ষষ্ঠ সন্তান। পিতা মো: আব্দুর রহমান, মাতা মাজেদা বেগমের জেষ্ঠ
            পুত্র। কুমিল্লা জেলার ব্রাহ্মণপাড়া উপজেলার দক্ষিণ তেতাভূমি গ্রামে
            তার পরিবার বসবাস করেন। গ্রামের প্রাইমারী স্কুলে তার পড়ালেখার খড়ি হয়।
            পরবর্তীতে পিতার চাকুরীস্থল দেবিদ্বার উপজেলার সুলতানপুর ফাজিল
            মাদরাসায় ১৯৭৮ সালে এবতেদায়ী ৪র্থ শ্রেণীতে ভর্তি হন। তখন তার পিতা
            উক্ত মাদরাসার অধ্যক্ষ হিসাবে কর্মরত ছিলেন। তারপর ১৯৭৯ সালে তার পিতা
            কুমিল্লা জেলার দেবিদ্বার উপজেলার ধামতি ইসলামিয়া কামিল মাদরাসায়
            মুহাদ্দিস নিযুক্ত হলে তিনি তার পিতার সঙ্গে চলমান এবং এবতেদায়ী ৫ম
            শ্রেণীতে উক্ত মাদরাসায় ভর্তি হন। পিতার নিবির তত্তাবধানে তার পড়াশোনা
            চলতে থাকে। ৮ম শ্রেণীর তৎকালীন বৃত্তি পরীক্ষায় তিনি বৃত্তিপ্রাপ্ত হন
            এবং ধর্মমন্ত্রি ও জামিয়াতুল মোদাররেমীনের প্রতিষ্ঠাতা সভাপতি জনাব
            মাও: আব্দুল মান্নান সাহেবের কাছ থেকে পুরষ্কার গ্রহন করেন। এবতেদায়ী
            ৫ম শ্রেণী থেকে কামিল (হাদিস) পর্যন্ত তিনি ধামতি ইসলামিয়া কামিল
            মাদরাসায় পিতার পরিচর্যায় ও সান্নিধ্যে শিক্ষালাভ করেন। ১৯৮৬ সালে
            সাধারণ বিভাগ হতে মেধাবৃত্তি সহকারে দাখিল পরীক্ষায় প্রথম বিভাগে
            উত্তীর্ন হন।...
          </p>
          <Link
            to={"/about"}
            className="px-5 p-2 rounded hover:scale-110 transform transition duration-300 bg-gradient text-yellow-500 z-10 shadow font-bold"
          >
            Read more..
          </Link>
        </div>
      </div>
    </div>
  );
}
