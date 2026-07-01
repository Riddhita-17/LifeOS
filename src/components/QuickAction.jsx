function QuickAction({ title }) {
  return (
    <button className="bg-pink-500 hover:bg-pink-600 text-white rounded-2xl px-6 py-4 shadow-lg transition">
      {title}
    </button>
  );
}

export default QuickAction;