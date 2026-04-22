import { useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import Logo from "@/app/ui/logo";
import { services } from "@/app/data/ngoData";

import { organizationInfo } from "@/app/data/ngoData";


export function MapBlock() {

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-center mb-8 text-gray-900">
          Visit Our Office
        </h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="aspect-video bg-gray-200 flex items-center p-2 justify-center">
            <iframe
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps?q=${organizationInfo.contact.address}&z=15&output=embed`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
