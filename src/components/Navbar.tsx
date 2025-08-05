import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-secondary/95 backdrop-blur-md shadow-medium' : 'bg-secondary/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="/lovable-uploads/0fe9d626-97a2-4870-a0c7-2d4d412669a6.png"
              alt="NJS Cleaning & Technical Services"
              className="w-12 h-12 object-contain"
            />
            <div className={`ml-3 ${isRTL ? 'mr-3 ml-0' : ''}`}>
              <h1 className={`text-lg font-bold text-white ${isRTL ? 'font-arabic' : 'font-english'}`}>
                NJS
              </h1>
              <p className="text-xs text-white/70">Cleaning & Technical</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8 rtl:space-x-reverse">
              <button
                onClick={() => scrollToSection('hero')}
                className={`text-white hover:text-primary transition-colors font-medium ${isRTL ? 'font-arabic' : 'font-english'}`}
              >
                {t.nav.home}
              </button>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`flex items-center space-x-1 rtl:space-x-reverse text-white hover:text-primary transition-colors font-medium ${isRTL ? 'font-arabic' : 'font-english'}`}
                >
                  <span>{t.nav.services}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesOpen && (
                  <div className="absolute top-full left-0 rtl:left-auto rtl:right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-border overflow-hidden z-10">
                    <button
                      onClick={() => {scrollToSection('services'); setServicesOpen(false);}}
                      className={`w-full px-4 py-3 text-left rtl:text-right hover:bg-accent transition-colors text-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}
                    >
                      {isRTL ? 'التنظيف العميق' : 'Deep Cleaning Services'}
                    </button>
                    <button
                      onClick={() => {scrollToSection('services'); setServicesOpen(false);}}
                      className={`w-full px-4 py-3 text-left rtl:text-right hover:bg-accent transition-colors text-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}
                    >
                      {isRTL ? 'التنظيف العام' : 'General Cleaning Services'}
                    </button>
                    <button
                      onClick={() => {scrollToSection('services'); setServicesOpen(false);}}
                      className={`w-full px-4 py-3 text-left rtl:text-right hover:bg-accent transition-colors text-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}
                    >
                      {isRTL ? 'الخدمات الفنية' : 'Technical Services'}
                    </button>
                  </div>
                )}
              </div>
              
              <button
                onClick={() => scrollToSection('about')}
                className={`text-white hover:text-primary transition-colors font-medium ${isRTL ? 'font-arabic' : 'font-english'}`}
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`text-white hover:text-primary transition-colors font-medium ${isRTL ? 'font-arabic' : 'font-english'}`}
              >
                {t.nav.contact}
              </button>
            </div>
          </div>

          {/* Language Toggle & Phone */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <a
              href="tel:+966123456789"
              className="flex items-center space-x-2 rtl:space-x-reverse text-white hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className={`font-medium ${isRTL ? 'font-arabic' : 'font-english'}`}>
                {t.hero.phone}
              </span>
            </a>
            
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 rtl:space-x-reverse bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg transition-colors"
            >
              <Globe className="w-4 h-4 text-white" />
              <span className={`text-white font-medium ${isRTL ? 'font-arabic' : 'font-english'}`}>
                {t.nav.language}
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-secondary/95 backdrop-blur-md border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('hero')}
                className={`block w-full text-left px-3 py-2 text-white hover:text-primary hover:bg-accent/20 rounded-md transition-colors font-medium ${isRTL ? 'font-arabic text-right' : 'font-english'}`}
              >
                {t.nav.home}
              </button>
              <div className="space-y-1">
                <button
                  onClick={() => scrollToSection('services')}
                  className={`block w-full text-left px-3 py-2 text-white hover:text-primary hover:bg-accent/20 rounded-md transition-colors font-medium ${isRTL ? 'font-arabic text-right' : 'font-english'}`}
                >
                  {t.nav.services}
                </button>
                <div className="ml-4 rtl:ml-0 rtl:mr-4 space-y-1">
                  <button
                    onClick={() => {scrollToSection('services'); setIsOpen(false);}}
                    className={`block w-full text-left px-3 py-2 text-white/80 hover:text-primary hover:bg-accent/20 rounded-md transition-colors text-sm ${isRTL ? 'font-arabic text-right' : 'font-english'}`}
                  >
                    {isRTL ? 'التنظيف العميق' : 'Deep Cleaning'}
                  </button>
                  <button
                    onClick={() => {scrollToSection('services'); setIsOpen(false);}}
                    className={`block w-full text-left px-3 py-2 text-white/80 hover:text-primary hover:bg-accent/20 rounded-md transition-colors text-sm ${isRTL ? 'font-arabic text-right' : 'font-english'}`}
                  >
                    {isRTL ? 'التنظيف العام' : 'General Cleaning'}
                  </button>
                  <button
                    onClick={() => {scrollToSection('services'); setIsOpen(false);}}
                    className={`block w-full text-left px-3 py-2 text-white/80 hover:text-primary hover:bg-accent/20 rounded-md transition-colors text-sm ${isRTL ? 'font-arabic text-right' : 'font-english'}`}
                  >
                    {isRTL ? 'الخدمات الفنية' : 'Technical Services'}
                  </button>
                </div>
              </div>
              <button
                onClick={() => scrollToSection('about')}
                className={`block w-full text-left px-3 py-2 text-white hover:text-primary hover:bg-accent/20 rounded-md transition-colors font-medium ${isRTL ? 'font-arabic text-right' : 'font-english'}`}
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`block w-full text-left px-3 py-2 text-white hover:text-primary hover:bg-accent/20 rounded-md transition-colors font-medium ${isRTL ? 'font-arabic text-right' : 'font-english'}`}
              >
                {t.nav.contact}
              </button>
              
              <div className="border-t border-border pt-3 mt-3">
                <a
                  href="tel:+966123456789"
                  className={`flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 text-white hover:bg-accent/20 rounded-md transition-colors font-medium ${isRTL ? 'font-arabic' : 'font-english'}`}
                >
                  <Phone className="w-4 h-4" />
                  <span>{t.hero.phone}</span>
                </a>
                
                <button
                  onClick={toggleLanguage}
                  className={`flex items-center space-x-2 rtl:space-x-reverse w-full px-3 py-2 text-white hover:bg-accent/20 rounded-md transition-colors font-medium ${isRTL ? 'font-arabic' : 'font-english'}`}
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