import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Target, Lightbulb, Rocket, Users } from "lucide-react";

const plans = [
  {
    icon: Target,
    title: "Expand Rural Education",
    description: "Launch 20 new learning centers in underserved rural areas by 2027, reaching 5,000 additional students.",
  },
  {
    icon: Lightbulb,
    title: "Digital Literacy Program",
    description: "Introduce technology training for 3,000 community members to bridge the digital divide.",
  },
  {
    icon: Rocket,
    title: "Women Entrepreneurship",
    description: "Support 500 women-led startups with training, mentorship, and micro-financing opportunities.",
  },
  {
    icon: Users,
    title: "Youth Leadership Academy",
    description: "Establish a comprehensive leadership development program for 1,000 young changemakers annually.",
  },
];

export function FuturePlans() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FadeIn>
            <SectionLabel>Looking Ahead</SectionLabel>
            <SectionHeading>Future Plans</SectionHeading>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our roadmap for creating even greater impact in the communities we serve.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <FadeIn key={plan.title} delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-blue-600">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                        <Icon className="size-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="mb-2">{plan.title}</CardTitle>
                        <p className="text-slate-600 text-sm">{plan.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
