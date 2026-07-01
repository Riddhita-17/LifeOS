import { useState } from "react";

function ExpenseForm({ addExpense }) {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = () => {

    if (!title || !amount) return;

    addExpense({
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
    });

    setTitle("");
    setAmount("");
    setCategory("Food");
  };

  return (

    <div className="bg-white rounded-3xl p-8 shadow-md border border-pink-100">

      <h2 className="text-2xl font-bold mb-6">
        Add Expense
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Expense Name"
          className="border border-pink-200 rounded-xl px-4 py-3 outline-none"
        />

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="border border-pink-200 rounded-xl px-4 py-3 outline-none"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-pink-200 rounded-xl px-4 py-3 outline-none"
        >
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Education</option>
          <option>Entertainment</option>
        </select>

      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl transition"
      >
        Add Expense
      </button>

    </div>

  );
}

export default ExpenseForm;