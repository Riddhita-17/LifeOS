import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/auth";

import {
  Mail,
  Lock,
  ArrowRight,
  Eye,
  EyeOff,
  Sparkles,
} from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      const data = await loginUser({
        email,
        password,
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.name);

      alert("Login Successful 🎉");

      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 flex items-center justify-center px-6">

      <div className="grid lg:grid-cols-2 max-w-6xl w-full bg-white rounded-[40px] shadow-2xl overflow-hidden">

        {/* Left Side */}

        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-pink-500 to-rose-400 text-white p-16">

          <div className="flex items-center gap-3 mb-10">
            <Sparkles size={36} />

            <h1 className="text-4xl font-bold">
              LifeOS
            </h1>
          </div>

          <h2 className="text-5xl font-bold leading-tight">
            Welcome Back 🌸
          </h2>

          <p className="mt-6 text-lg leading-8 opacity-90">
            Continue your AI-powered productivity journey and manage your
            studies, planner, budget and AI assistant in one place.
          </p>

          <div className="mt-12 space-y-5 text-lg">
            <p>📚 Smart Study Assistant</p>
            <p>📅 AI Planner</p>
            <p>💰 Budget Tracker</p>
            <p>🤖 LifeAI Chatbot</p>
          </div>

        </div>

        {/* Right Side */}

        <div className="p-12 flex flex-col justify-center">

          <Link
            to="/"
            className="text-pink-500 hover:underline mb-8 font-medium"
          >
            ← Back to Home
          </Link>

          <h2 className="text-4xl font-bold">
            Login
          </h2>

          <p className="text-gray-500 mt-2">
            Continue to your dashboard
          </p>

          <div className="mt-10 space-y-6">

            {/* Email */}

            <div className="relative">

              <Mail
                className="absolute left-4 top-4 text-pink-400"
                size={20}
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-pink-200 outline-none focus:ring-2 focus:ring-pink-400"
              />

            </div>

            {/* Password */}

            <div className="relative">

              <Lock
                className="absolute left-4 top-4 text-pink-400"
                size={20}
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleLogin();
                  }
                }}
                className="w-full pl-12 pr-12 py-4 rounded-2xl border border-pink-200 outline-none focus:ring-2 focus:ring-pink-400"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-4 text-gray-500"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

            {/* Login Button */}

            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-pink-500 hover:bg-pink-600 disabled:bg-pink-300 text-white py-4 rounded-2xl flex justify-center items-center gap-2 transition duration-300 shadow-lg"
            >

              {loading ? "Logging in..." : "Login"}

              <ArrowRight size={18} />

            </button>

            {/* Divider */}

            <div className="flex items-center gap-4">

              <div className="flex-1 h-px bg-gray-200"></div>

              <span className="text-gray-400 text-sm">
                OR
              </span>

              <div className="flex-1 h-px bg-gray-200"></div>

            </div>

            {/* Google Button */}

            <button
              className="w-full border border-pink-200 py-4 rounded-2xl hover:bg-pink-50 transition"
            >
              Continue with Google
            </button>

          </div>

          {/* Register */}

          <p className="text-center mt-8 text-gray-500">

            Don't have an account?

            <Link
              to="/register"
              className="text-pink-500 font-semibold ml-1 hover:underline"
            >
              Sign Up
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;