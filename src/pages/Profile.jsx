import Sidebar from "../components/Sidebar";
import {
  User,
  Mail,
  GraduationCap,
  Briefcase,
  BookOpen,
  Wallet,
  CalendarDays,
  Sparkles,
  Edit,
  Camera,
} from "lucide-react";

function Profile() {
  return (
    <div className="flex bg-[#FFF7FB] min-h-screen">

      <Sidebar />

      <main className="flex-1 p-10 overflow-y-auto">

        {/* Header */}

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-4xl font-bold text-gray-800">
              👤 My Profile
            </h1>

            <p className="text-gray-500 mt-2">
              Manage your LifeOS profile and productivity overview.
            </p>

          </div>

          <button className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-2xl transition">
            <Edit size={18} />
            Edit Profile
          </button>

        </div>

        {/* Profile Card */}

        <div className="bg-white rounded-3xl shadow-md border border-pink-100 mt-10 p-8 flex flex-col md:flex-row gap-8 items-center">

          <div className="relative">

            <div className="w-40 h-40 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 flex items-center justify-center text-white text-6xl font-bold shadow-lg">
              R
            </div>

            <button className="absolute bottom-2 right-2 bg-white p-3 rounded-full shadow">
              <Camera className="text-pink-500" />
            </button>

          </div>

          <div className="flex-1">

            <h2 className="text-3xl font-bold">
              Riddhita Tingare
            </h2>

            <p className="text-pink-500 font-semibold mt-2">
              AIML Engineering Student
            </p>

            <div className="grid md:grid-cols-2 gap-5 mt-8">

              <Info icon={<Mail />} title="Email" value="riddhita@gmail.com" />

              <Info
                icon={<GraduationCap />}
                title="College"
                value="D. Y. Patil College"
              />

              <Info
                icon={<Briefcase />}
                title="Branch"
                value="Computer Science (AIML)"
              />

              <Info
                icon={<User />}
                title="Location"
                value="Kolhapur, Maharashtra"
              />

            </div>

          </div>

        </div>

        {/* Statistics */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

          <Stat
            icon={<BookOpen />}
            title="Study"
            value="5 PDFs"
            color="bg-pink-500"
          />

          <Stat
            icon={<Wallet />}
            title="Budget Left"
            value="₹4200"
            color="bg-rose-500"
          />

          <Stat
            icon={<CalendarDays />}
            title="Planner"
            value="7 Tasks"
            color="bg-fuchsia-500"
          />

          <Stat
            icon={<Sparkles />}
            title="LifeAI"
            value="24 Chats"
            color="bg-purple-500"
          />

        </div>

        {/* Skills */}

        <div className="bg-white rounded-3xl shadow-md border border-pink-100 mt-10 p-8">

          <h2 className="text-2xl font-bold">
            💻 Skills
          </h2>

          <div className="flex flex-wrap gap-4 mt-6">

            {[
              "Python",
              "React",
              "Flask",
              "Machine Learning",
              "AI",
              "TensorFlow",
              "Java",
              "SQL",
              "Git",
              "Tailwind CSS",
            ].map((skill) => (

              <span
                key={skill}
                className="bg-pink-100 text-pink-600 px-5 py-2 rounded-full font-medium"
              >
                {skill}
              </span>

            ))}

          </div>

        </div>

      </main>

    </div>
  );
}

function Info({ icon, title, value }) {
  return (
    <div className="flex gap-3">

      <div className="text-pink-500">
        {icon}
      </div>

      <div>

        <p className="text-gray-400 text-sm">
          {title}
        </p>

        <p className="font-semibold">
          {value}
        </p>

      </div>

    </div>
  );
}

function Stat({ icon, title, value, color }) {
  return (
    <div className="bg-white rounded-3xl shadow-md border border-pink-100 p-6">

      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white ${color}`}>
        {icon}
      </div>

      <h3 className="text-gray-500 mt-5">
        {title}
      </h3>

      <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>

    </div>
  );
}

export default Profile;