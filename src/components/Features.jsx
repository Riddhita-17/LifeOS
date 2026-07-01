import FeatureCard from "./FeatureCard";
import { features } from "../constants/features";

function Features() {
  return (
    <section id="features" className="py-24">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">

            Everything You Need

          </h2>

          <p className="text-gray-500 mt-4 text-lg">

            AI powered tools designed to simplify your everyday life.

          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item) => (

            <FeatureCard
              key={item.title}
              {...item}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;