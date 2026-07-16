import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Check } from "lucide-react";
import { PrimaryButton } from "./PrimaryButton";
import { Link } from "react-router";
import { useSiteContent } from "@/app/contexts/SiteContentContext";
import { getIcon } from "@/app/lib/icons";

export function SponsorshipPanel() {
  const { sponsorshipPanel } = useSiteContent();
  const { paragraphs, tiers, ctaLabel, ctaLink } = sponsorshipPanel;

  return (
    <section
      id="abt"
      className="py-20 bg-gradient-to-br from-purple-50 to-purple-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <FadeIn className="flex flex-col gap-4 items-center">
            <SectionLabel>Support Our Mission</SectionLabel>
            <SectionHeading>Keep A Child in School</SectionHeading>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-slate-600 mx-auto">
                {paragraph}
              </p>
            ))}
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {tiers.map((tier, index) => {
            const Icon = getIcon(tier.icon);
            return (
              <FadeIn key={tier.name} delay={index * 0.1}>
                <Card className="h-full hover:shadow-xl transition-shadow border-t-4 border-t-purple-600">
                  <CardHeader className="text-center">
                    <div className="size-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                      <Icon className="size-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <div className="text-3xl text-purple-600 mt-2">
                      {tier.amount}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {tier.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2">
                          <Check className="size-5 text-green-600 shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-600">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center">
            <Link to={ctaLink}>
              <PrimaryButton className="text-lg px-8 py-6">
                {ctaLabel}
              </PrimaryButton>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
