import { Link } from "react-router";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionHeading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { GraduationCap, Heart, TreePine, Users, ArrowRight } from "lucide-react";
import { PrimaryButton } from "./PrimaryButton";

const programs = [
  {
    icon: GraduationCap,
    title: "Education & Literacy",
    description: "Providing access to quality education, tutoring programs, and scholarship opportunities for underprivileged youth.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVkdWNhdGlvbiUyMGxlYXJuaW5nfGVufDF8fHx8MTc4MDM3MjkyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Heart,
    title: "Healthcare Access",
    description: "Organizing health camps, awareness programs, and ensuring essential medical services reach remote communities.",
    image: "https://images.unsplash.com/photo-1674574124567-79b2ee3d22fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwZnVuZHJhaXNpbmclMjBldmVudHxlbnwxfHx8fDE3ODAyMzM4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: TreePine,
    title: "Environmental Conservation",
    description: "Leading tree plantation drives, clean-up campaigns, and promoting sustainable living practices.",
    image: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwY29uc2VydmF0aW9uJTIwbmF0dXJlfGVufDF8fHx8MTc4MDI4MzgzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Users,
    title: "Youth Development",
    description: "Empowering young minds through skill training, mentorship programs, and leadership workshops.",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMHNwb3J0cyUyMGFjdGl2aXR5fGVufDF8fHx8MTc4MDM4Mzk5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function ProgramsPreview() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FadeIn>
            <SectionLabel>Our Impact</SectionLabel>
            <SectionHeading>Programs & Activities</SectionHeading>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Discover the diverse range of initiatives we run to create lasting positive change in our communities.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <FadeIn key={program.title} delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="size-12 rounded-lg bg-blue-100 flex items-center justify-center mb-3">
                      <Icon className="size-6 text-blue-600" />
                    </div>
                    <CardTitle>{program.title}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                </Card>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.4}>
          <div className="text-center">
            <Link to="/gallery">
              <PrimaryButton className="text-lg px-8 py-6">
                View All Programs
                <ArrowRight className="ml-2 size-5" />
              </PrimaryButton>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
