import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      alert("Login Successful!");

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 flex items-center justify-center">

      <div className="bg-white p-10 rounded-2xl shadow-2xl w-[400px]">

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Login
        </h1>

        <form onSubmit={loginUser}>

          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-6">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-700 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>

        <div className="text-center mt-4">
          <Link
            to="/"
            className="text-gray-600 hover:text-blue-700"
          >
            ← Back to Home
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Login;