import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { GalleryGrid } from "../components/GalleryGrid";
import { FadeIn } from "../components/FadeIn";

export default function Gallery() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="max-w-3xl">
                <h1 className="text-5xl mb-6">Gallery</h1>
                <p className="text-xl text-purple-100">
                  Explore the moments that capture our impact, from educational
                  workshops to community events and environmental initiatives.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <GalleryGrid />
      </main>
      <Footer />
    </div>
  );
}
