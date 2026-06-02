import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { Hero } from "@/app/components/Hero";
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
        <Hero />
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
