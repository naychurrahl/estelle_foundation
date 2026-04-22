import { organizationInfo } from "@/app/data/ngoData";
import { Mail, Phone, MapPin, Globe, Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">
          Testimonials
        </h2>
        <p className="text-2xl md:text-2xl text-center mb-12 text-gray-600">
          Things people have to say about { organizationInfo.name}.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-xl mb-3 text-gray-900">
              "Phindol Insurance Brokers saved me 35% on my Toyota Corolla
              insurance in Abuja. Super fast!"
            </h3>
            <p className="text-gray-600">– Chinedu O., Abuja</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-xl mb-3 text-gray-900">
              "Best health insurance brokers in Nigeria. Seamless process!"
            </h3>
            <p className="text-gray-600">– Fatima A., Abuja</p>
          </div>
        </div>
      </div>
    </section>
  );
}
