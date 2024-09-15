import useBooks from "../../customHooks/useBooks";
import BookCard from "../../SharedComponent/BookCard";
import PageBanner from "../../SharedComponent/PageBanner";

export default function Books() {
  const { books } = useBooks();
  return (
    <div className="bg-[#3171703a] ">
      <PageBanner Title="Books Write by Dr: Hefzur Rahman" />
      <div className="container py-10  mx-auto  z-10 px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {books.map((item, idx) => (
          <BookCard item={item} key={idx}></BookCard>
        ))}
      </div>
    </div>
  );
}
