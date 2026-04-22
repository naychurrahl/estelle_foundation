import { Hero } from "@/app/components/Hero";
import { About} from "@/app/components/About";
import { MissionVision } from "@/app/components/MissionVision";
import { CoreValues } from "@/app/components/CoreValues";
import { Board } from "@/app/components/Board";
import { Footer } from "@/app/components/Footer";
import { Navigation } from "../components/Navigation";

import { Gallery } from "../components/Gallery";

export function GalleryPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* <Navigation />
      <Hero />
      <About />
      <MissionVision />
      <CoreValues />
      <Board />
      <Footer /> */}

      <Navigation />
      <Gallery />
      <Footer />
    </div>
  );
}
