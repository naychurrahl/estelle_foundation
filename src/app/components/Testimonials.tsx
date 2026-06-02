import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionHeading";
import { Card, CardContent } from "./ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Volunteer Coordinator",
    content:
      "Being part of Community Outreach has been life-changing. Seeing the direct impact we make in people's lives drives me to do more every day.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Program Beneficiary",
    content:
      "The education program gave me opportunities I never thought possible. Today, I'm pursuing my dream of becoming an engineer, thanks to their support.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    name: "Priya Patel",
    role: "Corporate Sponsor",
    content:
      "Partnering with Community Outreach aligns perfectly with our values. Their transparency and measurable impact make them an ideal organization to support.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FadeIn>
            <SectionLabel>Voices from Our Community</SectionLabel>
            <SectionHeading>Testimonials</SectionHeading>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.1}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Quote className="size-8 text-purple-600 mb-4" />
                  <p className="text-slate-600 mb-6">{testimonial.content}</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="size-12 rounded-full object-cover"
                    />
                    <div>
                      <div>{testimonial.name}</div>
                      <div className="text-sm text-slate-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
