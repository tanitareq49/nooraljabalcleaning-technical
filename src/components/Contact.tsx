import React from "react";
import { Phone, MapPin, Clock, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

const Contact = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2
            className={`text-4xl md:text-5xl font-bold text-foreground mb-4 ${
              isRTL ? "font-arabic" : "font-english"
            }`}
          >
            {t.contact.title}
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto ${
              isRTL ? "font-arabic" : "font-english"
            }`}
          >
            {t.contact.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Contact Info - Centered */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 fade-in-up">
            {/* Phone */}
            <div className="bg-card rounded-2xl p-8 shadow-soft text-center card-hover">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3
                className={`text-xl font-bold text-card-foreground mb-3 ${
                  isRTL ? "font-arabic" : "font-english"
                }`}
              >
                {isRTL ? "اتصل بنا" : "Call Us"}
              </h3>
              <a
                href="tel:+971 54 301 7347"
                className={`text-muted-foreground hover:text-primary transition-colors text-lg ${
                  isRTL ? "font-arabic" : "font-english"
                }`}
              >
                {t.contact.info.phone}
              </a>
              <a
                href="tel:+971 54 301 7347"
                className="w-full mt-4 btn-primary flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
                <span className={isRTL ? "font-arabic" : "font-english"}>
                  {isRTL ? "اتصل الآن" : "Call Now"}
                </span>
              </a>
            </div>

            {/* Location */}
            <div className="bg-card rounded-2xl p-8 shadow-soft text-center card-hover">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3
                className={`text-xl font-bold text-card-foreground mb-3 ${
                  isRTL ? "font-arabic" : "font-english"
                }`}
              >
                {isRTL ? "موقعنا" : "Our Location"}
              </h3>
              <p
                className={`text-muted-foreground text-lg ${
                  isRTL ? "font-arabic" : "font-english"
                }`}
              >
                {t.contact.info.address}
              </p>
              <div
                className={`mt-4 text-sm text-muted-foreground ${
                  isRTL ? "font-arabic" : "font-english"
                }`}
              >
                <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                  <Clock className="w-4 h-4" />
                  <span>{isRTL ? "متاح 24/7" : "Available 24/7"}</span>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-card rounded-2xl p-8 shadow-soft text-center card-hover">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-green-500" />
              </div>
              <h3
                className={`text-xl font-bold text-card-foreground mb-3 ${
                  isRTL ? "font-arabic" : "font-english"
                }`}
              >
                {isRTL ? "واتساب" : "WhatsApp"}
              </h3>
              <p
                className={`text-muted-foreground text-lg ${
                  isRTL ? "font-arabic" : "font-english"
                }`}
              >
                {isRTL
                  ? "للرد السريع والحجز الفوري"
                  : "For quick response & instant booking"}
              </p>
              <a
                href="https://wa.me/966123456789?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20cleaning%20services%20in%20Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <Globe className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
                <span className={isRTL ? "font-arabic" : "font-english"}>
                  {t.contact.whatsapp}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 fade-in-up">
          <div className="bg-primary/5 rounded-2xl p-8 text-center">
            <h3
              className={`text-2xl font-bold text-foreground mb-4 ${
                isRTL ? "font-arabic" : "font-english"
              }`}
            >
              {isRTL ? "خدمة عملاء 24/7" : "24/7 Customer Service"}
            </h3>
            <p
              className={`text-muted-foreground max-w-2xl mx-auto mb-6 ${
                isRTL ? "font-arabic" : "font-english"
              }`}
            >
              {isRTL
                ? "نحن متاحون على مدار الساعة لخدمتكم. اتصلوا بنا أو راسلونا عبر الواتساب للحصول على رد سريع."
                : "We are available round the clock to serve you. Call us or message us on WhatsApp for quick response."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center ">
              <a href="tel:+971 54 301 7347" className="btn-primary flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
                <span className={isRTL ? "font-arabic" : "font-english"}>
                  {isRTL ? "اتصل الآن" : "Call Now"}
                </span>
              </a>
              <a
                href="https://wa.me/966123456789?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20cleaning%20services%20in%20Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <Globe className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
                <span className={isRTL ? "font-arabic" : "font-english"}>
                  {t.contact.whatsapp}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
