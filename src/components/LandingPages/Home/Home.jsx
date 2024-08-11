import BookGallery from "./BookGallery";
import ImageGallery from "./ImageGallery";
import VideoGallery from "./VideoGallery";

export default function Home() {
  return (
    <div>
      <VideoGallery></VideoGallery>
      <BookGallery></BookGallery>
      <ImageGallery></ImageGallery>
    </div>
  );
}
