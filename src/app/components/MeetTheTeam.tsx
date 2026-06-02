import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Ebo Ayomitide",
    role: "FOUNDER & CEO",
    bio: "",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
  },
  {
    name: "Makanjuola Joseph",
    role: "SECRETARY",
    bio: "",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
  },
  {
    name: "James Stephen Ayodeji",
    role: "DIRECTOR",
    bio: "",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop",
  },
  {
    name: "Olaoye kolawole Olayinka",
    role: "DIRECTOR",
    bio: "",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
  },
];

export function MeetTheTeam() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FadeIn>
            <SectionLabel>The People Behind Our Mission</SectionLabel>
            <SectionHeading>Meet Our Team</SectionHeading>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our dedicated team brings together diverse expertise and a shared passion for creating positive change.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <FadeIn key={member.name} delay={index * 0.1}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <div className="aspect-square w-full overflow-hidden rounded-t-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <div className="text-sm text-blue-600">{member.role}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-4">{member.bio}</p>
                  <div className="flex gap-2">
                    <button className="size-8 rounded-full bg-slate-100 hover:bg-blue-100 flex items-center justify-center transition-colors">
                      <Linkedin className="size-4 text-slate-600" />
                    </button>
                    <button className="size-8 rounded-full bg-slate-100 hover:bg-blue-100 flex items-center justify-center transition-colors">
                      <Mail className="size-4 text-slate-600" />
                    </button>
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
