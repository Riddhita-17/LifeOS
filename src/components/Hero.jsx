import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Sparkles,
  Wallet,
} from "lucide-react";

function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-[#FFF7FB] via-[#FCE7F3] to-[#FFF7FB] pt-28 pb-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-6 lg:px-8 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-5 py-2 rounded-full font-medium">
            <Sparkles size={18} />
            AI Powered Productivity
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-8 leading-tight text-gray-900">
            AI that
            <span className="text-pink-500"> Organizes </span>
            Your Entire Life.
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">
            Study smarter, spend wisely and plan effortlessly.
            LifeOS brings everything together into one intelligent dashboard.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-2xl shadow-lg flex items-center gap-2 transition">
              ✨ Try LifeOS
              <ArrowRight size={18} />
            </button>

            <button className="border border-pink-300 bg-white hover:bg-pink-50 px-8 py-4 rounded-2xl transition">
              Watch Demo
            </button>

          </div>

          <div className="flex gap-10 mt-14">

            <div>
              <h2 className="text-3xl font-bold text-pink-500">10K+</h2>
              <p className="text-gray-500">Tasks Managed</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-pink-500">98%</h2>
              <p className="text-gray-500">AI Accuracy</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-pink-500">24/7</h2>
              <p className="text-gray-500">AI Support</p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white/90 backdrop-blur-lg rounded-[35px] border border-pink-100 shadow-2xl p-8">

            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-xl font-bold">
                  Good Evening 🌸
                </h2>

                <p className="text-gray-500">
                  Welcome back, Riddhita
                </p>
              </div>

              <div className="bg-pink-100 p-3 rounded-2xl">
                <Sparkles className="text-pink-500" />
              </div>
            </div>

            {/* AI Brief */}

            <div className="bg-pink-50 rounded-3xl p-5 border border-pink-100">

              <h3 className="font-semibold text-pink-600">
                AI Daily Brief
              </h3>

              <p className="text-gray-600 mt-3">
                📚 Complete DBMS Assignment
              </p>

              <p className="text-gray-600">
                💰 ₹850 Remaining This Week
              </p>

              <p className="text-gray-600">
                📅 Interview Tomorrow at 11:00 AM
              </p>

            </div>

            <div className="grid grid-cols-2 gap-5 mt-6">

              <div className="bg-pink-50 rounded-2xl p-5">
                <BookOpen className="text-pink-500 mb-3" />
                <h4 className="font-semibold">Study</h4>
                <p className="text-sm text-gray-500">
                  82% Progress
                </p>
              </div>

              <div className="bg-pink-50 rounded-2xl p-5">
                <Wallet className="text-pink-500 mb-3" />
                <h4 className="font-semibold">Budget</h4>
                <p className="text-sm text-gray-500">
                  ₹850 Left
                </p>
              </div>

              <div className="bg-pink-50 rounded-2xl p-5">
                <CalendarDays className="text-pink-500 mb-3" />
                <h4 className="font-semibold">Planner</h4>
                <p className="text-sm text-gray-500">
                  3 Tasks Today
                </p>
              </div>

              <div className="bg-pink-50 rounded-2xl p-5">
                <Sparkles className="text-pink-500 mb-3" />
                <h4 className="font-semibold">LifeAI</h4>
                <p className="text-sm text-gray-500">
                  Ready to Help
                </p>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;