import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

function Projects() {
  const [projects, setProjects] = useState([]);

  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [manager, setManager] = useState("");
  const [status, setStatus] = useState("Pending");

  const [editingId, setEditingId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/projects");
      setProjects(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const clearForm = () => {
    setProjectName("");
    setDescription("");
    setManager("");
    setStatus("Pending");
    setEditingId(null);
    setIsEditing(false);
  };

  const addProject = async () => {
    try {
      await axios.post("http://localhost:5000/api/projects", {
        projectName,
        description,
        manager,
        status,
      });

      clearForm();
      getProjects();
    } catch (err) {
      console.log(err);
    }
  };

  const editProject = (project) => {
    setEditingId(project._id);
    setProjectName(project.projectName);
    setDescription(project.description);
    setManager(project.manager);
    setStatus(project.status);
    setIsEditing(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const updateProject = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/projects/${editingId}`,
        {
          projectName,
          description,
          manager,
          status,
        }
      );

      clearForm();
      getProjects();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProject = async (id) => {
    if (!window.confirm("Delete this project?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/projects/${id}`);
      getProjects();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Sidebar />

      {/* Main Content */}
      <div
        className="p-8"
        style={{
          marginLeft: "256px",
          width: "calc(100vw - 256px)",
        }}
      >
        <h1 className="text-4xl font-bold text-blue-700 mb-8">
          Project Management
        </h1>

        {/* Form */}
        {/* Form */}
        {user?.role === "Admin" && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 max-w-5xl">

          <h2 className="text-2xl font-bold mb-6">
            {isEditing ? "Update Project" : "Add New Project"}
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Project Name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="border rounded-lg p-3"
            />

            <input
              type="text"
              placeholder="Manager"
              value={manager}
              onChange={(e) => setManager(e.target.value)}
              className="border rounded-lg p-3"
            />
          </div>

          <textarea
            placeholder="Description"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded-lg p-3 mt-4"
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border rounded-lg p-3 mt-4"
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>

          <div className="flex gap-4 mt-6">
            <button
              onClick={isEditing ? updateProject : addProject}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              {isEditing ? "Update Project" : "Add Project"}
            </button>

            {isEditing && (
              <button
                onClick={clearForm}
                className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
              >
                Cancel
              </button>
            )}
          </div>
        </div>
        )}
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                {project.projectName}
              </h2>

              <p className="mb-2">
                <strong>Description:</strong> {project.description}
              </p>

              <p className="mb-2">
                <strong>Manager:</strong> {project.manager}
              </p>

              <p className="mb-4">
                <strong>Status:</strong>{" "}
                <span
                  className={`px-2 py-1 rounded-full text-white text-sm ${
                    project.status === "Completed"
                      ? "bg-green-500"
                      : project.status === "In Progress"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                >
                  {project.status}
                </span>
              </p>

            {user?.role === "Admin" && (
  <div className="flex gap-3">
    <button
      onClick={() => editProject(project)}
      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
    >
      Edit
    </button>

    <button
      onClick={() => deleteProject(project._id)}
      className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
    >
      Delete
    </button>
  </div>
)}
            </div>  
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;