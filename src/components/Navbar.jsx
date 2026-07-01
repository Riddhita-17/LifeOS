import { Menu, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-400 flex items-center justify-center shadow-lg">
            <Sparkles className="text-white" size={22} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-pink-600">
              LifeOS
            </h1>

            <p className="text-xs text-gray-500">
              AI Operating System
            </p>
          </div>

        </Link>

        {/* Desktop Navigation */}

        <div className="hidden lg:flex items-center gap-8 text-gray-600 font-medium">

          <a href="#features" className="hover:text-pink-500 transition">
            Features
          </a>

          <a href="#why" className="hover:text-pink-500 transition">
            Why LifeOS
          </a>

          <a href="#contact" className="hover:text-pink-500 transition">
            Contact
          </a>

        </div>

        {/* Buttons */}

        <div className="hidden lg:flex items-center gap-4">

          <Link to="/login">
            <button className="px-6 py-3 rounded-xl border border-pink-300 text-pink-500 hover:bg-pink-50 transition">
              Login
            </button>
          </Link>

          <Link to="/login">
            <button className="px-6 py-3 rounded-xl bg-pink-500 hover:bg-pink-600 text-white shadow-lg transition">
              Get Started
            </button>
          </Link>

        </div>

        {/* Mobile Menu */}

        <button className="lg:hidden p-2 rounded-xl hover:bg-pink-100 transition">
          <Menu className="text-pink-500" size={28} />
        </button>

      </div>
    </nav>
  );
}

export default Navbar;