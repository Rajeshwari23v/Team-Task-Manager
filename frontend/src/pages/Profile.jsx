import Sidebar from "../components/Sidebar";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Sidebar />

      <div
        style={{
          marginLeft: "260px",
          padding: "30px",
          minHeight: "100vh",
          backgroundColor: "#f3f4f6",
        }}
      >
        <h1 className="text-4xl font-bold text-blue-700 mb-8">
          My Profile
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl">

          <div className="flex justify-center mb-6">
            <div className="w-28 h-28 rounded-full bg-blue-700 flex items-center justify-center text-white text-5xl font-bold">
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </div>
          </div>

          <div className="space-y-6">

            <div>
              <label className="font-bold text-gray-700">
                Name
              </label>

              <p className="border rounded-lg p-3 mt-2 bg-gray-50">
                {user?.name || "Not Available"}
              </p>
            </div>

            <div>
              <label className="font-bold text-gray-700">
                Email
              </label>

              <p className="border rounded-lg p-3 mt-2 bg-gray-50">
                {user?.email || "Not Available"}
              </p>
            </div>

            <div>
              <label className="font-bold text-gray-700">
                Role
              </label>

              <p className="border rounded-lg p-3 mt-2 bg-gray-50">
                {user?.role || "Member"}
              </p>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Profile;