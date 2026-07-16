import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { PrimaryButton } from "./PrimaryButton";
import { OutlineButton } from "./OutlineButton";

// A CTA links either internally (`to`, via react-router Link) or to an
// anchor/external URL (`href`) - exactly one should be set.
export type HeroCta = {
  label: string;
  to?: string;
  href?: string;
};

export type HeroProps = {
  image: string;
  heading?: string;
  body?: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  overlay?: boolean;
};

function HeroCtaLink({
  cta,
  children,
}: {
  cta: HeroCta;
  children: React.ReactNode;
}) {
  if (cta.to) return <Link to={cta.to}>{children}</Link>;
  return <a href={cta.href}>{children}</a>;
}

// One hero slide's content. No defaults on purpose - every slide's content
// (including this one) is supplied by whoever composes it into
// <HeroCarousel>, so adding a slide never means editing this file.
export function Hero({
  image,
  heading,
  body,
  primaryCta,
  secondaryCta,
  overlay = true,
}: HeroProps) {
  return (
    <section className="relative min-h-[600px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      >
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-900/70" />
        )}
      </div>

      {(heading || body || primaryCta || secondaryCta) && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl text-white">
            {heading && (
              <h1 className="text-5xl md:text-6xl mb-6">{heading}</h1>
            )}
            {body && <p className="text-xl text-slate-200 mb-8">{body}</p>}
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-wrap gap-4">
                {primaryCta && (
                  <HeroCtaLink cta={primaryCta}>
                    <PrimaryButton className="text-lg px-8 py-6 hover:bg-white/10">
                      {primaryCta.label}
                      <ArrowRight className="ml-2 size-5" />
                    </PrimaryButton>
                  </HeroCtaLink>
                )}
                {secondaryCta && (
                  <HeroCtaLink cta={secondaryCta}>
                    <OutlineButton className="text-lg px-8 py-6 border-white hover:bg-white/10">
                      {secondaryCta.label}
                    </OutlineButton>
                  </HeroCtaLink>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
