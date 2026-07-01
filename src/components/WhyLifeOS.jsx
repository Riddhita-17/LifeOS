import { Brain, Clock3, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    icon: Brain,
    title: "AI That Understands You",
    text: "LifeOS connects your studies, budget and planner to provide smart personalized suggestions.",
  },
  {
    icon: Clock3,
    title: "Save Time",
    text: "Stop switching between multiple apps. Everything is available in one intelligent dashboard.",
  },
  {
    icon: Sparkles,
    title: "Built for Students",
    text: "Designed especially for college students and young professionals to simplify everyday life.",
  },
];

function WhyLifeOS() {
  return (
    <section id="why" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Why Choose <span className="text-pink-500">LifeOS?</span>
          </h2>

          <p className="text-gray-500 mt-5 text-lg">
            Everything you need to stay productive, organized and stress-free.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-[#FFF7FB] rounded-3xl p-8 border border-pink-100 shadow-sm"
            >
              <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center mb-6">
                <card.icon className="text-pink-500" size={30} />
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {card.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {card.text}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default WhyLifeOS;