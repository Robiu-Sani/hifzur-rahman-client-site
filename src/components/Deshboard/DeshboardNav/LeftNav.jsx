import { FaNewspaper, FaPhotoVideo, FaQuoteLeft } from "react-icons/fa";
import { IoImageSharp } from "react-icons/io5";
import { RiContactsBook3Fill } from "react-icons/ri";
import {
  SiMicrodotblog,
  SiNginxproxymanager,
  SiProgress,
} from "react-icons/si";
import { NavLink } from "react-router-dom";

export default function LeftNav() {
  return (
    <div className="w-full navActive flex flex-col">
      <NavLink
        to={`/deshboard`}
        className={`text-md text-[#cfb56b] border-b border-b-[#cfb46b75]  font-bold py-2 hover:pl-3 w-full  flex items-center gap-3`}
      >
        <SiNginxproxymanager className="text-xl text-[#cfb56b]" />
        Deshboard
      </NavLink>
      <NavLink
        to={`/manageblogs`}
        className={`text-md text-[#cfb56b] border-b border-b-[#cfb46b75]  font-bold py-2 hover:pl-3 w-full  flex items-center gap-3`}
      >
        <SiMicrodotblog className="text-xl text-[#cfb56b]" />
        Manage Blogs
      </NavLink>
      <NavLink
        to={`/manageimages`}
        className={`text-md text-[#cfb56b] border-b border-b-[#cfb46b75]  font-bold py-2 hover:pl-3 w-full  flex items-center gap-3`}
      >
        <IoImageSharp className="text-xl text-[#cfb56b]" />
        Manage Images
      </NavLink>
      <NavLink
        to={`/managevideos`}
        className={`text-md text-[#cfb56b] border-b border-b-[#cfb46b75]  font-bold py-2 hover:pl-3 w-full  flex items-center gap-3`}
      >
        <FaPhotoVideo className="text-xl text-[#cfb56b]" />
        Manage Videos
      </NavLink>
      <NavLink
        to={`/manageprogrammes`}
        className={`text-md text-[#cfb56b] border-b border-b-[#cfb46b75]  font-bold py-2 hover:pl-3 w-full  flex items-center gap-3`}
      >
        <SiProgress className="text-xl text-[#cfb56b]" />
        Manage Programmes
      </NavLink>
      <NavLink
        to={`/managenews`}
        className={`text-md text-[#cfb56b] border-b border-b-[#cfb46b75]  font-bold py-2 hover:pl-3 w-full  flex items-center gap-3`}
      >
        <FaNewspaper className="text-xl text-[#cfb56b]" />
        Manage News
      </NavLink>
      <NavLink
        to={`/managequote`}
        className={`text-md text-[#cfb56b] border-b border-b-[#cfb46b75]  font-bold py-2 hover:pl-3 w-full  flex items-center gap-3`}
      >
        <FaQuoteLeft className="text-xl text-[#cfb56b]" />
        Manage Quote
      </NavLink>
      <NavLink
        to={`/managecontact`}
        className={`text-md text-[#cfb56b] border-b border-b-[#cfb46b75]  font-bold py-2 hover:pl-3 w-full  flex items-center gap-3`}
      >
        <RiContactsBook3Fill className="text-xl text-[#cfb56b]" />
        Manage Contact
      </NavLink>
    </div>
  );
}
