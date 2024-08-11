const VideoGallery = () => (
  <div className="max-w-7xl mx-auto p-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900">
        আমাদের ভিডিও গ্যালারি
      </h2>
      <p className="text-xl text-gray-600 mt-2">
        এখানে আপনি আমাদের নির্বাচিত ভিডিওগুলি দেখতে পারবেন
      </p>
    </div>
    <div className="grid gap-6 md:grid-cols-2 sm:grid-cols-1">
      {/* Video Card 1 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
        <iframe
          className="w-full h-48"
          src="https://www.youtube.com/embed/f66X76RWo38"
          title="ভিডিও ১"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">ভিডিও ১</h3>
          <p className="text-gray-600 mb-1">১০ আগস্ট ২০২৪</p>
          <p className="text-gray-600">জন ডো</p>
        </div>
      </div>

      {/* Video Card 2 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
        <iframe
          className="w-full h-48"
          src="https://www.youtube.com/embed/f66X76RWo38"
          title="ভিডিও ২"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">ভিডিও ২</h3>
          <p className="text-gray-600 mb-1">১১ আগস্ট ২০২৪</p>
          <p className="text-gray-600">জেন স্মিথ</p>
        </div>
      </div>

      {/* Video Card 3 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
        <iframe
          className="w-full h-48"
          src="https://www.youtube.com/embed/f66X76RWo38"
          title="ভিডিও ৩"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">ভিডিও ৩</h3>
          <p className="text-gray-600 mb-1">১২ আগস্ট ২০২৪</p>
          <p className="text-gray-600">আলিফ রহমান</p>
        </div>
      </div>

      {/* Video Card 4 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
        <iframe
          className="w-full h-48"
          src="https://www.youtube.com/embed/f66X76RWo38"
          title="ভিডিও ৪"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">ভিডিও ৪</h3>
          <p className="text-gray-600 mb-1">১৩ আগস্ট ২০২৪</p>
          <p className="text-gray-600">সারা খান</p>
        </div>
      </div>
    </div>
    <div className="text-center mt-8">
      <a
        href="#"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        সব ভিডিও দেখুন
      </a>
    </div>
  </div>
);

export default VideoGallery;
