import BookCard from "../../SharedComponent/BookCard";
import PageBanner from "../../SharedComponent/PageBanner";

export default function Books() {
  return (
    <div className="bg-[#3171703a]">
      <PageBanner Title="Books Write by Dr: Hifzur Rahman" />
      <div className="container py-10  mx-auto  z-10 px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
      </div>
    </div>
  );
}
