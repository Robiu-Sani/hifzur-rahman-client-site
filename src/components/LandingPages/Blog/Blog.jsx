import useBlogs from "../../customHooks/useBlogs";
import BlogCard from "../../SharedComponent/BlogCard";
import PageBanner from "../../SharedComponent/PageBanner";

export default function Blog() {
  const { blogs } = useBlogs();
  return (
    <div className="">
      <PageBanner Title="Blogs from Dr: Hefzur Rahman" />
      <div className="container py-10 bg-[#3171703a] mx-auto  z-10 px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {blogs.map((blog, idx) => (
          <BlogCard key={idx} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
}
