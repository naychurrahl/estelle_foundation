import { Heart } from "lucide-react";

export interface HeroMinor {
  page: String;
  text: String;
}

export function HeroMinor({ page = "Page", text = "lorem ipsum should I hsve to keep typing this shit because I do not have data?"}: HeroMinor) {
  return (
    <section className="bg-gradient-blue-dark text-brand-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl mb-6 text-brand-white">
          {page}
        </h1>
        <p className="text-xl text-brand-blue-100 max-w-3xl mx-auto">
          {text}
        </p>
      </div>
    </section>
  );
}
