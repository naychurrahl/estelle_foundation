import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { VisionMission } from "../components/VisionMission";
import { CoreValues } from "../components/CoreValues";
import { RoutineActivities } from "../components/RoutineActivities";
import { MeetTheTeam } from "../components/MeetTheTeam";
import { FadeIn } from "../components/FadeIn";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="max-w-3xl">
                <h1 className="text-5xl mb-6">About Us</h1>
                <p className="text-xl text-blue-100">
                  Learn more about our journey, values, and the dedicated team working to create positive change in communities worldwide.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <VisionMission />
        <CoreValues />
        <RoutineActivities />
        <MeetTheTeam />
      </main>
      <Footer />
    </div>
  );
}
