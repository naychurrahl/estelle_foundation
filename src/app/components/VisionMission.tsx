import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Eye, Target } from "lucide-react";

export function VisionMission() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FadeIn>
            <SectionLabel>Our Purpose</SectionLabel>
            <SectionHeading>Vision & Mission</SectionHeading>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <FadeIn>
            <Card className="h-full border-t-4 border-t-blue-600">
              <CardHeader>
                <div className="size-14 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Eye className="size-7 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  To become a leading force across Africa in raising confident,
                  capable, and conscious leaders by ensuring every child and
                  young person regardless of background has the access,
                  self-awareness, and skills to rise, lead, and thrive.
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="h-full border-t-4 border-t-indigo-600">
              <CardHeader>
                <div className="size-14 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
                  <Target className="size-7 text-indigo-600" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We are committed to raising confident, capable, and conscious
                  young leaders by providing access to education, emotional
                  intelligence, and real-world skills, while delivering
                  transformative programs, vocational training, and mentorship
                  that create sustainable pathways for them to thrive and lead.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
