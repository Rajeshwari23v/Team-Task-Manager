import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

function Dashboard() {

  const [projectCount, setProjectCount] = useState(0);
  const [taskCount, setTaskCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [teamCount, setTeamCount] = useState(0);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {

      const projects = await axios.get("http://localhost:5000/api/projects");
      const tasks = await axios.get("http://localhost:5000/api/tasks");
      const users = await axios.get("http://localhost:5000/api/users");

      setProjectCount(projects.data.length);
      setTaskCount(tasks.data.length);

      setCompletedCount(
        tasks.data.filter(
          (task) => task.status === "Completed"
        ).length
      );

      setTeamCount(users.data.length);

    } catch (err) {
      console.log(err);
    }
  };

  return (

    <>

      <Sidebar />

      <div
        style={{
          marginLeft: "256px",
          padding: "30px",
          minHeight: "100vh",
          background: "#f3f4f6",
        }}
      >

        <h1 className="text-4xl font-bold text-blue-700 mb-8">
          Team Task Manager Dashboard
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h2>Projects</h2>
            <p className="text-5xl font-bold text-blue-700">
              {projectCount}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2>Tasks</h2>
            <p className="text-5xl font-bold text-green-600">
              {taskCount}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2>Completed</h2>
            <p className="text-5xl font-bold text-purple-600">
              {completedCount}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2>Team Members</h2>
            <p className="text-5xl font-bold text-orange-600">
              {teamCount}
            </p>
          </div>

        </div>

      </div>

    </>

  );
}

export default Dashboard;