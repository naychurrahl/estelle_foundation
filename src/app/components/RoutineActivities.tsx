import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Calendar, Clock } from "lucide-react";

const activities = [
  {
    day: "Monday",
    time: "4:00 PM - 6:00 PM",
    activity: "School Visitations & Sponsorships",
    location:
      "Visiting public and private schools quarterly to identify children in need and provide direct support such as fees, uniforms, and learning materials.",
  },
  {
    day: "Tuesday",
    time: "10:00 AM - 12:00 PM",
    activity: "Special Needs Children Support Sessions",
    location:
      "Quarterly training workshops and support group sessions for educators and parents dealing with special needs children.",
  },
  {
    day: "Wednesday",
    time: "5:00 PM - 7:00 PM",
    activity: "Awareness Workshops",
    location:
      "Conducting quarterly awareness programs for children and adolescents on key issues like mental health, gender equality, and anti-bullying.",
  },
  {
    day: "Thursday",
    time: "3:00 PM - 5:00 PM",
    activity: "Extracurricular Development",
    location:
      "Organizing art, sports, and science workshops quarterly to promote the holistic development of the children we support.",
  },
];

export function RoutineActivities() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FadeIn>
            <SectionLabel>Our Schedule</SectionLabel>
            <SectionHeading>Routine Activities</SectionHeading>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Join us in our regular programs designed to create consistent
              impact throughout the week.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((item, index) => (
            <FadeIn key={item.day} delay={index * 0.1}>
              <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-blue-600">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">
                    {item.activity}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{item.location}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
