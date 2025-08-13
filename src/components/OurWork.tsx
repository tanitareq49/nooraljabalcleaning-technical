import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

// Import your project assets
import project1 from "@/assets/projects//project1.jpg";
import project2 from "@/assets/projects//project2.mp4";
import project3 from "@/assets/projects/project3.jpg";
import project4 from "@/assets/projects/project4.mp4";
import project5 from "@/assets/projects/project5.jpg";
import project6 from "@/assets/projects/project6.mp4";

const OurWork = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const projects = [
    {
      type: "image",
      src: project1,
      title: t.services.deepCleaning.title,
      description: t.services.deepCleaning.description,
    },
    {
      type: "video",
      src: project2,
      title: t.services.generalCleaning.title,
      description: t.services.generalCleaning.description,
    },
    {
      type: "image",
      src: project3,
      title: t.services.technical.title,
      description: t.services.technical.description,
    },
    {
      type: "video",
      src: project4,
      title: t.services.deepCleaning.title,
      description: t.services.deepCleaning.description,
    },
    {
      type: "image",
      src: project5,
      title: t.services.generalCleaning.title,
      description: t.services.generalCleaning.description,
    },
    {
      type: "video",
      src: project6,
      title: t.services.technical.title,
      description: t.services.technical.description,
    },
  ];

  // Optional: play video only on hover
  const handleMouseEnter = (e) => {
    if (e.currentTarget.querySelector("video")) {
      e.currentTarget.querySelector("video").play();
    }
  };
  const handleMouseLeave = (e) => {
    if (e.currentTarget.querySelector("video")) {
      e.currentTarget.querySelector("video").pause();
      e.currentTarget.querySelector("video").currentTime = 0;
    }
  };

  return (
    <section id="our-work" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black via-[#009300] to-[#015d2f] 
              bg-clip-text text-transparent animate-gradient
              drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] ${
                isRTL ? "font-arabic" : "font-english"
              }`}
          >
            {isRTL ? "أعمالنا" : "Our Work"}
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto ${
              isRTL ? "font-arabic" : "font-english"
            }`}
          >
            {isRTL
              ? "شاهد بعض مشاريعنا المنجزة والخدمات التي نقدمها"
              : "Take a look at some of our completed projects and services."}
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6 rounded-full drop-shadow-lg"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {project.type === "image" ? (
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <video
                  src={project.src}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div
                  className={`text-center text-white px-4 ${
                    isRTL ? "font-arabic text-right" : "font-english text-left"
                  }`}
                >
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
