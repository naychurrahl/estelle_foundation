import { Link } from "react-router";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionHeading";
import { PrimaryButton } from "./PrimaryButton";
import { ArrowRight } from "lucide-react";
import { useSiteContent } from "@/app/contexts/SiteContentContext";

export function AboutBrief() {
  const { aboutBrief } = useSiteContent();
  const { heading, paragraphs, image, ctaLabel, ctaLink } = aboutBrief;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <SectionLabel>About Us</SectionLabel>
              <SectionHeading>{heading}</SectionHeading>
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={index === 0 ? "text-slate-600 mb-6" : "text-slate-600 mb-8"}
                >
                  {paragraph}
                </p>
              ))}
              <Link to={ctaLink}>
                <PrimaryButton>
                  {ctaLabel}
                  <ArrowRight className="ml-2 size-4" />
                </PrimaryButton>
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative">
              <img
                src={image}
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-purple-600/10 rounded-lg -z-10" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
