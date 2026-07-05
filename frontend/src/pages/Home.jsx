import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-5">

          <h1 className="text-3xl font-bold text-white">
            Team Task Manager
          </h1>

          <div className="flex items-center gap-8 text-lg">

            <Link
              to="/"
              className="text-white hover:text-yellow-300 transition"
            >
              Home
            </Link>

            <Link
              to="/login"
              className="text-white hover:text-yellow-300 transition"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Sign Up
            </Link>

          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 text-white">

        <h1 className="text-7xl font-extrabold">
          Organize Your Team
        </h1>

        <h2 className="text-7xl font-extrabold text-yellow-300 mt-2">
          Like Never Before
        </h2>

        <p className="mt-8 text-xl max-w-3xl leading-9">
          Manage projects, assign tasks, collaborate with your team,
          track progress, and complete projects faster using one
          beautiful dashboard.
        </p>

        <div className="mt-10 flex gap-6">

          <Link
            to="/signup"
            className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-xl hover:scale-105 transition"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="border-2 border-white px-8 py-4 rounded-xl text-xl hover:bg-white hover:text-blue-700 transition"
          >
            Login
          </Link>

        </div>

      </section>

      {/* Features Section */}
      <section className="bg-white py-20">

        <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">
          Why Choose Team Task Manager?
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-8">

          <div className="bg-gray-100 rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition">

            <div className="text-6xl mb-4">📁</div>

            <h3 className="text-2xl font-bold mb-4">
              Project Management
            </h3>

            <p className="text-gray-600">
              Organize multiple projects and monitor their progress with ease.
            </p>

          </div>

          <div className="bg-gray-100 rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition">

            <div className="text-6xl mb-4">✅</div>

            <h3 className="text-2xl font-bold mb-4">
              Task Tracking
            </h3>

            <p className="text-gray-600">
              Assign tasks, set priorities and complete work on time.
            </p>

          </div>

          <div className="bg-gray-100 rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition">

            <div className="text-6xl mb-4">👥</div>

            <h3 className="text-2xl font-bold mb-4">
              Team Collaboration
            </h3>

            <p className="text-gray-600">
              Work together with your team from one centralized dashboard.
            </p>

          </div>

        </div>

      </section>

      {/* Statistics */}
      <section className="bg-blue-900 text-white py-20">

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h2 className="text-5xl font-bold">100+</h2>
            <p className="mt-3">Projects</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">500+</h2>
            <p className="mt-3">Tasks</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">50+</h2>
            <p className="mt-3">Teams</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">99%</h2>
            <p className="mt-3">Success Rate</p>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">

        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold">
            Team Task Manager
          </h2>

          <p className="mt-4 text-gray-400">
            Manage Projects • Assign Tasks • Collaborate Better
          </p>

          <hr className="my-6 border-gray-700" />

          <p className="text-gray-500">
            © 2026 Team Task Manager. All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Home;