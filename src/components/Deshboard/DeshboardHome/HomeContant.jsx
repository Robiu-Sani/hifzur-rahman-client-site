import useBlogs from "../../customHooks/useBlogs";
import useBooks from "../../customHooks/useBooks";
import useImages from "../../customHooks/useImage";
import useVideos from "../../customHooks/useVideos";

export default function HomeContant() {
  const { videos } = useVideos();
  const { blogs } = useBlogs();
  const { books } = useBooks();
  const { images } = useImages();

  return (
    <div className="w-full mt-3">
      <div className="w-full grid grid-cols-1 gap-5 sm:grid-cols-5">
        <div className="w-full col-span-1 p-2 rounded-md border border-[#a6c4c2] sm:col-span-3">
          <h3>Total Informetion</h3>
          <div className="w-full grid grid-cols-4 mt-3 gap-3">
            <div className="w-full p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3">
              <h1 className="text-4xl font-bold">{videos.length}</h1>
              <p>Videos</p>
            </div>
            <div className="w-full p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3">
              <h1 className="text-4xl font-bold">{blogs.length}</h1>
              <p>Blogs</p>
            </div>
            <div className="w-full p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3">
              <h1 className="text-4xl font-bold">{images.length}</h1>
              <p>Images</p>
            </div>
            <div className="w-full p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3">
              <h1 className="text-4xl font-bold">{books.length}</h1>
              <p>Books</p>
            </div>
          </div>
        </div>
        <div className="w-full col-span-1 p-2 rounded-md border border-[#a6c4c2] sm:col-span-2">
          <h3>Sub Informetion</h3>
          <div className="w-full grid grid-cols-3 mt-3 gap-3">
            <div className="w-full p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3">
              <h1 className="text-4xl font-bold">0</h1>
              <p>Users</p>
            </div>
            <div className="w-full p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3">
              <h1 className="text-4xl font-bold">0</h1>
              <p>Admin</p>
            </div>
            <div className="w-full p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3">
              <h1 className="text-4xl font-bold">0</h1>
              <p>Messages</p>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------ secend content is running -------------------  */}
    </div>
  );
}
