import { useEffect, useState } from "react";
import useBlogs from "../../customHooks/useBlogs";
import useBooks from "../../customHooks/useBooks";
import useContactsMessages from "../../customHooks/useContactsMessages";
import useImages from "../../customHooks/useImage";
import useVideos from "../../customHooks/useVideos";
import useAxiosSource from "../../customHooks/useAxiousSorce";
import useUsers from "../../customHooks/useUsers";
import useProgramms from "../../customHooks/useProgramms";
import useQuote from "../../customHooks/useQuote";
import useNews from "../../customHooks/useNews";
import useContacts from "../../customHooks/useContacts";

export default function HomeContant() {
  const { videos } = useVideos();
  const { blogs } = useBlogs();
  const { books } = useBooks();
  const { images } = useImages();
  const { ContactsMessages } = useContactsMessages();
  const [loggedIn, setLoggedIn] = useState(null);
  const { axiosSource } = useAxiosSource();
  const email = localStorage.getItem("userEmail");
  const { Users } = useUsers();
  const { programms } = useProgramms();
  const { quotes } = useQuote();
  const { news } = useNews();
  const { contacts } = useContacts();

  useEffect(() => {
    if (email) {
      axiosSource
        .get(`/users/${email}`)
        .then((res) => {
          if (res.data) {
            setLoggedIn(res.data);
          }
        })
        .catch((err) => {
          console.error("Error fetching user data:", err);
        });
    } else {
      console.log("User not logged in");
    }
  }, [email, axiosSource]);

  return (
    <div className="w-full mt-3">
      <div className="w-full grid grid-cols-1 gap-5 sm:grid-cols-5">
        <div className="w-full col-span-1 p-2 rounded-md border border-[#a6c4c2] sm:col-span-2">
          <h3>Sub Informetion</h3>
          <div className="w-full grid grid-cols-3 mt-3 gap-3">
            <div className="w-full col-span-3 p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3">
              <h1 className="text-4xl font-bold">{loggedIn?.name}</h1>
              <p>Thanks for the continue.</p>
            </div>
            <div className="w-full p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3">
              <h1 className="text-4xl font-bold">{Users ? Users.length : 0}</h1>
              <p>Users</p>
            </div>
            <div className="w-full p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3">
              <h1 className="text-4xl font-bold">
                {Users.filter((user) => user.status == "Admin").length}
              </h1>
              <p>Admin</p>
            </div>
            <div className="w-full p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3">
              <h1 className="text-4xl font-bold">
                {ContactsMessages ? ContactsMessages.length : 0}
              </h1>
              <p>Messages</p>
            </div>
          </div>
        </div>
        <div className="w-full col-span-1 p-2 rounded-md border border-[#a6c4c2] sm:col-span-3">
          <h3>Total Informetion</h3>
          <div className="w-full grid grid-cols-4 mt-3 gap-3">
            <div className="w-full p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3">
              <h1 className="text-4xl font-bold">
                {videos ? videos.length : 0}
              </h1>
              <p>Videos</p>
            </div>
            <div className="w-full p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3">
              <h1 className="text-4xl font-bold">{blogs ? blogs.length : 0}</h1>
              <p>Blogs</p>
            </div>
            <div className="w-full p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3">
              <h1 className="text-4xl font-bold">
                {images ? images.length : 0}
              </h1>
              <p>Images</p>
            </div>
            <div className="w-full p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3">
              <h1 className="text-4xl font-bold">{books ? books.length : 0}</h1>
              <p>Books</p>
            </div>
            <div className="w-full p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3">
              <h1 className="text-4xl font-bold">
                {quotes ? quotes.length : 0}
              </h1>
              <p>Quotes</p>
            </div>
            <div className="w-full p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3">
              <h1 className="text-4xl font-bold">
                {programms ? programms.length : 0}
              </h1>
              <p>Programmes</p>
            </div>
            <div className="w-full p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3">
              <h1 className="text-4xl font-bold">{news ? news.length : 0}</h1>
              <p>News</p>
            </div>
            <div className="w-full p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3">
              <h1 className="text-4xl font-bold">
                {contacts ? contacts.length : 0}
              </h1>
              <p>Contacts</p>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------ secend content is running -------------------  */}
    </div>
  );
}
