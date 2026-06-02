import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { PrimaryButton } from "./PrimaryButton";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

export function ContactSponsorshipForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sponsorshipType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your interest! We'll be in touch soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      sponsorshipType: "",
      message: "",
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <FadeIn>
            <div>
              <SectionLabel>Get in Touch</SectionLabel>
              <SectionHeading>Contact & Sponsorship</SectionHeading>
              <p className="text-slate-600 mb-8">
                Whether you want to volunteer, sponsor, or learn more about our programs, we'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <MapPin className="size-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-1">Visit Us</h3>
                    <p className="text-slate-600 text-sm">
                      123 Community Street<br />
                      City, ST 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <Phone className="size-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-1">Call Us</h3>
                    <p className="text-slate-600 text-sm">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <Mail className="size-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-1">Email Us</h3>
                    <p className="text-slate-600 text-sm">info@communityoutreach.org</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.2}>
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="sponsorshipType">I'm interested in</Label>
                    <Select
                      value={formData.sponsorshipType}
                      onValueChange={(value) => setFormData({ ...formData, sponsorshipType: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="volunteering">Volunteering</SelectItem>
                        <SelectItem value="friend">Friend Sponsorship ($50/mo)</SelectItem>
                        <SelectItem value="supporter">Supporter Sponsorship ($100/mo)</SelectItem>
                        <SelectItem value="champion">Champion Sponsorship ($250/mo)</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <PrimaryButton type="submit" className="w-full">
                    <Send className="mr-2 size-4" />
                    Send Message
                  </PrimaryButton>
                </form>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
