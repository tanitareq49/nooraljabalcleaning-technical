import React from "react";
import { Sparkles, Home, Wrench, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import deepCleaningImage from "@/assets/deep-cleaning.jpg";
import technicalImage from "@/assets/technical-services.jpg";

const Services = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const services = [
    {
      icon: Sparkles,
      title: t.services.deepCleaning.title,
      description: t.services.deepCleaning.description,
      items: t.services.deepCleaning.items,
      image: deepCleaningImage,
      gradient: "from-primary to-primary-light",
    },
    {
      icon: Home,
      title: t.services.generalCleaning.title,
      description: t.services.generalCleaning.description,
      items: t.services.generalCleaning.items,
      image: deepCleaningImage, // Reusing for now
      gradient: "from-secondary to-secondary/80",
    },
    {
      icon: Wrench,
      title: t.services.technical.title,
      description: t.services.technical.description,
      items: t.services.technical.items,
      image: technicalImage,
      gradient: "from-primary-light to-primary",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2
            className={`text-4xl md:text-5xl font-bold text-foreground mb-4 drop-shadow-md ${
              isRTL ? "font-arabic" : "font-english"
            }`}
          >
            {t.services.title}
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto ${
              isRTL ? "font-arabic" : "font-english"
            }`}
          >
            {t.services.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6 rounded-full drop-shadow-lg"></div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-500 overflow-hidden card-hover fade-in-up group`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80 group-hover:opacity-60 transition-opacity duration-500`}
                ></div>

                {/* Icon */}
                <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-12">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className={`text-xl font-bold text-card-foreground mb-3 ${
                    isRTL ? "font-arabic" : "font-english"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-muted-foreground mb-6 leading-relaxed ${
                    isRTL ? "font-arabic" : "font-english"
                  }`}
                >
                  {service.description}
                </p>

                {/* Service Items */}
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span
                        className={`text-card-foreground ${
                          isRTL ? "font-arabic" : "font-english"
                        }`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="https://wa.me/966123456789?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20cleaning%20services%20in%20Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-6 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary font-semibold py-3 px-6 rounded-lg transition-all duration-300 group block text-center"
                >
                  <span className={isRTL ? "font-arabic" : "font-english"}>
                    {isRTL ? "اطلب الخدمة عبر واتساب" : "Request via WhatsApp"}
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in-up">
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <h3
              className={`text-2xl font-bold text-card-foreground mb-4 ${
                isRTL ? "font-arabic" : "font-english"
              }`}
            >
              {isRTL ? "تحتاج خدمة مخصصة؟" : "Need a Custom Service?"}
            </h3>
            <p
              className={`text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed ${
                isRTL ? "font-arabic" : "font-english"
              }`}
            >
              {isRTL
                ? "اتصل بنا لمناقشة احتياجاتك الخاصة وسنقدم لك حلولاً مخصصة تناسب متطلباتك."
                : "Contact us to discuss your specific needs and we'll provide customized solutions that fit your requirements."}
            </p>
            <a
              href="https://wa.me/966123456789?text=Hello%2C%20I%20would%20like%20a%20free%20consultation%20for%20cleaning%20services%20in%20Dubai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span className={isRTL ? "font-arabic" : "font-english"}>
                {isRTL
                  ? "احصل على استشارة مجانية عبر واتساب"
                  : "Get Free Consultation via WhatsApp"}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
