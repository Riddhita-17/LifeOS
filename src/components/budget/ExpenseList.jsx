import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, removeExpense }) {

  return (

    <div className="bg-white rounded-3xl p-8 shadow-md border border-pink-100">

      <h2 className="text-2xl font-bold mb-6">
        Expense History
      </h2>

      <div className="space-y-4">

        {expenses.length === 0 ? (

          <p className="text-gray-400">
            No expenses added yet.
          </p>

        ) : (

          expenses.map((expense) => (

            <ExpenseItem
              key={expense.id}
              expense={expense}
              removeExpense={removeExpense}
            />

          ))

        )}

      </div>

    </div>

  );
}

export default ExpenseList;