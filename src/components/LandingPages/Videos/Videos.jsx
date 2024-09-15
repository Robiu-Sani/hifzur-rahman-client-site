import useVideos from "../../customHooks/useVideos";
import PageBanner from "../../SharedComponent/PageBanner";
import VideoCard from "../../SharedComponent/VideoCard";

export default function Videos() {
  const { videos } = useVideos();
  return (
    <div className="bg-[#3171703a]">
      <PageBanner Title="Dr: Hefzur Rahman's Lecture " />
      <div className="container py-10  mx-auto  z-10 px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {videos.map((item, idx) => (
          <VideoCard key={idx} item={item}></VideoCard>
        ))}
      </div>
    </div>
  );
}
