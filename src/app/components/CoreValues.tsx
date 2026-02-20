import { organizationInfo } from "@/app/data/ngoData";
import { Shield, Heart, Sprout, Lightbulb, Users } from "lucide-react";

const icons = [Shield, Heart, Sprout, Lightbulb, Users];

export function CoreValues() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-cream-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Our Core Values</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            These principles guide everything we do and define who we are
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizationInfo.coreValues.map((value, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-xl mb-3 text-orange-600">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
