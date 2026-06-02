import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Target, Lightbulb, Rocket, Users } from "lucide-react";

const plans = [
  {
    icon: Target,
    title: "Expansion of Educational Support",
    description:
      "As Estelle Education Foundation continues to grow,the goal is to increase the number of children we sponsor through school, especially in higher education, by providing university scholarships.",
  },
  {
    icon: Target,
    title: "Establishing Learning Centers",
    description:
      "Setting up learnin gcenters in underprivileged areas that will offer after-school programs, special needs education, and access to learning materials",
  },
  {
    icon: Target,
    title: "Digital Education",
    description:
      "Providing access to online learning platforms, ensuring that children in rural and urban areas can receive digital literacy training",
  },
  {
    icon: Target,
    title: "Strategic Partnerships",
    description:
      "Collaborating with local and international organisations to widen our reach and provide more comprehensive support for children’s education and welfare",
  },
  {
    icon: Target,
    title: "The Girl Rescript Initiative",
    description:
      "Reintegrating girls who dropped out of school due to early marriage or teenage pregnancy back into the economic system by identifying, training, and empowering them through vocational skills and enterprise support",
  },
  {
    icon: Target,
    title: "Adopt a Future Program",
    description:
      "Connecting less privileged children with sponsors who commit to funding their secondary education, including school fees, books, and essentials, while receiving regular academic reports and progress updates from the Foundation",
  },
  {
    icon: Target,
    title: "Guardian Legacy Initiative",
    description:
      "Establishing a secure trust fund system where parents entrust the Foundation with their children’s educational future, ensuring continuous school support, representation, and care; even in their absence.",
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
              Our roadmap for creating even greater impact in the communities we
              serve.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <FadeIn key={plan.title} delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-purple-600">
                  <CardHeader className="h-full w-full flex items-center justify-center">
                    <div className="flex flex-row items-center justify-center gap-4 pb-4">
                      <div className="size-12 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
                        <Icon className="size-6 text-purple-600" />
                      </div>
                      <div>
                        <CardTitle className="mb-2 font-medium">
                          {plan.title}
                        </CardTitle>
                        <p className="text-slate-600 text-sm">
                          {plan.description}
                        </p>
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
