import { Link } from "react-router";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionHeading";
import { PrimaryButton } from "./PrimaryButton";
import { ArrowRight } from "lucide-react";

export function AboutBrief() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <SectionLabel>About Us</SectionLabel>
              <SectionHeading>
                Growing Minds, Strengthening Communities.
              </SectionHeading>
              <p className="text-slate-600 mb-6">
                Estelle Education Foundation was founded in September 2022 with
                a clear vision: to empower children and young people through
                education, personal development, and inclusive opportunities
                that unlock their full potential.
              </p>
              <p className="text-slate-600 mb-8">
                Our mission is to bridge the gap between potential and access by
                providing educational support, life skills, and development
                programs for children and young people across diverse
                backgrounds. We are committed to inclusivity; supporting those
                with limited access to resources while also creating growth
                opportunities for individuals seeking personal and professional
                advancement.
              </p>
              <Link to="/about">
                <PrimaryButton>
                  Discover Our Story
                  <ArrowRight className="ml-2 size-4" />
                </PrimaryButton>
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzgwMjMzODgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
