import PageBanner from "../../SharedComponent/PageBanner";
import VideoCard from "../../SharedComponent/VideoCard";

export default function Videos() {
  return (
    <div className="bg-[#3171703a]">
      <PageBanner Title="Dr: Hifzur Rahman's Lecture " />
      <div className="container py-10  mx-auto  z-10 px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
      </div>
    </div>
  );
}
