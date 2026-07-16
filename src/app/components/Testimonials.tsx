import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionHeading";
import { Card, CardContent } from "./ui/card";
import { Quote } from "lucide-react";
import { useSiteContent } from "@/app/contexts/SiteContentContext";

export function Testimonials() {
  const { testimonials } = useSiteContent();

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
