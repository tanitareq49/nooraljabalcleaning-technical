import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const Testimonials = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-4 ${isRTL ? 'font-arabic' : 'font-english'}`}>
            {t.testimonials.title}
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${isRTL ? 'font-arabic' : 'font-english'}`}>
            {t.testimonials.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-500 card-hover fade-in-up relative`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 rtl:left-auto rtl:right-8 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-primary-foreground" />
              </div>

              {/* Stars */}
              <div className="flex items-center space-x-1 rtl:space-x-reverse mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className={`text-card-foreground leading-relaxed mb-6 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4 rtl:mr-0 rtl:ml-4">
                  <span className="text-primary-foreground font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className={`font-bold text-card-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}>
                    {testimonial.name}
                  </div>
                  <div className={`text-muted-foreground text-sm ${isRTL ? 'font-arabic' : 'font-english'}`}>
                    {testimonial.location}
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-primary rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in-up">
          <div className="bg-card rounded-2xl p-8 shadow-soft border border-primary/10">
            <h3 className={`text-2xl font-bold text-card-foreground mb-4 ${isRTL ? 'font-arabic' : 'font-english'}`}>
              {isRTL ? 'انضم إلى عملائنا الراضين' : 'Join Our Satisfied Customers'}
            </h3>
            <p className={`text-muted-foreground mb-6 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : 'font-english'}`}>
              {isRTL 
                ? 'اكتشف لماذا يثق المئات من العملاء في خدماتنا للحصول على تنظيف وصيانة احترافية.' 
                : 'Discover why hundreds of customers trust our services for professional cleaning and maintenance.'
              }
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center space-x-2 rtl:space-x-reverse bg-primary/10 px-4 py-2 rounded-full">
                <Star className="w-4 h-4 text-primary" />
                <span className={`text-primary font-medium text-sm ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  4.9/5 {isRTL ? 'تقييم' : 'Rating'}
                </span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse bg-primary/10 px-4 py-2 rounded-full">
                <span className={`text-primary font-medium text-sm ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  500+ {isRTL ? 'عميل راضي' : 'Happy Clients'}
                </span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse bg-primary/10 px-4 py-2 rounded-full">
                <span className={`text-primary font-medium text-sm ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {isRTL ? 'مرخص ومؤمن' : 'Licensed & Insured'}
                </span>
              </div>
            </div>

            <button className="btn-primary">
              <span className={isRTL ? 'font-arabic' : 'font-english'}>
                {isRTL ? 'احجز خدمتك الآن' : 'Book Your Service Now'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;