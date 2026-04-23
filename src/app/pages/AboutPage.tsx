import { About} from "@/app/components/About";
import { Board } from "@/app/components/Board";
import { Footer } from "@/app/components/Footer";
import { MissionVision } from "@/app/components/MissionVision";
import { Navigation } from "@/app/components/Navigation";
import { Partners } from "@/app/components/Partners";
import { HeroMinor } from "@/app/components/HeroMinor";
import { organizationInfo } from "@/app/data/ngoData";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navigation />
      <HeroMinor
        page="About"
        text={`About ${organizationInfo.name}`}
      />
      <About /> {/* Story */}
      <MissionVision />
      <Board />
      <Partners />
      <Footer />
    </div>
  );
}
