import { FadeIn } from "./FadeIn";
import { getSiteContent } from "@/app/lib/siteContent";

export function StatStrip() {
  const { stats } = getSiteContent();

  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl mb-2">{stat.value}</div>
                <div className="text-purple-100">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
