import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { MissionVision } from "@/app/components/MissionVision";
import { CoreValues } from "@/app/components/CoreValues";
import { Board } from "@/app/components/Board";
import { Projects } from "@/app/components/Projects";
import { GetInvolved } from "@/app/components/GetInvolved";
import { Footer } from "@/app/components/Footer";

export function HomePage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Hero />
      <About />
      <MissionVision />
      <CoreValues />
      <Board />
      <Projects />
      <GetInvolved />
      <Footer />
    </div>
  );
}
