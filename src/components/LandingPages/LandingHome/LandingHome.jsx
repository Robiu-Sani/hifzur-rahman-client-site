import QuetSection from "../../SharedComponent/QuetSection";
import AboutSection from "./AboutSection";
import Banner from "./Banner";
import BlogSection from "./BlogSection";
import BookSection from "./BookSection";
import FAQSection from "./FAQSection";
import ImageSections from "./ImageSections";
import ProgrammSection from "./ProgrammSection";
import ServicesShowwithBg from "./ServicesShowwithBg";
import VideoSection from "./VideoSection";

export default function LandingHome() {
  return (
    <div className="w-full">
      <Banner></Banner>
      <AboutSection></AboutSection>
      <VideoSection></VideoSection>
      <BookSection></BookSection>
      <ServicesShowwithBg></ServicesShowwithBg>
      <BlogSection></BlogSection>
      <ProgrammSection></ProgrammSection>
      <ImageSections></ImageSections>
      <FAQSection></FAQSection>
      <QuetSection></QuetSection>
    </div>
  );
}
