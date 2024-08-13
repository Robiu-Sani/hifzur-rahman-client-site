import VideoCard from "../../SharedComponent/VideoCard";

const VideoGallery = () => (
  <div className="container mx-auto px-2 my-10 py-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900">
        আমাদের ভিডিও গ্যালারি
      </h2>
      <p className="text-xl text-gray-600 mt-2">
        এখানে আপনি আমাদের নির্বাচিত ভিডিওগুলি দেখতে পারবেন
      </p>
    </div>
    <div className="grid gap-6 grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
      {/* Video Card 1 */}
      <VideoCard></VideoCard>

      {/* Video Card 2 */}
      <VideoCard></VideoCard>

      {/* Video Card 3 */}
      <VideoCard></VideoCard>
    </div>
    <div className="text-center mt-8">
      <a
        href="#"
        className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
      >
        সব ভিডিও দেখুন
      </a>
    </div>
  </div>
);

export default VideoGallery;
