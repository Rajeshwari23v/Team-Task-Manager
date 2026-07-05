import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  const [taskName, setTaskName] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("Pending");
  const user = JSON.parse(localStorage.getItem("user"));
  const [editingId, setEditingId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/tasks");
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTask = async () => {
    try {
      await axios.post("http://localhost:5000/api/tasks", {
        taskName,
        assignedTo,
        priority,
        status,
      });

      setTaskName("");
      setAssignedTo("");
      setPriority("Medium");
      setStatus("Pending");

      getTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    if (!window.confirm("Delete this task?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      getTasks();
    } catch (error) {
      console.log(error);
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
          Task Management
        </h1>

        {/* Form */}
        {user?.role === "Admin" && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 max-w-5xl">
          <h2 className="text-2xl font-bold mb-6">
            Add New Task
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Task Name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="border rounded-lg p-3"
            />

            <input
              type="text"
              placeholder="Assigned To"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              className="border rounded-lg p-3"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="border rounded-lg p-3"
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border rounded-lg p-3"
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>

          <button
            onClick={addTask}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            Add Task
          </button>
        </div>
        )}
        

        {/* Task Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-bold text-blue-700 mb-4">
                {task.taskName}
              </h2>

              <p className="mb-2">
                <strong>Assigned To:</strong> {task.assignedTo}
              </p>

              <p className="mb-2">
                <strong>Priority:</strong>{" "}
                <span
                  className={`px-2 py-1 rounded-full text-white text-sm ${
                    task.priority === "High"
                      ? "bg-red-500"
                      : task.priority === "Medium"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                >
                  {task.priority}
                </span>
              </p>

              <p className="mb-5">
                <strong>Status:</strong>{" "}
                <span
                  className={`px-2 py-1 rounded-full text-white text-sm ${
                    task.status === "Completed"
                      ? "bg-green-600"
                      : task.status === "In Progress"
                      ? "bg-blue-500"
                      : "bg-gray-500"
                  }`}
                >
                  {task.status}
                </span>
              </p>

              {user?.role === "Admin" && (
              <button
                 onClick={() => deleteTask(task._id)}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg">
                  Delete
              </button>
            )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tasks;