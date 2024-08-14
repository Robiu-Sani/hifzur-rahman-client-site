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
          <h1 className="text-3xl">সৃষ্টিজগতের বিষ্ময়। তার অসংখ্য মো</h1>
          <p className="text-justify">
            শুরুকথা: মহানবী, বিশ্বনবী মুহাম্মাদুর রাসুলুল্লাহ (সা:) ছিলেন
            সৃষ্টিজগতের বিষ্ময়। তার অসংখ্য মোজেজা প্রকাশিত হয়েছে। ইমাম সুয়ুতি
            (রা:) নামে একটি পৃথকগ্রন্থে রাসুল (সা:) মোজেজা সমুহ লিপিবদ্ধ করেছেন।
            রাসূল (সা:) এর বৃহৎ মোজেজা গুলোর মধ্যে ইসরাও মেরাজ অন্যতম। যা কোরআন
            ও সহীহ হাদিস দ্বারা প্রমাণিত হয়েছে। শব অর্থ রাত ও মিরাজ অর্থ গমন।
            শবে মিরাজ অর্থ উর্ধ্বলোক গমনের রাত। যে রাতে মহানবী অলৌকিক উপায়ে
            উর্ধ্বাকাশে গমন করেছিলেন। সেই রাতকে আরবিতে লাইলাতুল মিরাজ ও ফার্সিতে
            শবে মিরাজ বলা হয়। সে রাতে রাসূল (সা:) স্বশরীরে সঙ্গানে জাগ্রত
            অবস্থায় জিব্রাইল ও মিকাইল (আ:) এর সাথে বোরাক নামক বিশেষ বাহনের
            মাধ্যমে মসজিদে হারাম থেকে মসজিদে অকসায় আকাশে গমন করেন। তারপর
            ধারাবাহিক ভাবে সপ্তম আকাশ ও সিদরাতুল মুনতাহা পর্যন্ত এবং সেখান থেকে
            রফরফ বাহনে আরশে আজীম পর্যন্ত ভ্রমন করে আল্লাহ তায়ালার সাথে কথোপকথন
            সমাপ্ত করে জান্নাত- জাহান্নাম পরিদর্শন করে পৃথিবীতে ফিরে আসেন।
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
