import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

interface Settings {
  title: string;
  subheading?: string;
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  responsive: {
    breakpoint: number;
    settings: {
      slidesToShow: number;
    };
  }[];
}

const setting: Settings = {
  title: "Our Projects",
  subheading:
    "Discover the initiatives transforming lives and communities around the world",
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Card = ({
  projects,
  settings,
}: {
  projects: string;
  settings: Settings;
}) => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Heading and whatnot */}
      <div className="text-center mb-12">
        <h2 className="text-4xl mb-4">{settings.title}</h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          {settings.subheading}
        </p>
      </div>

      {/* 
      id
      image
      title
      description
       */}
      {/* Carousel */}
      <div className="px-4">
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="flex px-3">
              <div className="border-4 border-orange-800/30 hover:border-orange-800/70 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="aspect-[4/3] overflow-hidden shadow-lg m-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-3 text-orange-600">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export function Carousel({
  id = "carousel",
  project,
  settings = setting,
  css = "bg-gradient-to-br from-cream-50 to-orange-50",
  Kard = Card,
}: {
  id?: string;
  project: string[];
  settings?: Settings;
  css?: string;
  Kard?: React.ElementType;
}) {
  settings = { ...setting, ...settings };

  return (
    <section id={id} className={`py-20 px-4 ${css} `}>
      <Kard projects={project} settings={settings} />
    </section>
  );
}
