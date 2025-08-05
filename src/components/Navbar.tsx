import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-medium' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">N</span>
            </div>
            <div className={`ml-3 ${isRTL ? 'mr-3 ml-0' : ''}`}>
              <h1 className={`text-lg font-bold text-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}>
                نور الجبل
              </h1>
              <p className="text-xs text-muted-foreground">Cleaning Services</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8 rtl:space-x-reverse">
              <button
                onClick={() => scrollToSection('hero')}
                className={`text-foreground hover:text-primary transition-colors font-medium ${isRTL ? 'font-arabic' : 'font-english'}`}
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`text-foreground hover:text-primary transition-colors font-medium ${isRTL ? 'font-arabic' : 'font-english'}`}
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`text-foreground hover:text-primary transition-colors font-medium ${isRTL ? 'font-arabic' : 'font-english'}`}
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`text-foreground hover:text-primary transition-colors font-medium ${isRTL ? 'font-arabic' : 'font-english'}`}
              >
                {t.nav.contact}
              </button>
            </div>
          </div>

          {/* Language Toggle & Phone */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <a
              href="tel:+966123456789"
              className="flex items-center space-x-2 rtl:space-x-reverse text-primary hover:text-primary-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className={`font-medium ${isRTL ? 'font-arabic' : 'font-english'}`}>
                {t.hero.phone}
              </span>
            </a>
            
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 rtl:space-x-reverse bg-primary/10 hover:bg-primary/20 px-3 py-2 rounded-lg transition-colors"
            >
              <Globe className="w-4 h-4 text-primary" />
              <span className={`text-primary font-medium ${isRTL ? 'font-arabic' : 'font-english'}`}>
                {t.nav.language}
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('hero')}
                className={`block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors font-medium ${isRTL ? 'font-arabic text-right' : 'font-english'}`}
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors font-medium ${isRTL ? 'font-arabic text-right' : 'font-english'}`}
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors font-medium ${isRTL ? 'font-arabic text-right' : 'font-english'}`}
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors font-medium ${isRTL ? 'font-arabic text-right' : 'font-english'}`}
              >
                {t.nav.contact}
              </button>
              
              <div className="border-t border-border pt-3 mt-3">
                <a
                  href="tel:+966123456789"
                  className={`flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 text-primary hover:bg-accent rounded-md transition-colors font-medium ${isRTL ? 'font-arabic' : 'font-english'}`}
                >
                  <Phone className="w-4 h-4" />
                  <span>{t.hero.phone}</span>
                </a>
                
                <button
                  onClick={toggleLanguage}
                  className={`flex items-center space-x-2 rtl:space-x-reverse w-full px-3 py-2 text-primary hover:bg-accent rounded-md transition-colors font-medium ${isRTL ? 'font-arabic' : 'font-english'}`}
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