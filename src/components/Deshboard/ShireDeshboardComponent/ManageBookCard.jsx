import { useState } from "react";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa";
import useAxiosSource from "../../customHooks/useAxiousSorce";
import useBooks from "../../customHooks/useBooks";

export default function ManageBookCard({ book }) {
  const [selectedBook, setSelectedBook] = useState(null);
  const { axiosSource } = useAxiosSource();
  const { refetch } = useBooks();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete Book",
      text: "Are you sure you want to delete this book?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSource
          .delete(`/books/${id}`)
          .then(() => {
            refetch();
            Swal.fire("Deleted!", "The book has been deleted.", "success");
          })
          .catch((error) => {
            console.error("Error deleting book: ", error);
            Swal.fire(
              "Error",
              "There was an error deleting the book.",
              "error"
            );
          });
      }
    });
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleClosePopup = () => {
    setSelectedBook(null);
  };

  return (
    <div className="relative w-full max-w-sm mx-auto bg-gray-200 rounded-md shadow-md cursor-pointer group">
      <div className="relative overflow-hidden shadow-lg">
        <div className="h-[200px] flex justify-center items-center p-2">
          <img
            src={book.bookImage}
            alt={book.bookName}
            className="h-full w-auto transition-transform duration-300 group-hover:scale-105"
            onClick={() => handleBookClick(book)}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white">
          <h3 className="text-lg font-semibold">{book.bookName}</h3>
          <p className="text-sm">Published by: {book.publisher}</p>
        </div>
      </div>

      <div className="px-4 py-2">
        <p className="text-gray-800 font-bold">Price: {book.price} Taka</p>
        <p className="text-gray-600">Pages: {book.totalPages}</p>
        <p className="text-gray-600">Published on: {book.date}</p>
        <p className="text-gray-600">{book.description}</p>
        <a
          href={book.pdfDriveLink}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View PDF
        </a>
      </div>

      <div className="grid grid-cols-2 gap-3 px-2 pb-2 mt-4">
        <span></span>
        <button
          onClick={() => handleDelete(book._id)}
          className="flex items-center px-4 py-2 bg-red-600 text-white rounded shadow hover:bg-red-700 transition duration-300"
        >
          <FaTrash className="mr-2" /> Delete
        </button>
      </div>

      {selectedBook && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <img
              src={selectedBook.bookImage}
              alt={selectedBook.bookName}
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold mb-2">{selectedBook.bookName}</h3>
            <p className="text-gray-500 mb-4">
              Published by: {selectedBook.publisher}
            </p>
            <p className="text-gray-500">
              Total Pages: {selectedBook.totalPages}
            </p>
            <p className="text-gray-500">{selectedBook.description}</p>
            <a
              href={selectedBook.pdfDriveLink}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View PDF
            </a>
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-white bg-red-600 rounded-full p-1 hover:bg-red-700"
            >
              &#10005;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
