import { useState } from "react";
import { useForm } from "react-hook-form";
import { Heart, Mail, User, MessageSquare, Send } from "lucide-react";

interface VolunteerForm {
  name: string;
  email: string;
  message: string;
}

export function GetInvolved() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<VolunteerForm>();

  const onSubmit = (data: VolunteerForm) => {
    console.log(data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="get-involved" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Get Involved</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Join us in making a difference. Every contribution counts, whether it's your time, skills, or support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Volunteer Form */}
          <div className="bg-gradient-to-br from-cream-50 to-orange-50 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-500 text-white p-3 rounded-full">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-3xl">Become a Volunteer</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Fill out the form below and we'll get in touch with you about volunteer opportunities.
            </p>

            {submitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                Thank you for your interest! We'll be in touch soon.
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm mb-2 text-gray-700">Name *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-700">Email *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-700">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tell us about your interests and availability..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-4 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2 text-lg shadow-md"
              >
                <Send className="w-5 h-5" />
                Submit Application
              </button>
            </form>
          </div>

          {/* Donate CTA */}
          <div className="bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl p-8 text-white shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-3xl">Make a Donation</h3>
              </div>
              <p className="text-orange-50 mb-6 text-lg leading-relaxed">
                Your generous donation directly supports our programs and helps us reach more communities in need.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                <h4 className="text-xl mb-4">Your Impact</h4>
                <ul className="space-y-3 text-orange-50">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">💧</span>
                    <span>$50 provides clean water for a family for a year</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">📚</span>
                    <span>$100 supplies school materials for 10 children</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🏥</span>
                    <span>$250 funds medical care for 5 families</span>
                  </li>
                </ul>
              </div>
            </div>
            <button className="w-full bg-white text-orange-600 py-4 rounded-lg hover:bg-orange-50 transition-colors text-lg shadow-md">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
