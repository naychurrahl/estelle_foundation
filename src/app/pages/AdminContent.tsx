import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { ProtectedAdminRoute } from "@/app/components/admin/ProtectedAdminRoute";
import { RepeatableListEditor } from "@/app/components/admin/RepeatableListEditor";
import { StringListEditor } from "@/app/components/admin/StringListEditor";
import { Button } from "@/app/components/ui/button";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/app/components/ui/tabs";
import { Toaster } from "@/app/components/ui/sonner";
import { Link } from "react-router";
import {
  getSiteContent,
  setSiteContent,
  resetSiteContentSection,
  defaultSiteContent,
  type HeroSlideContent,
  type SponsorshipTier,
  type SocialLink,
} from "@/app/lib/siteContent";
import { logout } from "@/app/lib/adminAuth";

function SectionSaveBar({
  onSave,
  onReset,
}: {
  onSave: () => void;
  onReset: () => void;
}) {
  return (
    <div className="flex gap-2 pt-2">
      <Button onClick={onSave}>Save</Button>
      <Button variant="outline" onClick={onReset}>
        Reset to Default
      </Button>
    </div>
  );
}

// Hero slides are stored nested ({ primaryCta: { label, to } }), but the
// generic RepeatableListEditor only edits flat fields - flatten for
// editing, unflatten on save.
type FlatHeroSlide = {
  image: string;
  heading: string;
  body: string;
  primaryCtaLabel: string;
  primaryCtaTo: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
};

function toFlatSlide(slide: HeroSlideContent): FlatHeroSlide {
  return {
    image: slide.image,
    heading: slide.heading,
    body: slide.body,
    primaryCtaLabel: slide.primaryCta?.label ?? "",
    primaryCtaTo: slide.primaryCta?.to ?? "",
    secondaryCtaLabel: slide.secondaryCta?.label ?? "",
    secondaryCtaHref: slide.secondaryCta?.href ?? "",
  };
}

function toNestedSlide(flat: FlatHeroSlide): HeroSlideContent {
  return {
    image: flat.image,
    heading: flat.heading,
    body: flat.body,
    primaryCta: flat.primaryCtaLabel
      ? { label: flat.primaryCtaLabel, to: flat.primaryCtaTo }
      : undefined,
    secondaryCta: flat.secondaryCtaLabel
      ? { label: flat.secondaryCtaLabel, href: flat.secondaryCtaHref }
      : undefined,
  };
}

function HeroTab() {
  const [slides, setSlides] = useState<FlatHeroSlide[]>(() =>
    getSiteContent().heroSlides.map(toFlatSlide),
  );

  const handleSave = () => {
    setSiteContent("heroSlides", slides.map(toNestedSlide));
    toast.success("Hero slides saved");
  };

  const handleReset = () => {
    resetSiteContentSection("heroSlides");
    setSlides(defaultSiteContent.heroSlides.map(toFlatSlide));
    toast.success("Reset to default");
  };

  return (
    <div className="space-y-4">
      <RepeatableListEditor
        items={slides}
        onChange={setSlides}
        itemLabel={(item, i) => item.heading || `Slide ${i + 1}`}
        emptyItem={{
          image: "",
          heading: "",
          body: "",
          primaryCtaLabel: "",
          primaryCtaTo: "",
          secondaryCtaLabel: "",
          secondaryCtaHref: "",
        }}
        fields={[
          { key: "image", label: "Image URL", type: "url" },
          { key: "heading", label: "Heading", type: "text" },
          { key: "body", label: "Body", type: "textarea" },
          { key: "primaryCtaLabel", label: "Primary Button Label", type: "text" },
          { key: "primaryCtaTo", label: "Primary Button Link", type: "text" },
          {
            key: "secondaryCtaLabel",
            label: "Secondary Button Label (optional)",
            type: "text",
          },
          {
            key: "secondaryCtaHref",
            label: "Secondary Button Link (optional)",
            type: "text",
          },
        ]}
      />
      <SectionSaveBar onSave={handleSave} onReset={handleReset} />
    </div>
  );
}

