import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const Footer = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const quickLinks = [
    { label: t.nav.home, action: () => scrollToSection('hero') },
    { label: t.nav.services, action: () => scrollToSection('services') },
    { label: t.nav.about, action: () => scrollToSection('about') },
    { label: t.nav.contact, action: () => scrollToSection('contact') }
  ];

  const serviceLinks = [
    { label: t.services.deepCleaning.title, href: '#' },
    { label: t.services.generalCleaning.title, href: '#' },
    { label: t.services.technical.title, href: '#' }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">N</span>
                </div>
                <div className={`ml-3 ${isRTL ? 'mr-3 ml-0' : ''}`}>
                  <h3 className={`text-lg font-bold ${isRTL ? 'font-arabic' : 'font-english'}`}>
                    نور الجبل
                  </h3>
                  <p className="text-sm text-secondary-foreground/70">Cleaning Services</p>
                </div>
              </div>
              
              <p className={`text-secondary-foreground/80 mb-6 leading-relaxed ${isRTL ? 'font-arabic' : 'font-english'}`}>
                {t.footer.description}
              </p>

              {/* Social Links */}
              <div className="flex space-x-4 rtl:space-x-reverse">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className={`text-lg font-bold mb-6 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                {t.footer.quickLinks}
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={link.action}
                      className={`text-secondary-foreground/80 hover:text-primary transition-colors ${isRTL ? 'font-arabic' : 'font-english'}`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className={`text-lg font-bold mb-6 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                {t.footer.services}
              </h4>
              <ul className="space-y-3">
                {serviceLinks.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className={`text-secondary-foreground/80 hover:text-primary transition-colors ${isRTL ? 'font-arabic' : 'font-english'}`}
                    >
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className={`text-lg font-bold mb-6 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                {t.footer.contact}
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href="tel:+966123456789"
                    className={`text-secondary-foreground/80 hover:text-primary transition-colors ${isRTL ? 'font-arabic' : 'font-english'}`}
                  >
                    {t.contact.info.phone}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href="mailto:info@nooraljabat.com"
                    className={`text-secondary-foreground/80 hover:text-primary transition-colors ${isRTL ? 'font-arabic' : 'font-english'}`}
                  >
                    {t.contact.info.email}
                  </a>
                </div>
                
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className={`text-secondary-foreground/80 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                    {t.contact.info.address}
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <h5 className={`font-semibold text-primary mb-2 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {isRTL ? 'ساعات العمل' : 'Working Hours'}
                </h5>
                <p className={`text-sm text-secondary-foreground/80 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {isRTL ? 'السبت - الخميس' : 'Saturday - Thursday'}
                </p>
                <p className={`text-sm text-secondary-foreground/80 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  7:00 AM - 10:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`text-secondary-foreground/60 text-sm ${isRTL ? 'font-arabic' : 'font-english'}`}>
              {t.footer.rights}
            </p>
            
            <div className="flex space-x-6 rtl:space-x-reverse">
              <a
                href="#"
                className={`text-secondary-foreground/60 hover:text-primary text-sm transition-colors ${isRTL ? 'font-arabic' : 'font-english'}`}
              >
                {t.footer.privacy}
              </a>
              <a
                href="#"
                className={`text-secondary-foreground/60 hover:text-primary text-sm transition-colors ${isRTL ? 'font-arabic' : 'font-english'}`}
              >
                {t.footer.terms}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => scrollToSection('hero')}
        className={`fixed bottom-20 z-40 bg-primary hover:bg-primary-light text-primary-foreground p-3 rounded-full shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-110 ${
          isRTL ? 'left-6' : 'right-20'
        }`}
        aria-label={isRTL ? 'العودة للأعلى' : 'Back to top'}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;