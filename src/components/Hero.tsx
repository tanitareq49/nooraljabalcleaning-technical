import React from 'react';
import { ArrowRight, Phone, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import heroImage from '@/assets/hero-cleaning.jpg';

const Hero = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Professional Cleaning Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl floating-animation"></div>
      <div className="absolute bottom-32 left-10 w-32 h-32 bg-primary-light/20 rounded-full blur-xl floating-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary-glow/20 rounded-full blur-xl floating-animation" style={{ animationDelay: '4s' }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`fade-in-up ${isRTL ? 'lg:order-2' : ''}`}>
            {/* Rating Badge */}
            <div className="inline-flex items-center space-x-1 rtl:space-x-reverse bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className={`text-white font-medium ml-2 rtl:ml-0 rtl:mr-2 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                4.9/5 {isRTL ? 'تقييم العملاء' : 'Customer Rating'}
              </span>
            </div>

            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight ${isRTL ? 'font-arabic' : 'font-english'}`}>
              {t.hero.title}
            </h1>
            
            <h2 className={`text-xl md:text-2xl text-white/90 mb-4 ${isRTL ? 'font-arabic' : 'font-english'}`}>
              {t.hero.subtitle}
            </h2>
            
            <p className={`text-lg text-white/80 mb-8 leading-relaxed max-w-lg ${isRTL ? 'font-arabic' : 'font-english'}`}>
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/966123456789?text=Hello%2C%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20cleaning%20services%20in%20Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                <span>{isRTL ? 'احصل على عرض مجاني عبر واتساب' : 'Get Free Quote via WhatsApp'}</span>
                <ArrowRight className={`w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform`} />
              </a>
              
              <a
                href="tel:+966123456789"
                className="btn-secondary group"
              >
                <Phone className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
                <span>{t.hero.phone}</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className={`mt-10 flex flex-wrap gap-6 text-white/70 ${isRTL ? 'font-arabic' : 'font-english'}`}>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">
                  {isRTL ? 'مرخص ومؤمن' : 'Licensed & Insured'}
                </span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">
                  {isRTL ? '5+ سنوات خبرة' : '5+ Years Experience'}
                </span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">
                  {isRTL ? 'ضمان الرضا' : 'Satisfaction Guaranteed'}
                </span>
              </div>
            </div>
          </div>

          {/* Stats/Features Side */}
          <div className={`fade-in-up lg:delay-300 ${isRTL ? 'lg:order-1' : ''}`}>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 card-hover">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className={`text-white/80 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {isRTL ? 'عميل راضي' : 'Happy Clients'}
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 card-hover">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className={`text-white/80 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {isRTL ? 'دعم العملاء' : 'Customer Support'}
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 card-hover">
                <div className="text-3xl font-bold text-white mb-2">99%</div>
                <div className={`text-white/80 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {isRTL ? 'معدل الرضا' : 'Satisfaction Rate'}
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 card-hover">
                <div className="text-3xl font-bold text-white mb-2">1</div>
                <div className={`text-white/80 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {isRTL ? 'مدينة نخدمها' : 'City Served'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;