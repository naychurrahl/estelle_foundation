import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { PrimaryButton } from "./PrimaryButton";
import { OutlineButton } from "./OutlineButton";

export function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1628717341663-0007b0ee2597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXJzJTIwaGVscGluZ3xlbnwxfHx8fDE3ODAyMjgyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-900/70" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl mb-6">
            Keep A Child in School: Empowering Futures Through Education.
          </h1>
          <p className="text-xl text-slate-200 mb-8">
            Join us in making a lasting impact through education, empowerment,
            and sustainable development initiatives.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <PrimaryButton className="text-lg px-8 py-6 hover:bg-white/10">
                Get Involved
                <ArrowRight className="ml-2 size-5" />
              </PrimaryButton>
            </Link>
            <a href="#abt">
              <OutlineButton className="text-lg px-8 py-6 border-white hover:bg-white/10">
                Learn More
              </OutlineButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
