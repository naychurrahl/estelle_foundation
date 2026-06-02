import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Check, DollarSign, Gift, HandHeart } from "lucide-react";
import { PrimaryButton } from "./PrimaryButton";
import { Link } from "react-router";

const tiers = [
  {
    name: "One Child",
    amount: "#5 000",
    icon: HandHeart,
    benefits: ["Monthly newsletter"],
  },
  {
    name: "Five Children",
    amount: "#25 000",
    icon: Gift,
    benefits: [
      "All Friend benefits",
      "Invitation to annual events",
      "Tax benefits",
      "Sponsor a child's education",
    ],
  },
  {
    name: "Classroom Hero",
    amount: "#50 000",
    icon: Gift,
    benefits: [
      "All Friend benefits",
      "Invitation to annual events",
      "Tax benefits",
      "Sponsor a child's education",
    ],
  },
  {
    name: "Legacy Partner",
    amount: "#100 000+",
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
    <section id="abt" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <FadeIn className="flex flex-col gap-4 items-center">
            <SectionLabel>Support Our Mission</SectionLabel>
            <SectionHeading>Keep A Child in School</SectionHeading>
            <p className="text-slate-600 mx-auto">
              At Estelle Education Foundation, we believe that real change is
              driven by collective effort, and through sponsorship, you become a
              key player in shaping the future of countless children. Your
              support enables us to continue our mission of providing education
              to those who need it most. But as a sponsor, you don't just
              contribute; you gain significant benefits in return.
            </p>
            <p className="text-slate-600 mx-auto">
              By partnering with Estelle Education Foundatio n, your
              organization aligns itself with a powerful cause, ensuring access
              to education for under privileged and special - needs children.
              This partnership offers a unique opportunity to enhance your
              brand's image and demonstrate your commitment to making a tangible
              social impact. Your contribution will be recognized across various
              platforms, from our official website to social media channels,
              show casing your dedication to Corporate Social Responsibility
              (CSR).
            </p>
            <p className="text-slate-600 mx-auto">
              Additionally, sponsorship with Estelle Education Foundation
              provides a strong networking platform. Our exclusive events,
              including annual galas, school outreach programs, and community
              engagements, offer a space for sponsors to connect with other
              like-minded philanthropists, education leaders, and government
              officials. By attending these events, you can create new
              relationships that could benefit your organization in the long
              term.
            </p>
            <p className="text-slate-600 mx-auto">
              Ultimately, becoming a sponsor means that you are directly
              contributing to transforming lives. Your investment will help
              break the cycle of poverty, uplift children with special needs,
              and create a future where education is available to every child,
              regardless of their circumstances. By joining hands with Estelle
              Education Foundation, you're not just funding an organization,
              you're building a legacy of change and hope for generations to
              come.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
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
                    <div className="text-3xl text-blue-600 mt-2">
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
