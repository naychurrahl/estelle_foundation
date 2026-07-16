import { Link } from "react-router";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { getSiteContent } from "@/app/lib/siteContent";
import { getIcon } from "@/app/lib/icons";

export function FuturePlans() {
  const { futurePlans: plans } = getSiteContent();

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
            const Icon = getIcon(plan.icon);
            const card = (
              <Card
                className={`h-full border-l-4 border-l-purple-600 transition-shadow hover:shadow-lg ${
                  plan.href ? "cursor-pointer" : ""
                }`}
              >
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
            );

            return (
              <FadeIn key={plan.title} delay={index * 0.1}>
                {plan.href ? <Link to={plan.href}>{card}</Link> : card}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
