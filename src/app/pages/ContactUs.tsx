import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContactSponsorshipForm } from "../components/ContactSponsorshipForm";
import { FadeIn } from "../components/FadeIn";
import { Toaster } from "../components/ui/sonner";

export default function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="max-w-3xl">
                <h1 className="text-5xl mb-6">Contact Us</h1>
                <p className="text-xl text-purple-100">
                  Ready to make a difference? Reach out to learn about volunteer
                  opportunities, sponsorship programs, or partnership
                  possibilities.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <ContactSponsorshipForm />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
