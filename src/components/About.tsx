import React from 'react';
import { MapPin, Calendar, Award, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const About = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const highlights = [
    {
      icon: Award,
      title: t.about.details.license,
      color: 'text-primary'
    },
    {
      icon: Calendar,
      title: t.about.details.experience,
      color: 'text-secondary'
    },
    {
      icon: MapPin,
      title: t.about.details.location,
      color: 'text-primary-light'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-4 ${isRTL ? 'font-arabic' : 'font-english'}`}>
            {t.about.title}
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${isRTL ? 'font-arabic' : 'font-english'}`}>
            {t.about.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`fade-in-up ${isRTL ? 'lg:order-2' : ''}`}>
            <p className={`text-lg text-muted-foreground leading-relaxed mb-8 ${isRTL ? 'font-arabic' : 'font-english'}`}>
              {t.about.description}
            </p>

            {/* Highlights */}
            <div className="space-y-6 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className={`w-12 h-12 rounded-full bg-${highlight.color.split('-')[1]}/10 flex items-center justify-center`}>
                    <highlight.icon className={`w-6 h-6 ${highlight.color}`} />
                  </div>
                  <span className={`text-foreground font-medium ${isRTL ? 'font-arabic' : 'font-english'}`}>
                    {highlight.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Mission */}
            <div className="bg-card rounded-2xl p-6 shadow-soft">
              <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                <Target className="w-6 h-6 text-primary" />
                <h3 className={`text-xl font-bold text-card-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {isRTL ? 'مهمتنا' : 'Our Mission'}
                </h3>
              </div>
              <p className={`text-muted-foreground leading-relaxed ${isRTL ? 'font-arabic' : 'font-english'}`}>
                {t.about.details.mission}
              </p>
            </div>
          </div>

          {/* Visual Elements */}
          <div className={`fade-in-up ${isRTL ? 'lg:order-1' : ''}`}>
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-primary rounded-2xl p-8 text-center shadow-strong">
                <div className="text-6xl font-bold text-primary-foreground mb-4">نور الجبل</div>
                <div className="text-primary-foreground/80 text-lg mb-6">Noor Al Jabal</div>
                <div className={`text-primary-foreground/70 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {isRTL ? 'للتنظيف والخدمات الفنية' : 'Cleaning & Technical Services'}
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 rtl:-right-auto rtl:-left-4 bg-card rounded-xl p-4 shadow-medium">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className={`text-muted-foreground text-sm ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {isRTL ? 'عميل' : 'Clients'}
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 rtl:-left-auto rtl:-right-4 bg-card rounded-xl p-4 shadow-medium">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className={`text-muted-foreground text-sm ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {isRTL ? 'سنوات' : 'Years'}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/2 -left-8 rtl:-left-auto rtl:-right-8 w-16 h-16 bg-primary/20 rounded-full blur-xl floating-animation"></div>
              <div className="absolute -top-8 left-1/2 w-12 h-12 bg-primary-light/20 rounded-full blur-xl floating-animation" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20 fade-in-up">
          <h3 className={`text-3xl font-bold text-center text-foreground mb-12 ${isRTL ? 'font-arabic' : 'font-english'}`}>
            {isRTL ? 'قيمنا الأساسية' : 'Our Core Values'}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className={`text-xl font-bold text-foreground mb-3 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                {isRTL ? 'الجودة' : 'Quality'}
              </h4>
              <p className={`text-muted-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}>
                {isRTL 
                  ? 'نسعى للتميز في كل خدمة نقدمها'
                  : 'We strive for excellence in every service we provide'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className={`text-xl font-bold text-foreground mb-3 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                {isRTL ? 'الموثوقية' : 'Reliability'}
              </h4>
              <p className={`text-muted-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}>
                {isRTL 
                  ? 'يمكنكم الاعتماد علينا في أي وقت'
                  : 'You can depend on us at any time'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className={`text-xl font-bold text-foreground mb-3 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                {isRTL ? 'خدمة العملاء' : 'Customer Service'}
              </h4>
              <p className={`text-muted-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}>
                {isRTL 
                  ? 'رضا العملاء هو أولويتنا الأولى'
                  : 'Customer satisfaction is our top priority'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;