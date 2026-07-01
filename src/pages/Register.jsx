import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/auth";

import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
} from "lucide-react";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {

      setLoading(true);

      const data = await registerUser({
        name,
        email,
        password,
      });

      alert(data.message);

      navigate("/login");

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 flex items-center justify-center px-6">

      <div className="grid lg:grid-cols-2 max-w-6xl w-full bg-white rounded-[40px] shadow-2xl overflow-hidden">

        {/* Left */}

        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-pink-500 to-rose-400 text-white p-16">

          <div className="flex items-center gap-3 mb-10">

            <Sparkles size={36} />

            <h1 className="text-4xl font-bold">
              LifeOS
            </h1>

          </div>

          <h2 className="text-5xl font-bold">
            Join LifeOS 🚀
          </h2>

          <p className="mt-6 text-lg opacity-90 leading-8">

            Start your AI-powered productivity journey today.

          </p>

          <div className="mt-12 space-y-5 text-lg">

            <p>📚 AI Study Assistant</p>

            <p>📅 Smart Planner</p>

            <p>💰 Budget Tracker</p>

            <p>🤖 LifeAI Chat</p>

          </div>

        </div>

        {/* Right */}

        <div className="p-12 flex flex-col justify-center">

          <Link
            to="/"
            className="text-pink-500 hover:underline mb-8"
          >
            ← Back to Home
          </Link>

          <h2 className="text-4xl font-bold">

            Create Account

          </h2>

          <p className="text-gray-500 mt-2">

            Register to continue

          </p>

          <div className="mt-10 space-y-6">

            {/* Name */}

            <div className="relative">

              <User
                className="absolute left-4 top-4 text-pink-400"
                size={20}
              />

              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-pink-200 outline-none focus:ring-2 focus:ring-pink-400"
              />

            </div>

            {/* Email */}

            <div className="relative">

              <Mail
                className="absolute left-4 top-4 text-pink-400"
                size={20}
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
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
                type={showPassword ? "text":"password"}
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="w-full pl-12 pr-12 py-4 rounded-2xl border border-pink-200 outline-none focus:ring-2 focus:ring-pink-400"
              />

            </div>

            {/* Confirm Password */}

            <div className="relative">

              <Lock
                className="absolute left-4 top-4 text-pink-400"
                size={20}
              />

              <input
                type={showPassword ? "text":"password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                className="w-full pl-12 pr-12 py-4 rounded-2xl border border-pink-200 outline-none focus:ring-2 focus:ring-pink-400"
              />

              <button
                type="button"
                onClick={()=>setShowPassword(!showPassword)}
                className="absolute right-4 top-4"
              >

                {showPassword ? (
                  <EyeOff size={20}/>
                ) : (
                  <Eye size={20}/>
                )}

              </button>

            </div>

            <button
              onClick={handleRegister}
              disabled={loading}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-2xl flex justify-center items-center gap-2"
            >

              {loading ? "Creating..." : "Create Account"}

              <ArrowRight size={18}/>

            </button>

          </div>

          <p className="text-center mt-8 text-gray-500">

            Already have an account?

            <Link
              to="/login"
              className="text-pink-500 font-semibold ml-2 hover:underline"
            >

              Login

            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;