const blogs = [
  {
    title: "ব্লগ টাইটেল এক",
    description: "সংক্ষিপ্ত বিবরণ, বিস্তারিত জানুন।",
    thumbnail: "https://via.placeholder.com/150x100",
  },
  {
    title: "ব্লগ টাইটেল দুই",
    description: "সংক্ষিপ্ত বিবরণ, বিস্তারিত জানুন।",
    thumbnail: "https://via.placeholder.com/150x100",
  },
  {
    title: "ব্লগ টাইটেল তিন",
    description: "সংক্ষিপ্ত বিবরণ, বিস্তারিত জানুন।",
    thumbnail: "https://via.placeholder.com/150x100",
  },
];

const BlogSection = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-green-900 text-center">
        সাম্প্রতিক ব্লগ
      </h2>
      <div className="flex overflow-x-auto space-x-4 mt-4 p-4">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex-none w-64"
          >
            <img
              src={blog.thumbnail}
              alt={blog.title}
              className="rounded-lg shadow-lg mb-4 w-full"
            />
            <h3 className="text-lg font-bold text-green-900">{blog.title}</h3>
            <p className="text-green-700">{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
