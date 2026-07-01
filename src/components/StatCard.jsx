function StatCard({ title, value, subtitle, icon: Icon, color }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-md border border-pink-100 hover:shadow-xl transition">

      <div className="flex justify-between items-center">

        <div>
          <p className="text-gray-500">{title}</p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>

          <p className="text-sm text-gray-400 mt-2">
            {subtitle}
          </p>
        </div>

        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center ${color}`}
        >
          <Icon className="text-white" size={26} />
        </div>

      </div>

    </div>
  );
}

export default StatCard;