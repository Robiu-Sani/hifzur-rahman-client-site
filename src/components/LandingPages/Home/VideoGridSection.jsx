const videos = [
  {
    title: "ভিডিও টাইটেল এক",
    description: "সংক্ষিপ্ত বিবরণ, বিস্তারিত জানুন।",
    thumbnail: "https://via.placeholder.com/150x100",
  },
  {
    title: "ভিডিও টাইটেল দুই",
    description: "সংক্ষিপ্ত বিবরণ, বিস্তারিত জানুন।",
    thumbnail: "https://via.placeholder.com/150x100",
  },
  {
    title: "ভিডিও টাইটেল তিন",
    description: "সংক্ষিপ্ত বিবরণ, বিস্তারিত জানুন।",
    thumbnail: "https://via.placeholder.com/150x100",
  },
];

const VideoGridSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {videos.map((video, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="rounded-lg shadow-lg mb-4 w-full"
          />
          <h3 className="text-lg font-bold text-green-900">{video.title}</h3>
          <p className="text-green-700">{video.description}</p>
        </div>
      ))}
    </div>
  );
};

export default VideoGridSection;
