function BudgetProgress({ spent, budget }) {

  const percentage = Math.min((spent / budget) * 100, 100);

  return (

    <div className="bg-white rounded-3xl p-8 shadow-md border border-pink-100">

      <h2 className="text-2xl font-bold">
        Budget Usage
      </h2>

      <div className="w-full bg-pink-100 rounded-full h-5 mt-6">

        <div
          className="bg-pink-500 h-5 rounded-full"
          style={{
            width: `${percentage}%`,
          }}
        ></div>

      </div>

      <p className="mt-4 font-semibold text-pink-600">
        {percentage.toFixed(0)}% Used
      </p>

    </div>

  );
}

export default BudgetProgress;