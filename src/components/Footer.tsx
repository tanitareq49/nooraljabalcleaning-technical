import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const quickLinks = [
    { label: t.nav.home, action: () => scrollToSection("hero") },
    { label: t.nav.services, action: () => scrollToSection("services") },
    { label: t.nav.about, action: () => scrollToSection("about") },
    { label: t.nav.contact, action: () => scrollToSection("contact") },
  ];

  const serviceLinks = [
    { label: t.services.deepCleaning.title, href: "#" },
    { label: t.services.generalCleaning.title, href: "#" },
    { label: t.services.technical.title, href: "#" },
  ];

  return (
    <footer className="bg-black text-secondary-foreground relative overflow-hidden">
      {/* Gradient Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex-shrink-0 flex items-center w-16 h-16 md:w-20 md:h-20 mb-4">
              <a href="#" onClick={() => scrollToSection("hero")}>
                <img
                  src={logo}
                  alt="NJS Cleaning & Technical Services"
                  className="object-contain w-full h-full"
                />
              </a>
            </div>
            <p
              className={`text-secondary-foreground/80 leading-relaxed ${
                isRTL ? "font-arabic" : "font-english"
              }`}
            >
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className={`text-lg font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 ${
                isRTL ? "font-arabic" : "font-english"
              }`}
            >
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className={`text-secondary-foreground/80 hover:text-gradient-primary transition-all duration-300 ${
                      isRTL ? "font-arabic" : "font-english"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className={`text-lg font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 ${
                isRTL ? "font-arabic" : "font-english"
              }`}
            >
              {t.footer.services}
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service, index) => (
                <li key={index}>
                  <a
                    onClick={() => scrollToSection("services")}
                    className={`text-secondary-foreground/80 hover:text-gradient-primary transition-all duration-300 cursor-pointer ${
                      isRTL ? "font-arabic" : "font-english"
                    }`}
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className={`text-lg font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 ${
                isRTL ? "font-arabic" : "font-english"
              }`}
            >
              {t.footer.contact}
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="w-5 h-5 text-gradient-primary flex-shrink-0" />
                <a
                  href={`tel:${t.contact.info.phone}`}
                  className="text-secondary-foreground/80 hover:text-gradient-primary transition-colors"
                >
                  {t.contact.info.phone}
                </a>
              </div>

              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="w-5 h-5 text-gradient-primary flex-shrink-0" />
                <a
                  href={`mailto:${t.contact.info.email}`}
                  className="text-secondary-foreground/80 hover:text-gradient-primary transition-colors"
                >
                  {t.contact.info.email}
                </a>
              </div>

              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin className="w-5 h-5 text-gradient-primary flex-shrink-0 mt-1" />
                <p className="text-secondary-foreground/80">
                  {t.contact.info.address}
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="mt-6 p-4 bg-gradient-to-r from-green-900/10 to-green-900/5 rounded-xl border border-green-800/20">
              <h5 className="font-semibold text-gradient-primary mb-2">
                {isRTL ? "ساعات العمل" : "Working Hours"}
              </h5>
              <p className="text-sm text-secondary-foreground/80">
                {isRTL ? "السبت - الخميس" : "Saturday - Thursday"}
              </p>
              <p className="text-sm text-secondary-foreground/80">
                7:00 AM - 10:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-green-800/20 py-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-foreground/60 text-sm">
              {t.footer.rights}
            </p>
            <div className="flex space-x-6 rtl:space-x-reverse">
              <a
                href="#"
                className="text-secondary-foreground/60 hover:text-gradient-primary text-sm transition-colors"
              >
                {t.footer.privacy}
              </a>
              <a
                href="#"
                className="text-secondary-foreground/60 hover:text-gradient-primary text-sm transition-colors"
              >
                {t.footer.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
