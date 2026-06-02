import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Check, DollarSign, Gift, HandHeart } from "lucide-react";
import { PrimaryButton } from "./PrimaryButton";
import { Link } from "react-router";

const tiers = [
  {
    name: "Friend",
    amount: "$50/month",
    icon: HandHeart,
    benefits: [
      "Monthly newsletter",
      "Quarterly impact reports",
      "Recognition on website",
    ],
  },
  {
    name: "Supporter",
    amount: "$100/month",
    icon: Gift,
    benefits: [
      "All Friend benefits",
      "Invitation to annual events",
      "Tax benefits",
      "Sponsor a child's education",
    ],
  },
  {
    name: "Champion",
    amount: "$250/month",
    icon: DollarSign,
    benefits: [
      "All Supporter benefits",
      "Direct project updates",
      "Meeting with team members",
      "Personalized impact story",
    ],
  },
];

export function SponsorshipPanel() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FadeIn>
            <SectionLabel>Support Our Mission</SectionLabel>
            <SectionHeading>Keep A Child in School</SectionHeading>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Your generous support enables us to continue making a difference. Choose a sponsorship tier that works for you.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {tiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <FadeIn key={tier.name} delay={index * 0.1}>
                <Card className="h-full hover:shadow-xl transition-shadow border-t-4 border-t-blue-600">
                  <CardHeader className="text-center">
                    <div className="size-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                      <Icon className="size-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <div className="text-3xl text-blue-600 mt-2">{tier.amount}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {tier.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2">
                          <Check className="size-5 text-green-600 shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-600">{benefit}</span>
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
            <Link to="/contact">
              <PrimaryButton className="text-lg px-8 py-6">
                Start Sponsoring Today
              </PrimaryButton>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
