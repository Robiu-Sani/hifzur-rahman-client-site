import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function QuoteCard({ quote }) {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-white shadow-lg rounded-lg border border-gray-200">
      {/* Quote Display */}
      <div className="mb-4">
        <blockquote className="text-gray-700 flex   italic text-xl">
          <FaQuoteLeft className="inline mr-2 text-indigo-600" />
          {quote.quote}
          <div className="relative">
            <FaQuoteRight className="inline mr-2 text-indigo-600 absolute bottom-0" />
          </div>
        </blockquote>
      </div>

      {/* Speaker Display */}
      <div className="mb-4">
        <p className="text-gray-700">
          <strong>- {quote.speaker}</strong>
        </p>
      </div>
    </div>
  );
}
