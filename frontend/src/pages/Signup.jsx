import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role] = useState("Member");

  const handleSignup = async () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        {
          name,
          email,
          password,
          role,
        }
      );

      alert(response.data.message);

      setName("");
      setEmail("");
      setPassword("");

      navigate("/login");
    } catch (error) {
      alert(
        error.response?.data?.message || "Signup Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 flex items-center justify-center">

      <div className="bg-white p-10 rounded-2xl shadow-2xl w-[400px]">

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4"
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded-lg mb-6"
        />

        <button
          onClick={handleSignup}
          className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700"
        >
          Create Account
        </button>

        <p className="text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-700 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Signup;