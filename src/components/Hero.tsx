// HeroSection.jsx

import React from "react";
import heroImage from "@/assets/hero-cleaning.jpg";
import mattressImage from "@/assets/mattress-cleaning.jpg";
import pestControlImage from "@/assets/pest-control.jpg";
import sanitizationImage from "@/assets/sanitization.jpg";

import { ArrowRight, Phone, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

const HeroSection = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const serviceImages = [mattressImage, pestControlImage, sanitizationImage];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center overflow-hidden ${
        isRTL ? "rtl" : "ltr"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional Cleaning Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-white/100"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl floating-animation"></div>
      <div
        className="absolute bottom-32 left-10 w-32 h-32 bg-primary-light/20 rounded-full blur-xl floating-animation"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary-glow/20 rounded-full blur-xl floating-animation"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div
          className={`grid lg:grid-cols-2 gap-10 items-center ${
            isRTL ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Left: Text Content */}
          <div
            className={`fade-in-up w-full max-w-[650px] mx-0 ${
              isRTL ? "lg:order-2" : ""
            }`}
          >
            <div className="inline-flex items-center space-x-1 rtl:space-x-reverse bg-green-600 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-yellow-300 text-yellow-300"
                  />
                ))}
              </div>
              <span
                className={`text-white font-medium ml-2 rtl:ml-0 rtl:mr-2 ${
                  isRTL ? "font-arabic" : "font-english"
                }`}
              >
                4.9/5 {isRTL ? "تقييم العملاء" : "Customer Rating"}
              </span>
            </div>

            <h1
              className={`text-3xl sm:text-4xl md:text-5xl font-bold 
    bg-gradient-to-r from-black via-[#009300] to-[#015d2f] 
    bg-clip-text text-transparent animate-gradient
    drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] mb-6 leading-tight 
    ${isRTL ? "font-arabic text-right" : "font-english text-left"}`}
            >
              {t.hero.title}
            </h1>

            <h2
              className={`text-lg sm:text-xl md:text-2xl drop-shadow-sm mb-4 lowercase text-black  ${
                isRTL ? "font-arabic text-right" : "font-english text-left"
              }`}
            >
              {t.hero.subtitle}
            </h2>

            <p
              className={`text-base md:text-lg text-black/70 drop-shadow-sm mb-8 leading-relaxed max-w-lg ${
                isRTL ? "font-arabic text-right" : "font-english text-left"
              }`}
            >
              {t.hero.description}
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 ${
                isRTL ? "sm:flex-row-reverse" : ""
              }`}
            >
              <a
                href="https://wa.me/966123456789?text=Hello%2C%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20cleaning%20services%20in%20Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group flex items-center gap-2"
              >
                <span>{isRTL ? "احصل عبر واتساب" : "Get via WhatsApp"}</span>
                <ArrowRight className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:+971 50 948 7147"
                className="btn-secondary bg-black group flex items-center gap-2 hover:bg-secondary hover:text-white  transition-colors ease-in-out duration-300"
              >
                <Phone className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
                <span>{t.hero.phone}</span>
              </a>
            </div>
          </div>

          {/* Right: Image Slider */}
          <div
            className={`fade-in-up w-full max-w-full lg:max-w-[600px] lg:mx-0  overflow-hidden rounded-md ${
              isRTL ? "lg:order-1" : ""
            }`}
          >
            <div className="relative w-full overflow-hidden px-4">
              <div
                className={`flex w-max animate-marquee gap-6 ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
                style={{
                  animation: `${
                    isRTL ? "marquee-rtl" : "marquee"
                  } 16s linear infinite`,
                }}
              >
                {[...serviceImages, ...serviceImages].map((image, index) => (
                  <div
                    key={index}
                    className="relative w-full h-[300px] sm:h-[400px]  lg:h-auto lg:w-[600px] aspect-[4/3] rounded-2xl overflow-hidden shadow-card border border-border/50 bg-card group"
                  >
                    <img
                      src={image}
                      alt={`Service ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-black/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-black/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
