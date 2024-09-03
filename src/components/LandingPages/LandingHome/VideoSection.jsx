import { Link } from "react-router-dom";
import image from "../../../image/bg3.png";
import VideoCard from "../../SharedComponent/VideoCard";
import useVideos from "../../customHooks/useVideos";
export default function VideoSection() {
  const { videos } = useVideos();
  const lastThreeVideos = videos.slice(-3);

  return (
    <div className="w-full bg-[#3171703a] py-10 flex flex-col gap-8 justify-center items-center overflow-hidden relative">
      <img src={image} alt="" className="max-h-[90%] absolute z-0 opacity-40" />
      <h1 className="text-center z-10 text-4xl font-extrabold text-gray-800">
        Videos
      </h1>
      <p className="text-xl text-center -mt-4 text-gray-600">
        Hore you can See Islamic lecture and video.
      </p>
      <div className="container mx-auto px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {lastThreeVideos.map((item, idx) => (
          <VideoCard key={idx} item={item}></VideoCard>
        ))}
      </div>
      <Link
        to={"/videos"}
        className="px-5 p-2 rounded hover:scale-110 transform transition duration-300 bg-gradient text-yellow-500 z-10 shadow font-bold"
      >
        See All Video
      </Link>
    </div>
  );
}
