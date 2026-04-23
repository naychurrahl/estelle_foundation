import { useState } from "react";
import { useForm } from "react-hook-form";
import { MapPin, Mail, Clock, Phone, Send, LucideIcon, PersonStanding } from "lucide-react";

import {
  organizationInfo as companyInfo,
  toTitleCase,
} from "@/app/data/ngoData";

interface VolunteerForm {
  name: string;
  email: string;
  message: string;
}

interface InfoCard {
  key: any;
  info: string;
  value: string[];
  Icon?: LucideIcon;
}

export function ContactInfo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    insuranceType: "",
    message: "",
  });

  function InfoCard({key, info, value, Icon=PersonStanding}:InfoCard) {
  return (
    <div className="flex items-start" key={key}>
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
          <Icon className="text-blue-600" size={24} />
        </div>
      </div>
      <div className="ml-4">
        <h3 className="text-lg mb-1 text-gray-900">{toTitleCase(info)}</h3>
        <p className="text-gray-600">{`${value.join(", ")}`}</p>
      </div>
    </div>
  );
}

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert(
      "Thank you for contacting us! We will get back to you within 24 hours.",
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      insuranceType: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log({info: companyInfo});
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl mb-6 text-gray-900">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about {companyInfo.name}? Want to partner or just
              reach out?
            </p>

            <div className="space-y-6">
              {companyInfo.contact.map(
                (info: { name: string; values: string[] }, value: string) => (
                  <InfoCard key={value} info={info.name} value={ info.values } />
                ),
                {
                },
              {/* <div className="flex items-start" key={value}>
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg mb-1 text-gray-900">
                    {`${toTitleCase(info.name)}`}
                  </h3>
                  <p className="text-gray-600">{`${info.values}`}</p>
                </div>
              </div> */}
              )}
              {/* <InfoCard key={info} info={value.name} value={ value.values } /> */}

              {/* <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg mb-1 text-gray-900">Email</h3>
                  <p className="text-gray-600">{`${companyInfo.contact.email}`}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg mb-1 text-gray-900">twiter</h3>
                  <p className="text-gray-600">{`${companyInfo.contact.email}`}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg mb-1 text-gray-900">Email</h3>
                  <p className="text-gray-600">{`${companyInfo.contact.email}`}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg mb-1 text-gray-900">Email</h3>
                  <p className="text-gray-600">{`${companyInfo.contact.email}`}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg mb-1 text-gray-900">Email</h3>
                  <p className="text-gray-600">{`${companyInfo.contact.email}`}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg mb-1 text-gray-900">Office Address</h3>
                  <p className="text-gray-600">{`${companyInfo.contact.address}`}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                    <Clock className="text-blue-600" size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg mb-1 text-gray-900">Work Hours</h3>
                  <p className="text-gray-600">Week days: 9:00 AM - 3:00 PM</p>
                  <p className="text-gray-600">Weekends: Closed</p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl mb-6 text-gray-900">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center text-lg"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
