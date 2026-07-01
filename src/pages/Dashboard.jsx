import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import QuickAction from "../components/QuickAction";
import TaskList from "../components/TaskList";
import ProgressCard from "../components/ProgressCard";

import {
  BookOpen,
  Wallet,
  CalendarDays,
  Sparkles,
} from "lucide-react";

function Dashboard() {

  const username =
    localStorage.getItem("username") || "Riddhita";

  const MONTHLY_BUDGET = 5000;

  const [budgetLeft, setBudgetLeft] = useState(MONTHLY_BUDGET);
  const [taskCount, setTaskCount] = useState(0);
  const [pdfCount, setPdfCount] = useState(0);

  useEffect(() => {

    // Budget
    const expenses =
      JSON.parse(localStorage.getItem("lifeos_expenses")) || [];

    const spent = expenses.reduce(
      (sum, item) => sum + Number(item.amount),
      0
    );

    setBudgetLeft(Math.max(MONTHLY_BUDGET - spent, 0));

    // Planner
    const tasks =
      JSON.parse(localStorage.getItem("lifeos_tasks")) || [];

    setTaskCount(tasks.length);

    // PDFs
    const pdfs =
      JSON.parse(localStorage.getItem("lifeos_pdfs")) || [];

    setPdfCount(pdfs.length);

  }, []);

  return (
    <div className="flex bg-[#FFF7FB]">

      <Sidebar />

      <main className="flex-1 min-h-screen p-8 overflow-y-auto">

        <Header />

        {/* Welcome */}

        <div className="mb-10">

          <h1 className="text-4xl font-bold text-gray-800">

            Good Evening, {username} 🌸

          </h1>

          <p className="text-gray-500 mt-2">

            Welcome back! Let's make today productive.

          </p>

        </div>

        {/* Statistics */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          <StatCard
            title="Study"
            value={pdfCount}
            subtitle="PDFs Uploaded"
            icon={BookOpen}
            color="bg-pink-500"
          />

          <StatCard
            title="Budget"
            value={`₹${budgetLeft}`}
            subtitle="Remaining Budget"
            icon={Wallet}
            color="bg-rose-500"
          />

          <StatCard
            title="Planner"
            value={taskCount}
            subtitle="Active Tasks"
            icon={CalendarDays}
            color="bg-fuchsia-500"
          />

          <StatCard
            title="LifeAI"
            value="Online"
            subtitle="AI Assistant Ready"
            icon={Sparkles}
            color="bg-purple-500"
          />

        </div>

        {/* AI Brief + Quick Actions */}

        <div className="grid lg:grid-cols-2 gap-6 mt-10">

          {/* AI Brief */}

          <div className="bg-white rounded-3xl p-8 shadow-md border border-pink-100">

            <h2 className="text-2xl font-bold text-pink-500 mb-6">

              🤖 AI Daily Brief

            </h2>

            <ul className="space-y-4 text-gray-600">

              <li>📚 Complete your pending study session.</li>

              <li>📅 Review today's planner tasks.</li>

              <li>💰 Track today's expenses.</li>

              <li>🤖 Ask LifeAI if you need study help.</li>

            </ul>

          </div>

          {/* Quick Actions */}

          <div className="bg-white rounded-3xl p-8 shadow-md border border-pink-100">

            <h2 className="text-2xl font-bold mb-6">

              ⚡ Quick Actions

            </h2>

            <div className="grid grid-cols-2 gap-4">

              <QuickAction title="📄 Upload Notes" />

              <QuickAction title="💰 Add Expense" />

              <QuickAction title="📅 Plan My Day" />

              <QuickAction title="🤖 Ask LifeAI" />

            </div>

          </div>

        </div>

        {/* Tasks + Progress */}

        <div className="grid lg:grid-cols-2 gap-6 mt-10">

          <TaskList />

          <ProgressCard />

        </div>

      </main>

    </div>
  );
}

export default Dashboard;