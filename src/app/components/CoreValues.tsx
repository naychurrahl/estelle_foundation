import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Heart,
  Users,
  Sparkles,
  Shield,
  Lightbulb,
  HandHeart,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "EQUITY",
    description:
      "We believe in equal educational opportunities for every child.",
  },
  {
    icon: Users,
    title: "INCLUSIVITY",
    description: "We are committed to supporting children with special needs.",
  },
  {
    icon: Sparkles,
    title: "ADVOCACY",
    description: "We raise awareness on social issues affecting children.",
  },
  {
    icon: Shield,
    title: "SUSTAINABILITY",
    description:
      "We provide long-term support to ensure continued education and growth.",
  },
  {
    icon: Lightbulb,
    title: "EMPOWERMENT",
    description:
      "We focus on personal and educational empowerment for underprivileged youth.",
  },
];

export function CoreValues() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FadeIn>
            <SectionLabel>What Drives Us</SectionLabel>
            <SectionHeading>Core Values</SectionHeading>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our values guide every decision we make and shape the way we work
              with communities.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <FadeIn key={value.title} delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="size-12 rounded-lg bg-purple-100 flex items-center justify-center mb-3">
                      <Icon className="size-6 text-purple-600" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
