import { organizationInfo } from "@/app/data/ngoData";
import { Eye, Target, CheckCircle } from "lucide-react";

export function MissionVision() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Vision */}
          <div className="bg-gradient-to-br from-orange-50 to-cream-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-500 text-white p-3 rounded-full">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-3xl">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">{organizationInfo.vision}</p>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-orange-50 to-cream-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-500 text-white p-3 rounded-full">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-3xl">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">{organizationInfo.mission}</p>
          </div>
        </div>

        {/* Objectives */}
        <div className="bg-cream-50 rounded-2xl p-8 md:p-12 shadow-md">
          <h3 className="text-3xl mb-8 text-center">Our Objectives</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {organizationInfo.objectives.map((objective, index) => (
              <div key={index} className="flex gap-4 items-start">
                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