function StatsTab() {
  const [stats, setStats] = useState(() => getSiteContent().stats);

  return (
    <div className="space-y-4">
      <RepeatableListEditor
        items={stats}
        onChange={setStats}
        itemLabel={(item, i) => item.label || `Stat ${i + 1}`}
        emptyItem={{ value: "", label: "" }}
        fields={[
          { key: "value", label: "Value", type: "text" },
          { key: "label", label: "Label", type: "text" },
        ]}
      />
      <SectionSaveBar
        onSave={() => {
          setSiteContent("stats", stats);
          toast.success("Stats saved");
        }}
        onReset={() => {
          resetSiteContentSection("stats");
          setStats(defaultSiteContent.stats);
          toast.success("Reset to default");
        }}
      />
    </div>
  );
}

function ProgramsTab() {
  const [programs, setPrograms] = useState(() => getSiteContent().programs);

  return (
    <div className="space-y-4">
      <RepeatableListEditor
        items={programs}
        onChange={setPrograms}
        itemLabel={(item, i) => item.title || `Program ${i + 1}`}
        emptyItem={{ icon: "Target", title: "", description: "", image: "" }}
        fields={[
          { key: "icon", label: "Icon", type: "icon" },
          { key: "title", label: "Title", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
          { key: "image", label: "Image URL", type: "url" },
        ]}
      />
      <SectionSaveBar
        onSave={() => {
          setSiteContent("programs", programs);
          toast.success("Programs saved");
        }}
        onReset={() => {
          resetSiteContentSection("programs");
          setPrograms(defaultSiteContent.programs);
          toast.success("Reset to default");
        }}
      />
    </div>
  );
}

function FuturePlansTab() {
  const [plans, setPlans] = useState(() => getSiteContent().futurePlans);

  return (
    <div className="space-y-4">
      <RepeatableListEditor
        items={plans}
        onChange={setPlans}
        itemLabel={(item, i) => item.title || `Plan ${i + 1}`}
        emptyItem={{ icon: "Target", title: "", description: "", href: "" }}
        fields={[
          { key: "icon", label: "Icon", type: "icon" },
          { key: "title", label: "Title", type: "text" },
          { key: "description", label: "Description", type: "textarea" },
          { key: "href", label: "Link (optional)", type: "url" },
        ]}
      />
      <SectionSaveBar
        onSave={() => {
          setSiteContent("futurePlans", plans);
          toast.success("Future plans saved");
        }}
        onReset={() => {
          resetSiteContentSection("futurePlans");
          setPlans(defaultSiteContent.futurePlans);
          toast.success("Reset to default");
        }}
      />
    </div>
  );
}

function SponsorshipTab() {
  const [panel, setPanel] = useState(() => getSiteContent().sponsorshipPanel);

  const updateTiers = (tiers: SponsorshipTier[]) =>
    setPanel({ ...panel, tiers });

  return (
    <div className="space-y-6">
      <div>
        <Label>Intro Paragraphs</Label>
        <StringListEditor
          items={panel.paragraphs}
          onChange={(paragraphs) => setPanel({ ...panel, paragraphs })}
        />
      </div>

      <div>
        <Label className="mb-2 block">Sponsorship Tiers</Label>
        <RepeatableListEditor
          items={panel.tiers}
          onChange={updateTiers}
          itemLabel={(item, i) => item.name || `Tier ${i + 1}`}
          emptyItem={{ name: "", amount: "", icon: "Gift", benefits: [] }}
          fields={[
            { key: "name", label: "Name", type: "text" },
            { key: "amount", label: "Amount", type: "text" },
            { key: "icon", label: "Icon", type: "icon" },
            { key: "benefits", label: "Benefits", type: "string-list" },
          ]}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="ctaLabel">Button Label</Label>
          <Input
            id="ctaLabel"
            value={panel.ctaLabel}
            onChange={(e) => setPanel({ ...panel, ctaLabel: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="ctaLink">Button Link</Label>
          <Input
            id="ctaLink"
            value={panel.ctaLink}
            onChange={(e) => setPanel({ ...panel, ctaLink: e.target.value })}
          />
        </div>
      </div>

      <SectionSaveBar
        onSave={() => {
          setSiteContent("sponsorshipPanel", panel);
          toast.success("Sponsorship panel saved");
        }}
        onReset={() => {
          resetSiteContentSection("sponsorshipPanel");
          setPanel(defaultSiteContent.sponsorshipPanel);
          toast.success("Reset to default");
        }}
      />
    </div>
  );
}

function TestimonialsTab() {
  const [testimonials, setTestimonials] = useState(
    () => getSiteContent().testimonials,
  );

  return (
    <div className="space-y-4">
      <RepeatableListEditor
        items={testimonials}
        onChange={setTestimonials}
        itemLabel={(item, i) => item.name || `Testimonial ${i + 1}`}
        emptyItem={{ name: "", role: "", content: "", image: "" }}
        fields={[
          { key: "name", label: "Name", type: "text" },
          { key: "role", label: "Role", type: "text" },
          { key: "content", label: "Quote", type: "textarea" },
          { key: "image", label: "Image URL", type: "url" },
        ]}
      />
      <SectionSaveBar
        onSave={() => {
          setSiteContent("testimonials", testimonials);
          toast.success("Testimonials saved");
        }}
        onReset={() => {
          resetSiteContentSection("testimonials");
          setTestimonials(defaultSiteContent.testimonials);
          toast.success("Reset to default");
        }}
      />
    </div>
  );
}

function PartnersTab() {
  const [partners, setPartners] = useState(() => getSiteContent().partners);

  return (
    <div className="space-y-4">
      <RepeatableListEditor
        items={partners}
        onChange={setPartners}
        itemLabel={(item, i) => item.name || `Partner ${i + 1}`}
        emptyItem={{ name: "", logo: "" }}
        fields={[
          { key: "name", label: "Name", type: "text" },
          { key: "logo", label: "Logo Initials", type: "text" },
        ]}
      />
      <SectionSaveBar
        onSave={() => {
          setSiteContent("partners", partners);
          toast.success("Partners saved");
        }}
        onReset={() => {
          resetSiteContentSection("partners");
          setPartners(defaultSiteContent.partners);
          toast.success("Reset to default");
        }}
      />
    </div>
  );
}

function AboutBriefTab() {
  const [about, setAbout] = useState(() => getSiteContent().aboutBrief);

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="heading">Heading</Label>
        <Input
          id="heading"
          value={about.heading}
          onChange={(e) => setAbout({ ...about, heading: e.target.value })}
        />
      </div>
      <div>
        <Label>Paragraphs</Label>
        <StringListEditor
          items={about.paragraphs}
          onChange={(paragraphs) => setAbout({ ...about, paragraphs })}
        />
      </div>
      <div>
        <Label htmlFor="image">Image URL</Label>
        <Input
          id="image"
          value={about.image}
          onChange={(e) => setAbout({ ...about, image: e.target.value })}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="ctaLabel">Button Label</Label>
          <Input
            id="ctaLabel"
            value={about.ctaLabel}
            onChange={(e) => setAbout({ ...about, ctaLabel: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="ctaLink">Button Link</Label>
          <Input
            id="ctaLink"
            value={about.ctaLink}
            onChange={(e) => setAbout({ ...about, ctaLink: e.target.value })}
          />
        </div>
      </div>
      <SectionSaveBar
        onSave={() => {
          setSiteContent("aboutBrief", about);
          toast.success("About section saved");
        }}
        onReset={() => {
          resetSiteContentSection("aboutBrief");
          setAbout(defaultSiteContent.aboutBrief);
          toast.success("Reset to default");
        }}
      />
    </div>
  );
}

const SOCIAL_PLATFORM_LABEL: Record<SocialLink["platform"], string> = {
  instagram: "Instagram",
  tiktok: "TikTok",
  x: "X",
};

function FooterTab() {
  const [footer, setFooter] = useState(() => getSiteContent().footer);

  const updateSocial = (platform: SocialLink["platform"], patch: Partial<SocialLink>) => {
    setFooter({
      ...footer,
      social: footer.social.map((s) =>
        s.platform === platform ? { ...s, ...patch } : s,
      ),
    });
  };

  const updateQuickLink = (index: number, patch: Partial<{ label: string; href: string }>) => {
    setFooter({
      ...footer,
      quickLinks: footer.quickLinks.map((link, i) =>
        i === index ? { ...link, ...patch } : link,
      ),
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="tagline">Tagline</Label>
        <Input
          id="tagline"
          value={footer.tagline}
          onChange={(e) => setFooter({ ...footer, tagline: e.target.value })}
        />
      </div>
      <div>
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          value={footer.address}
          onChange={(e) => setFooter({ ...footer, address: e.target.value })}
        />
      </div>
      <div>
        <Label>Phone Numbers</Label>
        <StringListEditor
          items={footer.phones}
          onChange={(phones) => setFooter({ ...footer, phones })}
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          value={footer.email}
          onChange={(e) => setFooter({ ...footer, email: e.target.value })}
        />
      </div>

      <div>
        <Label className="mb-2 block">Quick Links</Label>
        <div className="space-y-2">
          {footer.quickLinks.map((link, index) => (
            <div key={index} className="grid grid-cols-2 gap-2">
              <Input
                value={link.label}
                placeholder="Label"
                onChange={(e) => updateQuickLink(index, { label: e.target.value })}
              />
              <Input
                value={link.href}
                placeholder="/path"
                onChange={(e) => updateQuickLink(index, { href: e.target.value })}
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label className="mb-2 block">Social Links</Label>
        <div className="space-y-3">
          {footer.social.map((link) => (
            <div key={link.platform} className="grid grid-cols-3 gap-2">
              <div className="flex items-center text-sm text-slate-500">
                {SOCIAL_PLATFORM_LABEL[link.platform]}
              </div>
              <Input
                value={link.handle}
                placeholder="Handle"
                onChange={(e) =>
                  updateSocial(link.platform, { handle: e.target.value })
                }
              />
              <Input
                value={link.href}
                placeholder="URL"
                onChange={(e) =>
                  updateSocial(link.platform, { href: e.target.value })
                }
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="copyrightName">Copyright Name</Label>
        <Input
          id="copyrightName"
          value={footer.copyrightName}
          onChange={(e) =>
            setFooter({ ...footer, copyrightName: e.target.value })
          }
        />
      </div>

      <SectionSaveBar
        onSave={() => {
          setSiteContent("footer", footer);
          toast.success("Footer saved");
        }}
        onReset={() => {
          resetSiteContentSection("footer");
          setFooter(defaultSiteContent.footer);
          toast.success("Reset to default");
        }}
      />
    </div>
  );
}

function AdminContentContent() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/admin" className="text-sm text-slate-500 hover:underline">
              &larr; Dashboard
            </Link>
            <h1 className="text-2xl">Site Content</h1>
          </div>
          <Button
            variant="outline"
            onClick={() => {
              logout();
              navigate("/admin/login");
            }}
          >
            Log Out
          </Button>
        </div>

        <Tabs defaultValue="hero">
          <TabsList className="flex-wrap h-auto">
            <TabsTrigger value="hero">Hero</TabsTrigger>
            <TabsTrigger value="stats">Stats</TabsTrigger>
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="futurePlans">Future Plans</TabsTrigger>
            <TabsTrigger value="sponsorship">Sponsorship</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            <TabsTrigger value="partners">Partners</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="footer">Footer</TabsTrigger>
          </TabsList>

          <TabsContent value="hero"><HeroTab /></TabsContent>
          <TabsContent value="stats"><StatsTab /></TabsContent>
          <TabsContent value="programs"><ProgramsTab /></TabsContent>
          <TabsContent value="futurePlans"><FuturePlansTab /></TabsContent>
          <TabsContent value="sponsorship"><SponsorshipTab /></TabsContent>
          <TabsContent value="testimonials"><TestimonialsTab /></TabsContent>
          <TabsContent value="partners"><PartnersTab /></TabsContent>
          <TabsContent value="about"><AboutBriefTab /></TabsContent>
          <TabsContent value="footer"><FooterTab /></TabsContent>
        </Tabs>
      </div>
      <Toaster />
    </div>
  );
}

export default function AdminContent() {
  return (
    <ProtectedAdminRoute requiredModule="content">
      <AdminContentContent />
    </ProtectedAdminRoute>
  );
}
