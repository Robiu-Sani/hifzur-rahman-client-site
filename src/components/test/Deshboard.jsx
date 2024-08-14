import { useState } from "react";
import { FiMenu, FiHome, FiUser, FiSettings, FiLogOut } from "react-icons/fi";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-16"
        } bg-blue-900 text-white transition-all duration-300 flex flex-col`}
      >
        <div className="p-4 flex justify-center items-center">
          <div className="text-2xl font-semibold text-center">
            {sidebarOpen ? "Dashboard" : "D"}
          </div>
          <button
            className="ml-auto text-white md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FiMenu />
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a
            href="#"
            className="flex items-center p-2 rounded hover:bg-blue-700"
          >
            <FiHome className="mr-3" /> {sidebarOpen && "Home"}
          </a>
          <a
            href="#"
            className="flex items-center p-2 rounded hover:bg-blue-700"
          >
            <FiUser className="mr-3" /> {sidebarOpen && "Profile"}
          </a>
          <a
            href="#"
            className="flex items-center p-2 rounded hover:bg-blue-700"
          >
            <FiSettings className="mr-3" /> {sidebarOpen && "Settings"}
          </a>
          <a
            href="#"
            className="flex items-center p-2 rounded hover:bg-blue-700"
          >
            <FiLogOut className="mr-3" /> {sidebarOpen && "Logout"}
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <button
            className="text-gray-600 md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FiMenu />
          </button>
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Support
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Notifications
            </a>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white shadow p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Analytics</h2>
            <p>View detailed analytics data...</p>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Reports</h2>
            <p>Generate and view various reports...</p>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">User Management</h2>
            <p>Manage users and permissions...</p>
          </div>
          {/* Add more sections as needed */}
        </main>

        {/* Footer */}
        <footer className="bg-white shadow p-4 text-center">
          &copy; 2024 Dashboard. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
