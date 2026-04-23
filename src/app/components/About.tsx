import { organizationInfo } from "@/app/data/ngoData";

export function About() {
  return (
    <section className="py-20 px-4 bg-cream-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Our Story</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            {organizationInfo.story}
          </p>
        </div>
      </div>
    </section>
  );
}
