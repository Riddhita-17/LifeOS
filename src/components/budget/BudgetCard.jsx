function BudgetCard({ title, value, icon, color }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-md border border-pink-100 hover:shadow-xl transition">

      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white ${color}`}>
        {icon}
      </div>

      <h3 className="text-gray-500 mt-5">{title}</h3>

      <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>

    </div>
  );
}

export default BudgetCard;