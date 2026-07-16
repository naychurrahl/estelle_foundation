import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionHeading";
import { getSiteContent } from "@/app/lib/siteContent";

export function Partners() {
  const { partners } = getSiteContent();

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FadeIn>
            <SectionLabel>Our Network</SectionLabel>
            <SectionHeading>Trusted Partners</SectionHeading>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We collaborate with leading organizations to amplify our impact and reach more communities.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="size-20 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-700 text-xl mb-2 mx-auto">
                    {partner.logo}
                  </div>
                  <div className="text-sm text-slate-600">{partner.name}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
