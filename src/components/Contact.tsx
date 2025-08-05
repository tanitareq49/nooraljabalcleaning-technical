import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const Contact = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    
    // Create WhatsApp message
    const message = `
${t.contact.form.name}: ${formData.name}
${t.contact.form.email}: ${formData.email}
${t.contact.form.phone}: ${formData.phone}
${t.contact.form.service}: ${formData.service}
${t.contact.form.message}: ${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/966123456789?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-4 ${isRTL ? 'font-arabic' : 'font-english'}`}>
            {t.contact.title}
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${isRTL ? 'font-arabic' : 'font-english'}`}>
            {t.contact.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="fade-in-up">
            <h3 className={`text-2xl font-bold text-foreground mb-8 ${isRTL ? 'font-arabic' : 'font-english'}`}>
              {isRTL ? 'تواصل معنا' : 'Get in Touch'}
            </h3>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className={`font-semibold text-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}>
                    {isRTL ? 'هاتف' : 'Phone'}
                  </div>
                  <a 
                    href="tel:+966123456789"
                    className={`text-muted-foreground hover:text-primary transition-colors ${isRTL ? 'font-arabic' : 'font-english'}`}
                  >
                    {t.contact.info.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className={`font-semibold text-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}>
                    {isRTL ? 'البريد الإلكتروني' : 'Email'}
                  </div>
                  <a 
                    href="mailto:info@nooraljabat.com"
                    className={`text-muted-foreground hover:text-primary transition-colors ${isRTL ? 'font-arabic' : 'font-english'}`}
                  >
                    {t.contact.info.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className={`font-semibold text-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}>
                    {isRTL ? 'العنوان' : 'Address'}
                  </div>
                  <p className={`text-muted-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}>
                    {t.contact.info.address}
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className={`font-semibold text-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}>
                    {isRTL ? 'ساعات العمل' : 'Working Hours'}
                  </div>
                  <p className={`text-muted-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}>
                    {isRTL ? 'السبت - الخميس: 7:00 ص - 10:00 م' : 'Sat - Thu: 7:00 AM - 10:00 PM'}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="mt-8 space-y-4">
              <a
                href="tel:+966123456789"
                className="w-full btn-primary flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
                <span className={isRTL ? 'font-arabic' : 'font-english'}>
                  {isRTL ? 'اتصل الآن' : 'Call Now'}
                </span>
              </a>
              
              <a
                href="https://wa.me/966123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-secondary flex items-center justify-center"
              >
                <Globe className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
                <span className={isRTL ? 'font-arabic' : 'font-english'}>
                  {t.contact.whatsapp}
                </span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-up lg:delay-300">
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className={`text-2xl font-bold text-card-foreground mb-6 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                {isRTL ? 'أرسل رسالة' : 'Send a Message'}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium text-card-foreground mb-2 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background text-foreground"
                    dir={isRTL ? 'rtl' : 'ltr'}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium text-card-foreground mb-2 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background text-foreground"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium text-card-foreground mb-2 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                      {t.contact.form.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background text-foreground"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium text-card-foreground mb-2 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                    {t.contact.form.service}
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background text-foreground"
                    dir={isRTL ? 'rtl' : 'ltr'}
                  >
                    <option value="">
                      {isRTL ? 'اختر الخدمة' : 'Select Service'}
                    </option>
                    <option value="deep-cleaning">
                      {isRTL ? 'التنظيف العميق' : 'Deep Cleaning'}
                    </option>
                    <option value="general-cleaning">
                      {isRTL ? 'التنظيف العام' : 'General Cleaning'}
                    </option>
                    <option value="technical-services">
                      {isRTL ? 'الخدمات الفنية' : 'Technical Services'}
                    </option>
                    <option value="other">
                      {isRTL ? 'أخرى' : 'Other'}
                    </option>
                  </select>
                </div>

                <div>
                  <label className={`block text-sm font-medium text-card-foreground mb-2 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                    {t.contact.form.message}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background text-foreground"
                    dir={isRTL ? 'rtl' : 'ltr'}
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary group">
                  <span className={isRTL ? 'font-arabic' : 'font-english'}>
                    {t.contact.form.submit}
                  </span>
                  <Send className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 fade-in-up">
          <div className="bg-card rounded-2xl p-4 shadow-soft overflow-hidden">
            <div className="w-full h-64 md:h-96 bg-muted rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className={`text-muted-foreground ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {isRTL ? 'خريطة الموقع' : 'Location Map'}
                </p>
                <p className={`text-sm text-muted-foreground mt-2 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                  {t.contact.info.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;