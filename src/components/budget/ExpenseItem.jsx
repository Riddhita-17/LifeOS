import { Trash2 } from "lucide-react";

function ExpenseItem({ expense, removeExpense }) {

  return (

    <div className="flex justify-between items-center bg-pink-50 rounded-2xl p-5">

      <div>

        <h3 className="font-bold">
          {expense.title}
        </h3>

        <p className="text-gray-500 text-sm">
          {expense.category}
        </p>

      </div>

      <div className="flex items-center gap-5">

        <span className="font-bold text-pink-600">
          ₹{expense.amount}
        </span>

        <button onClick={() => removeExpense(expense.id)}>
          <Trash2 className="text-red-500" />
        </button>

      </div>

    </div>

  );
}

export default ExpenseItem;