import { FadeIn } from "./FadeIn";

const stats = [
  { value: "2K+", label: "Students Reached" },
  { value: "50+", label: "Schools Reached" },
  { value: "50+", label: "Volunteers" },
  { value: "3+", label: "Years of Impact" },
];

export function StatStrip() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
