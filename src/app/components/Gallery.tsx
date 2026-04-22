import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { gallery } from "@/app/data/ngoData";

const galleryData = gallery;

const galleryImages = galleryData.galleryImages;
const galleryCategories = ["all", ...galleryData.galleryCategories];

export function Gallery() {
  //const galleryImages = galleryImagesData();
  
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(to right, var(--brand-blue-700), var(--brand-blue-900))', color: 'var(--brand-white)' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6">Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--brand-blue-100)' }}>
            Explore moments from our journey - from client meetings to team celebrations and corporate events.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 sticky top-16 z-40" style={{ backgroundColor: 'var(--brand-gray-50)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="px-6 py-2 rounded-full transition-colors capitalize"
                style={{
                  backgroundColor: selectedCategory === category ? 'var(--brand-blue-600)' : 'var(--brand-white)',
                  color: selectedCategory === category ? 'var(--brand-white)' : 'var(--brand-gray-700)',
                  border: selectedCategory === category ? 'none' : '1px solid var(--brand-gray-300)',
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 style={{ color: 'var(--brand-white)' }} className="text-xl">{image.title}</h3>
                    <p className="text-sm capitalize" style={{ color: 'var(--brand-blue-200)' }}>{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg" style={{ color: 'var(--brand-gray-600)' }}>No images found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
