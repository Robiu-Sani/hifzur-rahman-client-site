import Allusers from "./Allusers";
import ContactMessages from "./ContactMessages";
import HomeContant from "./HomeContant";

export default function DeshboardHome() {
  return (
    <div className="w-full">
      <div className="w-full border-b border-gray-400 p-1">
        <h3>Deshboard Management</h3>
      </div>
      {/* tab contant start grom here  */}
      <div className="w-full p-2">
        <div
          role="tablist"
          className="tabs w-full h-full rounded-md border border-gray-400 tabs-bordered"
        >
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab !min-w-[100px]"
            aria-label="Home"
            defaultChecked
          />
          <div
            role="tabpanel"
            className="tab-content border-t border-gray-400 border-x-0 p-2  overflow-y-auto border-b-0"
          >
            <HomeContant></HomeContant>
          </div>
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab !min-w-[100px]"
            aria-label="Messages"
          />
          <div
            role="tabpanel"
            className="tab-content border-t border-gray-400 p-2  border-x-0 overflow-y-auto border-b-0"
          >
            <ContactMessages></ContactMessages>
          </div>
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab !min-w-[100px]"
            aria-label="Users"
          />
          <div
            role="tabpanel"
            className="tab-content border-t border-gray-400 p-2  border-x-0 overflow-y-auto border-b-0"
          >
            <Allusers></Allusers>
          </div>
        </div>
      </div>
    </div>
  );
}
