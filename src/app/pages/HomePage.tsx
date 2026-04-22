import { Hero } from "@/app/components/Hero";
import { Projects } from "@/app/components/Projects";
import { GetInvolved } from "@/app/components/GetInvolved";
import { Footer } from "@/app/components/Footer";
import { Testimonials } from "@/app/components/Testimonials";
import { Navigation } from "@/app/components/Navigation";

export function HomePage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navigation />
      <Hero />
      <Projects />{/*Events*/}
      <Testimonials />{/*Testimonials*/}
      <GetInvolved />{/*Donate*/}
      <Footer />
    </div>
  );
}
