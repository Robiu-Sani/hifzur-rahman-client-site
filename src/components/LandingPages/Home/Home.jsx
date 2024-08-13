// import BlogSection from "./BlogSection";
import BookGallery from "./BookGallery";
import ImageGallery from "./ImageGallery";
// import MainVideoSection from "./MainVideoSection";
import OurBlogs from "./OurBlogs";
import VideoGallery from "./VideoGallery";
// import VideoGridSection from "./VideoGridSection";

export default function Home() {
  return (
    <div>
      {/* <MainVideoSection></MainVideoSection>
      <VideoGridSection></VideoGridSection>
      <BlogSection></BlogSection> */}
      <VideoGallery></VideoGallery>
      <BookGallery></BookGallery>
      <OurBlogs></OurBlogs>
      <ImageGallery></ImageGallery>
    </div>
  );
}
