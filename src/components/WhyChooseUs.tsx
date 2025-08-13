import React from "react";
import { Users, Clock, Leaf, Shield, Award, DollarSign } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

const WhyChooseUs = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const icons = [Users, Clock, Leaf, Shield, Award, DollarSign];

  return (
    <section className="py-20 bg-background">
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
            {t.whyChoose.title}
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto ${
              isRTL ? "font-arabic" : "font-english"
            }`}
          >
            {t.whyChoose.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.whyChoose.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className={`group bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-500 card-hover fade-in-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3
                  className={`text-xl font-bold text-card-foreground mb-4 ${
                    isRTL ? "font-arabic" : "font-english"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-muted-foreground leading-relaxed ${
                    isRTL ? "font-arabic" : "font-english"
                  }`}
                >
                  {item.description}
                </p>

                {/* Decorative Element */}
                <div className="mt-6 w-12 h-1 bg-primary/30 group-hover:bg-primary group-hover:w-16 transition-all duration-300 rounded-full"></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-primary rounded-2xl p-8 md:p-12 text-center fade-in-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                500+
              </div>
              <div
                className={`text-primary-foreground/80 ${
                  isRTL ? "font-arabic" : "font-english"
                }`}
              >
                {isRTL ? "مشروع مكتمل" : "Projects Completed"}
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                5+
              </div>
              <div
                className={`text-primary-foreground/80 ${
                  isRTL ? "font-arabic" : "font-english"
                }`}
              >
                {isRTL ? "سنوات خبرة" : "Years Experience"}
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                99%
              </div>
              <div
                className={`text-primary-foreground/80 ${
                  isRTL ? "font-arabic" : "font-english"
                }`}
              >
                {isRTL ? "رضا العملاء" : "Client Satisfaction"}
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                24/7
              </div>
              <div
                className={`text-primary-foreground/80 ${
                  isRTL ? "font-arabic" : "font-english"
                }`}
              >
                {isRTL ? "دعم متاح" : "Support Available"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
