import { Link } from "react-router";
import { directors } from "@/app/data/ngoData";
import { ArrowRight } from "lucide-react";

export function Board() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Our Leadership</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Meet the dedicated team leading our mission to create positive change
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {directors.map((director) => (
            <Link
              key={director.id}
              to={`/director/${director.id}`}
              className="group bg-cream-50 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={director.photo}
                  alt={director.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 group-hover:text-orange-600 transition-colors">
                  {director.name}
                </h3>
                <p className="text-orange-600 mb-4">{director.title}</p>
                <div className="flex items-center gap-2 text-orange-600 group-hover:gap-3 transition-all">
                  <span className="text-sm">View Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
