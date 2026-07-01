function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white rounded-3xl p-8 border border-pink-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

      <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center mb-5">
        <Icon className="text-pink-500" size={28} />
      </div>

      <h3 className="text-2xl font-bold mb-3">
        {title}
      </h3>

      <p className="text-gray-500">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;