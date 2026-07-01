import {
  LayoutDashboard,
  BookOpen,
  CalendarDays,
  Wallet,
  Sparkles,
  User,
  LogOut,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const username =
    localStorage.getItem("username") || "Riddhita";

  const initial = username.charAt(0).toUpperCase();

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      name: "Study",
      icon: BookOpen,
      path: "/study",
    },
    {
      name: "Planner",
      icon: CalendarDays,
      path: "/planner",
    },
    {
      name: "Budget",
      icon: Wallet,
      path: "/budget",
    },
    {
      name: "LifeAI",
      icon: Sparkles,
      path: "/lifeai",
    },
    {
      name: "Profile",
      icon: User,
      path: "/profile",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    navigate("/login");
  };

  return (
    <aside className="w-72 h-screen sticky top-0 bg-white border-r border-pink-100 flex flex-col justify-between shadow-lg">

      {/* Logo */}

      <div>

        <div className="p-6 border-b border-pink-100">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-3xl bg-gradient-to-r from-pink-500 to-rose-400 flex items-center justify-center text-white text-2xl shadow-lg">

              ✨

            </div>

            <div>

              <h1 className="text-2xl font-bold text-pink-600">
                LifeOS
              </h1>

              <p className="text-sm text-gray-500">
                AI Productivity Platform
              </p>

            </div>

          </div>

        </div>

        {/* Navigation */}

        <nav className="p-5 space-y-2">

          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-lg scale-[1.02]"
                    : "text-gray-700 hover:bg-pink-50 hover:text-pink-500 hover:translate-x-1"
                }`
              }
            >
              <item.icon size={22} />

              <span className="font-semibold">
                {item.name}
              </span>

            </NavLink>
          ))}

        </nav>

      </div>

      {/* Bottom */}

      <div className="p-5 border-t border-pink-100">

        {/* User */}

        <div className="flex items-center gap-3 mb-5">

          <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold text-lg">

            {initial}

          </div>

          <div>

            <h3 className="font-semibold">
              {username}
            </h3>

            <p className="text-sm text-gray-500">
              AIML Student
            </p>

          </div>

        </div>

        {/* Logout */}

        <button
          onClick={handleLogout}
          className="flex items-center gap-4 w-full px-5 py-4 rounded-2xl text-gray-700 hover:bg-red-50 hover:text-red-500 transition"
        >

          <LogOut size={22} />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;