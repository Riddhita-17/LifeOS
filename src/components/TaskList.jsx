function TaskList() {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-md border border-pink-100">

      <h2 className="text-2xl font-bold mb-6">
        Today's Tasks
      </h2>

      <div className="space-y-4">

        <label className="flex gap-3">

          <input type="checkbox"/>

          Finish DBMS Assignment

        </label>

        <label className="flex gap-3">

          <input type="checkbox"/>

          Revise DAA

        </label>

        <label className="flex gap-3">

          <input type="checkbox"/>

          Upload Notes

        </label>

      </div>

    </div>
  );
}

export default TaskList;