import { ContactInfo } from "@/app/components/ContactInfo";
import { Footer } from "@/app/components/Footer";
import { GetInvolved } from "@/app/components/GetInvolved";
import { HeroMinor } from "@/app/components/HeroMinor";
import { Navigation } from "@/app/components/Navigation";
import { MapBlock } from "@/app/components/MapBlock";

import { organizationInfo } from "@/app/data/ngoData";


export function ContactPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navigation />
      <HeroMinor
        page="Contact"
        text={`Get in touch with ${organizationInfo.name} to Volunteer, Partner or Sponsor`}
      />
      <ContactInfo />
      <GetInvolved />
      <Footer />
    </div>
  );
}
