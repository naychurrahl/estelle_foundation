import { useParams, Link } from "react-router";
import { directors } from "@/app/data/ngoData";
import { ArrowLeft, GraduationCap, Briefcase, Lightbulb, Target } from "lucide-react";

export function DirectorPage() {
  const { id } = useParams();
  const director = directors.find((d) => d.id === Number(id));

  if (!director) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl mb-4">Director not found</h1>
          <Link to="/" className="text-orange-600 hover:text-orange-700 underline">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <div className="bg-orange-600 text-white py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white hover:text-orange-100 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-br from-orange-50 to-cream-100 p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <img
                src={director.photo}
                alt={director.name}
                className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div className="text-center md:text-left flex-1">
                <h1 className="text-4xl mb-2">{director.name}</h1>
                <p className="text-xl text-orange-600 mb-4">{director.title}</p>
                {director.bio && (
                  <p className="text-lg text-gray-700 leading-relaxed">{director.bio}</p>
                )}
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="p-8 md:p-12 space-y-8">
            {director.education && (
              <div className="border-l-4 border-orange-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="w-6 h-6 text-orange-600" />
                  <h2 className="text-2xl">Education</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">{director.education}</p>
              </div>
            )}

            {director.experience && (
              <div className="border-l-4 border-orange-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase className="w-6 h-6 text-orange-600" />
                  <h2 className="text-2xl">Experience</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">{director.experience}</p>
              </div>
            )}

            {director.skills && director.skills.length > 0 && (
              <div className="border-l-4 border-orange-500 pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-6 h-6 text-orange-600" />
                  <h2 className="text-2xl">Key Skills</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {director.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {director.impact && (
              <div className="border-l-4 border-orange-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-6 h-6 text-orange-600" />
                  <h2 className="text-2xl">Impact</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">{director.impact}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
