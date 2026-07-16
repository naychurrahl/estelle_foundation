import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ChildrenGrid } from "../components/ChildrenGrid";
import { FadeIn } from "../components/FadeIn";
import { SectionLabel } from "../components/SectionLabel";
import { SectionHeading } from "../components/SectionHeading";
import { Toaster } from "../components/ui/sonner";
import { UserCheck, ClipboardCheck, Mail, Heart } from "lucide-react";

const steps = [
  {
    icon: UserCheck,
    title: "Select or Get Matched",
    description:
      "Review available child profiles below, or let our team match you with a child in urgent need of support.",
  },
  {
    icon: ClipboardCheck,
    title: "Commit & Pay",
    description:
      "Fill out the sponsorship commitment form and make your payment (annual or termly) to secure the child's place in school.",
  },
  {
    icon: Mail,
    title: "Receive Your Welcome Packet",
    description:
      "Once payment is verified, you'll receive a digital welcome packet with your child's profile and a receipt.",
  },
  {
    icon: Heart,
    title: "Stay Connected",
    description:
      "At the end of every school term, receive academic report cards and a personal letter from your sponsored child.",
  },
];

export default function AdoptAFuture() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="max-w-3xl">
                <h1 className="text-5xl mb-6">Adopt-a-Future Initiative</h1>
                <p className="text-xl text-purple-100">
                  Every child deserves the chance to rewrite their story. By
                  securing a child's education today, you help build the
                  conscious leaders of tomorrow.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <FadeIn>
                <SectionLabel>How It Works</SectionLabel>
                <SectionHeading>Your Sponsorship Journey</SectionHeading>
              </FadeIn>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <FadeIn key={step.title} delay={index * 0.1}>
                    <div className="text-center">
                      <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-lg bg-purple-100">
                        <Icon className="size-6 text-purple-600" />
                      </div>
                      <h3 className="mb-2">{step.title}</h3>
                      <p className="text-sm text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        <ChildrenGrid />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
