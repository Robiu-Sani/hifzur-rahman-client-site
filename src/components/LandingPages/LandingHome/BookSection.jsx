import { Link } from "react-router-dom";
import BookCard from "../../SharedComponent/BookCard";
import image from "../../../image/bg4.png";
import useBooks from "../../customHooks/useBooks";

export default function BookSection() {
  const { books } = useBooks();
  const lastThreebooks = books.slice(-3);
  return (
    <div className="w-full bg-[#3171703a] py-10 flex flex-col gap-8 justify-center items-center overflow-hidden relative">
      <img src={image} alt="" className="max-h-[90%] absolute z-0 opacity-40" />
      <h1 className="text-center z-10 text-4xl font-extrabold text-gray-800">
        Books
      </h1>
      <p className="text-xl text-center -mt-4 text-gray-600">
        Here you can See Islamic Book writen by Dr.Hifzur Rahman.
      </p>
      <div className="container mx-auto z-10 px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {lastThreebooks.map((item, idx) => (
          <BookCard key={idx} item={item}></BookCard>
        ))}
      </div>
      <Link
        to={"/books"}
        className="px-5 p-2 rounded hover:scale-110 transform transition duration-300 bg-gradient text-yellow-500 z-10 shadow font-bold"
      >
        See All Books
      </Link>
    </div>
  );
}
