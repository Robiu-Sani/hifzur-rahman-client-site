import BookCard from "../../SharedComponent/BookCard";

export default function BookGallery() {
  return (
    <div className="py-6 px-2 my-10 container mx-auto">
      {/* Name and Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">আমাদের বই</h2>
        <p className="text-lg text-gray-600">বইয়ের সংগ্রহ</p>
      </div>

      {/* Book Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        {/* <BookCard></BookCard> */}
      </div>

      {/* View All Books Button */}
      <div className="text-center mt-8">
        <a
          href="#"
          className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          সব বই দেখুন
        </a>
      </div>
    </div>
  );
}
