import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Globe, Home, Users, Sparkles } from "lucide-react"; // Imported Sparkles for services icon
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { language, toggleLanguage, isRTL } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-secondary-foreground/100 backdrop-blur-md shadow-lg"
          : "bg-secondary-foreground/100 backdrop-blur-md shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-16">
            <a href="#" onClick={() => scrollToSection("hero")}>
              <img
                src={logo}
                alt="NJS Cleaning & Technical Services"
                className="object-contain w-full h-full"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8 rtl:space-x-reverse">
              <button
                onClick={() => scrollToSection("hero")}
                className={`flex items-center space-x-1 rtl:space-x-reverse text-foreground hover:text-primary transition-colors font-medium ${
                  isRTL ? "font-arabic" : "font-english"
                }`}
              >
                <Home className="w-4 h-4" />
                <span>{t.nav.home}</span>
              </button>

              {/* Services Dropdown - Now with an icon */}
              <div className="relative">
                <button
                  onClick={() => scrollToSection("services")}
                  className={`flex items-center space-x-1 rtl:space-x-reverse text-foreground hover:text-primary transition-colors font-medium ${
                    isRTL ? "font-arabic" : "font-english"
                  }`}
                >
                  <Sparkles className="w-4 h-4" /> {/* Services Icon */}
                  <span>{t.nav.services}</span>
                </button>
              </div>

              <button
                onClick={() => scrollToSection("about")}
                className={`flex items-center space-x-1 rtl:space-x-reverse text-foreground hover:text-primary transition-colors font-medium ${
                  isRTL ? "font-arabic" : "font-english"
                }`}
              >
                <Users className="w-4 h-4" />
                <span>{t.nav.about}</span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`flex items-center space-x-1 rtl:space-x-reverse text-foreground hover:text-primary transition-colors font-medium ${
                  isRTL ? "font-arabic" : "font-english"
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>{t.nav.contact}</span>
              </button>
            </div>
          </div>

          {/* Language Toggle & Phone */}
          <div className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
            <a
              href="tel:+971 50 948 7147"
              className="flex items-center space-x-2 rtl:space-x-reverse text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span
                className={`font-medium ${
                  isRTL ? "font-arabic" : "font-english"
                }`}
              >
                {t.hero.phone}
              </span>
            </a>

            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 rtl:space-x-reverse bg-foreground/10 hover:bg-foreground/20 px-3 py-2 rounded-lg transition-colors"
            >
              <Globe className="w-4 h-4 text-foreground" />
              <span
                className={`text-foreground font-medium ${
                  isRTL ? "font-arabic" : "font-english"
                }`}
              >
                {t.nav.language}
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-secondary-foreground/95 backdrop-blur-md border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("hero")}
                className={`flex items-center space-x-2 rtl:space-x-reverse block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-accent/20 rounded-md transition-colors font-medium ${
                  isRTL ? "font-arabic text-right" : "font-english"
                }`}
              >
                <Home className="w-5 h-5" />
                <span>{t.nav.home}</span>
              </button>
              <div className="space-y-1">
                <button
                  onClick={() => scrollToSection("services")}
                  className={`flex items-center space-x-2 rtl:space-x-reverse block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-accent/20 rounded-md transition-colors font-medium ${
                    isRTL ? "font-arabic text-right" : "font-english"
                  }`}
                >
                  <Sparkles className="w-5 h-5" /> {/* Services Icon */}
                  <span>{t.nav.services}</span>
                </button>
              </div>
              <button
                onClick={() => scrollToSection("about")}
                className={`flex items-center space-x-2 rtl:space-x-reverse block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-accent/20 rounded-md transition-colors font-medium ${
                  isRTL ? "font-arabic text-right" : "font-english"
                }`}
              >
                <Users className="w-5 h-5" />
                <span>{t.nav.about}</span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`flex items-center space-x-2 rtl:space-x-reverse block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-accent/20 rounded-md transition-colors font-medium ${
                  isRTL ? "font-arabic text-right" : "font-english"
                }`}
              >
                <Phone className="w-5 h-5" />
                <span>{t.nav.contact}</span>
              </button>

              <div className="border-t border-border pt-3 mt-3">
                <a
                  href="tel:+971 50 948 7147"
                  className={`flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 text-foreground hover:bg-accent/20 rounded-md transition-colors font-medium ${
                    isRTL ? "font-arabic" : "font-english"
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  <span>{t.hero.phone}</span>
                </a>

                <button
                  onClick={toggleLanguage}
                  className={`flex items-center space-x-2 rtl:space-x-reverse w-full px-3 py-2 text-foreground hover:bg-accent/20 rounded-md transition-colors font-medium ${
                    isRTL ? "font-arabic" : "font-english"
                  }`}
                >
                  <Globe className="w-4 h-4" />
                  <span>{t.nav.language}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
