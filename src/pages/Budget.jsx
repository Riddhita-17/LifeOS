import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

import BudgetCard from "../components/budget/BudgetCard";
import ExpenseForm from "../components/budget/ExpenseForm";
import ExpenseList from "../components/budget/ExpenseList";
import BudgetProgress from "../components/budget/BudgetProgress";

import {
  Wallet,
  TrendingDown,
  PiggyBank,
} from "lucide-react";

function Budget() {

  const MONTHLY_BUDGET = 5000;

  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("lifeos_expenses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "lifeos_expenses",
      JSON.stringify(expenses)
    );
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const removeExpense = (id) => {
    setExpenses((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const totalSpent = expenses.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const remaining = MONTHLY_BUDGET - totalSpent;

  return (
    <div className="flex bg-[#FFF7FB] min-h-screen">

      <Sidebar />

      <main className="flex-1 p-10 overflow-y-auto">

        {/* Header */}

        <div>

          <h1 className="text-4xl font-bold text-gray-800">
            💰 Smart Budget Tracker
          </h1>

          <p className="text-gray-500 mt-2">
            Track your expenses and manage your monthly budget.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <BudgetCard
            title="Monthly Budget"
            value={`₹${MONTHLY_BUDGET}`}
            icon={<Wallet />}
            color="bg-pink-500"
          />

          <BudgetCard
            title="Total Spent"
            value={`₹${totalSpent}`}
            icon={<TrendingDown />}
            color="bg-rose-500"
          />

          <BudgetCard
            title="Remaining"
            value={`₹${remaining}`}
            icon={<PiggyBank />}
            color="bg-fuchsia-500"
          />

        </div>

        {/* Form */}

        <div className="mt-10">

          <ExpenseForm
            addExpense={addExpense}
          />

        </div>

        {/* Progress */}

        <div className="mt-10">

          <BudgetProgress
            spent={totalSpent}
            budget={MONTHLY_BUDGET}
          />

        </div>

        {/* Expense List */}

        <div className="mt-10">

          <ExpenseList
            expenses={expenses}
            removeExpense={removeExpense}
          />

        </div>

      </main>

    </div>
  );
}

export default Budget;