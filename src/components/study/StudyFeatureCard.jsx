function StudyFeatureCard({
  icon: Icon,
  title,
  desc,
  onClick,
}) {
  return (
    <div className="bg-white rounded-3xl shadow-md border border-pink-100 p-8 hover:shadow-xl hover:-translate-y-2 transition">

      <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-500">

        <Icon size={34} />

      </div>

      <h2 className="text-xl font-bold mt-6">
        {title}
      </h2>

      <p className="text-gray-500 mt-3">
        {desc}
      </p>

      <button
        onClick={onClick}
        className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl"
      >
        Generate
      </button>

    </div>
  );
}

export default StudyFeatureCard;