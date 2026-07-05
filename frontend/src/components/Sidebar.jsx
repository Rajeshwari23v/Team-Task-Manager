import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white shadow-xl z-50">

      <h1 className="text-2xl font-bold text-center py-6 border-b border-gray-700">
        Team Manager
      </h1>

      <nav className="flex flex-col mt-6">

        <Link to="/dashboard" className="px-6 py-4 hover:bg-blue-600">
          📊 Dashboard
        </Link>

        <Link to="/projects" className="px-6 py-4 hover:bg-blue-600">
          📁 Projects
        </Link>

        <Link to="/tasks" className="px-6 py-4 hover:bg-blue-600">
          ✅ Tasks
        </Link>

        <Link to="/profile" className="px-6 py-4 hover:bg-blue-600">
          👤 Profile
        </Link>

        <Link to="/members" className="px-6 py-4 hover:bg-blue-600">
          👥 Team Members
        </Link>

        <button
          onClick={handleLogout}
          className="text-left px-6 py-4 hover:bg-red-600"
        >
          🚪 Logout
        </button>

      </nav>

    </aside>
  );
}

export default Sidebar;