import { Bell, Search, UserCircle2 } from "lucide-react";

function Header() {
  return (
    <div className="flex justify-between items-center mb-10">

      <div className="relative">

        <Search
          className="absolute left-4 top-4 text-gray-400"
          size={18}
        />

        <input
          placeholder="Search..."
          className="pl-12 py-3 pr-5 rounded-2xl bg-white border border-pink-100 w-80 outline-none"
        />

      </div>

      <div className="flex items-center gap-6">

        <Bell className="text-pink-500 cursor-pointer"/>

        <UserCircle2
          size={40}
          className="text-pink-500 cursor-pointer"
        />

      </div>

    </div>
  );
}

export default Header;