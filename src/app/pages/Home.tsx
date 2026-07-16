import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { Hero } from "@/app/components/Hero";
import { HeroCarousel } from "@/app/components/HeroCarousel";
import { AboutBrief } from "@/app/components/AboutBrief";
import { StatStrip } from "@/app/components/StatStrip";
import { ProgramsPreview } from "@/app/components/ProgramsPreview";
import { FuturePlans } from "@/app/components/FuturePlans";
import { SponsorshipPanel } from "@/app/components/SponsorshipPanel";
import { Testimonials } from "@/app/components/Testimonials";
import { Partners } from "@/app/components/Partners";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroCarousel>
          <Hero
            image="https://images.unsplash.com/photo-1628717341663-0007b0ee2597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXJzJTIwaGVscGluZ3xlbnwxfHx8fDE3ODAyMjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            heading="Keep A Child in School: Empowering Futures Through Education."
            body="Join us in making a lasting impact through education, empowerment, and sustainable development initiatives."
            primaryCta={{ label: "Get Involved", to: "/contact" }}
            secondaryCta={{ label: "Learn More", href: "#abt" }}
          />
          <Hero
            image="https://images.unsplash.com/photo-1628717341663-0007b0ee2597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXJzJTIwaGVscGluZ3xlbnwxfHx8fDE3ODAyMjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            heading="Adopt a Future"
            body="Heart touchin tagline"
            primaryCta={{ label: "Get Involved", to: "/adopt-a-future" }}
          />
        </HeroCarousel>
        <AboutBrief />
        <StatStrip />
        <ProgramsPreview />
        <FuturePlans />
        <SponsorshipPanel />
        <Testimonials />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
