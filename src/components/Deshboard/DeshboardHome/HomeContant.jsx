import { MdDelete } from "react-icons/md";
import AddNoteForm from "./AddNoteForm";

export default function HomeContant() {
  return (
    <div className="w-full mt-3">
      <div className="w-full grid grid-cols-1 gap-5 sm:grid-cols-5">
        <div className="w-full col-span-1 p-2 rounded-md border border-[#a6c4c2] sm:col-span-3">
          <h3>Total Informetion</h3>
          <div className="w-full grid grid-cols-4 mt-3 gap-3">
            <div className="w-full p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3">
              <h1 className="text-4xl font-bold">0</h1>
              <p>Videos</p>
            </div>
            <div className="w-full p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3">
              <h1 className="text-4xl font-bold">0</h1>
              <p>Videos</p>
            </div>
            <div className="w-full p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3">
              <h1 className="text-4xl font-bold">0</h1>
              <p>Videos</p>
            </div>
            <div className="w-full p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3">
              <h1 className="text-4xl font-bold">0</h1>
              <p>Videos</p>
            </div>
          </div>
        </div>
        <div className="w-full col-span-1 p-2 rounded-md border border-[#a6c4c2] sm:col-span-2">
          <h3>Sub Informetion</h3>
          <div className="w-full grid grid-cols-3 mt-3 gap-3">
            <div className="w-full p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3">
              <h1 className="text-4xl font-bold">0</h1>
              <p>Users</p>
            </div>
            <div className="w-full p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3">
              <h1 className="text-4xl font-bold">0</h1>
              <p>Admin</p>
            </div>
            <div className="w-full p-3 rounded-md shadow-md flex flex-col justify-center items-center gap-3">
              <h1 className="text-4xl font-bold">0</h1>
              <p>Messages</p>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------ secend content is running -------------------  */}
      <div className="w-full my-3">
        <h3 className="text-2xl font-bold p-3">Note</h3>

        <div className="w-full grid  grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="w-full border rounded-md border-[#a6c4c2] p-2 flex flex-col gap-2 h-[360px] overflow-y-auto">
            {/* --------- notes -----------  */}
            <div className="w-full p-2 shadow-md  rounded ">
              <small className="text-green-600"> 5:10pm</small>
              <div className="w-full flex justify-between items-end">
                <p className="text-sm text-gray-700">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, fugit.
                </p>
                <MdDelete className="ml-3 text-red-600 cursor-pointer" />
              </div>
            </div>
            <div className="w-full p-2 shadow-md  rounded ">
              <small className="text-green-600"> 5:10pm</small>
              <div className="w-full flex justify-between items-end">
                <p className="text-sm text-gray-700">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, fugit.
                </p>
                <MdDelete className="ml-3 text-red-600 cursor-pointer" />
              </div>
            </div>
            <div className="w-full p-2 shadow-md  rounded ">
              <small className="text-green-600"> 5:10pm</small>
              <div className="w-full flex justify-between items-end">
                <p className="text-sm text-gray-700">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, fugit.
                </p>
                <MdDelete className="ml-3 text-red-600 cursor-pointer" />
              </div>
            </div>
            <div className="w-full p-2 shadow-md  rounded ">
              <small className="text-green-600"> 5:10pm</small>
              <div className="w-full flex justify-between items-end">
                <p className="text-sm text-gray-700">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, fugit.
                </p>
                <MdDelete className="ml-3 text-red-600 cursor-pointer" />
              </div>
            </div>
            <div className="w-full p-2 shadow-md  rounded ">
              <small className="text-green-600"> 5:10pm</small>
              <div className="w-full flex justify-between items-end">
                <p className="text-sm text-gray-700">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, fugit.
                </p>
                <MdDelete className="ml-3 text-red-600 cursor-pointer" />
              </div>
            </div>
            <div className="w-full p-2 shadow-md  rounded ">
              <small className="text-green-600"> 5:10pm</small>
              <div className="w-full flex justify-between items-end">
                <p className="text-sm text-gray-700">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, fugit.
                </p>
                <MdDelete className="ml-3 text-red-600 cursor-pointer" />
              </div>
            </div>
          </div>
          {/* ----------- note form  ----------------- */}
          <div className="w-full border rounded-md border-[#a6c4c2] p-2 flex flex-col gap-2 h-[360px] overflow-y-auto">
            {/* --------- notes -----------  */}
            <AddNoteForm></AddNoteForm>
          </div>
        </div>
      </div>
    </div>
  );
}
