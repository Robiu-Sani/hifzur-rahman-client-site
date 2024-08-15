import ManageBlogCard from "../ShireDeshboardComponent/ManageBlogCard";
import CreateBlogPost from "./CreateBlogPost";

export default function ManageBlogs() {
  return (
    <div className="w-full">
      <div className="w-full border-b border-gray-400 p-1">
        <h3>Blog Management Page</h3>
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
            className="tab !min-w-[150px]"
            aria-label="Create Blogs Post"
          />
          <div
            role="tabpanel"
            className="tab-content border-t border-gray-400 p-2  border-x-0 overflow-y-auto border-b-0"
          >
            <CreateBlogPost></CreateBlogPost>
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab !min-w-[150px]"
            aria-label="Manage Blogs Post"
            defaultChecked
          />
          <div
            role="tabpanel"
            className="tab-content border-t border-gray-400 border-x-0 p-2  overflow-y-auto border-b-0"
          >
            <div
              className="w-full grid gap-5"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              }}
            >
              <ManageBlogCard></ManageBlogCard>
              <ManageBlogCard></ManageBlogCard>
              <ManageBlogCard></ManageBlogCard>
              <ManageBlogCard></ManageBlogCard>
              <ManageBlogCard></ManageBlogCard>
              <ManageBlogCard></ManageBlogCard>
              <ManageBlogCard></ManageBlogCard>
              <ManageBlogCard></ManageBlogCard>
              <ManageBlogCard></ManageBlogCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
