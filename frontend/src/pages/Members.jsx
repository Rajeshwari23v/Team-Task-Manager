import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

function Members() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getMembers();
  }, []);

  const getMembers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users");
      setMembers(response.data);
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
          Team Members
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-6 max-w-6xl overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="p-4 border">Name</th>
                <th className="p-4 border">Email</th>
                <th className="p-4 border">Role</th>
              </tr>
            </thead>

            <tbody>
              {members.length > 0 ? (
                members.map((member) => (
                  <tr
                    key={member._id}
                    className="text-center hover:bg-gray-100 border-b"
                  >
                    <td className="p-4">{member.name}</td>
                    <td className="p-4">{member.email}</td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        {member.role}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="text-center p-6 text-gray-500"
                  >
                    No Team Members Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Members;