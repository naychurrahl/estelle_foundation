import { Link } from "react-router";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionHeading";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ArrowRight } from "lucide-react";
import { PrimaryButton } from "./PrimaryButton";
import { getSiteContent } from "@/app/lib/siteContent";
import { getIcon } from "@/app/lib/icons";

export function ProgramsPreview() {
  const { programs } = getSiteContent();

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FadeIn>
            <SectionLabel>Our Impact</SectionLabel>
            <SectionHeading>Programs & Activities</SectionHeading>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Discover the diverse range of initiatives we run to create lasting
              positive change in our communities.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {programs.map((program, index) => {
            const Icon = getIcon(program.icon);
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
                    <div className="size-12 rounded-lg bg-purple-100 flex items-center justify-center mb-3">
                      <Icon className="size-6 text-purple-600" />
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
