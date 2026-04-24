import { organizationInfo } from "@/app/data/ngoData";
import { Heart } from "lucide-react";

export function Hero() {
  {/* <div className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 text-white"> */}
  return (
    <div className="relative bg-gradient-to-br from-orange-600/30 via-orange-500 to-orange-400 text-white">
      
      <div className="max-w-7xl mx-auto px-4 py-24 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl mb-6">{organizationInfo.name}</h1>
          <p className="text-2xl md:text-3xl text-orange-100 mb-8 italic">
            "{organizationInfo.motto}"
          </p>
          <p className="text-xl text-orange-50 leading-relaxed max-w-3xl mx-auto">
            {organizationInfo.mission}
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#get-involved"
              className="px-8 py-4 bg-white text-orange-600 rounded-full hover:bg-orange-50 transition-colors shadow-lg text-lg"
            >
              Get Involved
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-orange-700 text-white rounded-full hover:bg-orange-800 transition-colors shadow-lg text-lg"
            >
              Our Projects
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream-50 to-transparent"></div>
    </div>
  );
}
