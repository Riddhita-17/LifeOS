import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";

import {
  Plus,
  Trash2,
  CheckCircle2,
} from "lucide-react";

import {
  getTasks,
  addTask,
  toggleTask,
  deleteTask,
} from "../services/planner";

function Planner() {

  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    loadTasks();

  }, []);

  const loadTasks = async () => {

    try {

      const data = await getTasks();

      setTasks(data);

    } catch (error) {

      console.log(error);

      alert("Unable to load tasks.");

    } finally {

      setLoading(false);

    }

  };

  const handleAddTask = async () => {

    if (!task.trim()) return;

    try {

      await addTask(task);

      setTask("");

      loadTasks();

    } catch (error) {

      console.log(error);

    }

  };

  const handleToggleTask = async (id) => {

    try {

      await toggleTask(id);

      loadTasks();

    } catch (error) {

      console.log(error);

    }

  };

  const handleDeleteTask = async (id) => {

    try {

      await deleteTask(id);

      loadTasks();

    } catch (error) {

      console.log(error);

    }

  };

  const progress =
    tasks.length === 0
      ? 0
      : Math.round(
          (tasks.filter((t) => t.completed).length /
            tasks.length) *
            100
        );

  return (

    <div className="flex bg-[#FFF7FB] min-h-screen">

      <Sidebar />

      <main className="flex-1 p-10">

        <h1 className="text-4xl font-bold text-pink-600">
          📅 Smart Planner
        </h1>

        <p className="text-gray-500 mt-2">
          Stay productive every day.
        </p>

        {/* Add Task */}

        <div className="bg-white mt-8 rounded-3xl shadow-md p-6 flex gap-4">

          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 border border-pink-200 rounded-xl px-4 py-3 outline-none"
          />

          <button
            onClick={handleAddTask}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 rounded-xl flex items-center gap-2"
          >

            <Plus size={18} />

            Add

          </button>

        </div>

        {/* Progress */}

        <div className="bg-white mt-8 rounded-3xl shadow-md p-6">

          <h2 className="font-bold text-xl">

            Progress

          </h2>

          <div className="w-full bg-pink-100 h-4 rounded-full mt-5">

            <div
              className="bg-pink-500 h-4 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />

          </div>

          <p className="mt-3 text-pink-600 font-semibold">

            {progress}% Completed

          </p>

        </div>

        {/* Task List */}

        <div className="bg-white mt-8 rounded-3xl shadow-md p-6">

          <h2 className="font-bold text-2xl mb-6">

            Today's Tasks

          </h2>

          {loading ? (

            <p>Loading...</p>

          ) : tasks.length === 0 ? (

            <p className="text-gray-400">

              No tasks added yet.

            </p>

          ) : (

            tasks.map((item) => (

              <div
                key={item.id}
                className="flex justify-between items-center border-b py-4"
              >

                <div
                  onClick={() => handleToggleTask(item.id)}
                  className="flex items-center gap-3 cursor-pointer"
                >

                  <CheckCircle2
                    className={
                      item.completed
                        ? "text-green-500"
                        : "text-gray-300"
                    }
                  />

                  <span
                    className={
                      item.completed
                        ? "line-through text-gray-400"
                        : ""
                    }
                  >

                    {item.title}

                  </span>

                </div>

                <button
                  onClick={() => handleDeleteTask(item.id)}
                >

                  <Trash2 className="text-red-400" />

                </button>

              </div>

            ))

          )}

        </div>

      </main>

    </div>

  );

}

export default Planner;